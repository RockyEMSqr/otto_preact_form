import { delve, dset } from "../utils";
import { Input, InputNameCheckProps, Item } from "./input";
import { Hidden } from './hidden';
import { h } from 'preact';
/**
 * multi select thingamajig
 */


export class Choosy<T={}> extends Input<InputNameCheckProps<T> & {
    items: Item[],
}, {
    matches: Item[],
    selected: Item[],
    matchIndex: number,
    classes:string[]

}> {
    type: string = 'choosy';
    state = { classes:[] as string[], items: [] as Item[], matches: [] as Item[], selected: [] as Item[], matchIndex: 0 };
    input: HTMLInputElement | undefined | null;
    thewindowClickHandler: (e: any) => void;
    thewindowFocusInHandler: (e: any) => void;
    theFakeInputHandler: (e: any) => void;
    /**
     *
     */
    constructor() {
        super();
        this.thewindowFocusInHandler = this.windowFocusInHandler.bind(this);
        this.thewindowClickHandler = this.windowClickHandler.bind(this);
        this.theFakeInputHandler = this.fakeinputHandler.bind(this);

    }
    componentWillMount() {
        this.state.classes.push('choosy');
        this.state.classes.push('form-group');
        if(this.props.required){
            this.state.classes.push('required')
            this.state.classes.push('invalid')
        }
        if (this.props.name && this.props.linkTo) {
            let selectedIds = delve(this.props.linkTo.state, this.props.name);
            if (selectedIds) {
                for (let id of selectedIds) {
                    let val = this.props.items.find(x => (typeof id == 'object') ? x.value == id.value : x.value == id);
                    if (val) {
                        this.state.selected.push(val);
                    }
                }
            }
        }
        if (this.props.value) {
            let vals = this.props.value as any[];
            if (!Array.isArray(this.props.value)) {
                vals = [vals];
            }
            for (let id of vals) {
                let val = this.props.items.find(x => (typeof id == 'object') ? x.value == id.value : x.value == id);
                if (val) {
                    this.state.selected.push(val);
                }
            }
        }
        this.setState({...this.state});
        window.addEventListener('focusin', this.thewindowFocusInHandler);
        window.addEventListener('click', this.thewindowClickHandler);
    }
    fakeinputHandler(e){
        e.target.value = this.input?.innerText;
        this.searchItems(e);
    }
    componentDidMount() {
        this.input?.addEventListener("input", this.theFakeInputHandler, false);
    }
    componentWillUnmount() {
        window.removeEventListener('focusin', this.thewindowFocusInHandler);
        window.removeEventListener('click', this.thewindowClickHandler);
        this.input?.removeEventListener("input", this.theFakeInputHandler);
    }
    windowFocusInHandler(e) {
        if (e.target != this.input) {
            this.blurTimer = null;
            this.setState({ matches: [] })
        }
    }
    windowClickHandler(e:any) {

        //check if element clicked was part of choosy.
        // if not close it
        let childOfChoosy = false;
        // @ts-ignore
        let parent = e.target.parentElement;
        while (parent) {
            if (parent == this.base) {
                childOfChoosy = true;
                break;
            }
            parent = parent.parentElement;
        }
        if (!childOfChoosy) {
            // console.log('ChildofChoosy', childOfChoosy);
            this.blurTimer = null;
            this.setState({ matches: [] })
        }
    }
    select(item: any, e?: any) {
        e.stopImmediatePropagation();
        if (!this.state.selected.find(x => x.value == item.value)) {
            this.state.selected.push(item);
            // if(this.props.required){
            //     this.state.classes.splice(this.state.classes.indexOf('invalid'), 1)
            // }

            this.setState(this.state);
            if (!e.shiftKey) {
                this.setState({ matches: [] })
                this.clearInput();
            }
        }
        this.onChange({});
    }
    clearInput() {
        if (this.input) {
            this.input.value = '';
            this.input.innerText = '';
        }
    }
    async onChange(e: any) {
        if (this.props.linkTo) {
            dset(this.props.linkTo.state, this.props.name, this.state.selected);
            this.props.linkTo.setState(this.props.linkTo.state);
        }
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        // setTimeout(()=>{
        // 	this.focusInput();
        // }, 200);
    }
    remove(i: number, e: Event) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.state.selected.splice(i, 1);
        // if(this.state.selected.length == 0 && this.props.required){
        //     this.state.classes.push('invalid')
        // }
        this.setState(this.state);
        this.onChange({});
    }

    betterRegExp(string: string) {
        if(!string){
            string = '';
        }
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    }


    searchItems(e: any) {
        let val = e.target.value;
        let betterVal = this.betterRegExp(val);
        let regex = new RegExp(betterVal, 'i');
        // let regex = new RegExp('.*' + val + '.*', 'ig');
        let matches = this.props.items.filter(x => regex.test(x.name));
        console.log(matches)
        this.setState({ matches, matchIndex: 0 });
    }
    onKeyDown(e: KeyboardEvent) {
        // console.log(e);
        let mi = this.state.matchIndex;
        let matches: Item[] = this.state.matches;
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();

            // down arrow
            if (e.keyCode == 40) {

                mi++;

                // if (this.state.matches.length == 0) {
                // matches = this.props.items;
                // mi = 0;
                // }
                if (this.state.matchIndex > this.state.matches.length - 1) {
                    mi = 0;
                }
                if (mi == 0 && matches.length == 0) {
                    matches = this.props.items;
                }

            }
            // up Arrow
            if (e.keyCode == 38) {

                mi--;
                if (this.state.matchIndex < 0) {
                    mi = this.state.matches.length - 1;
                }
            }
            // Note(rc) Not sure if this is the best way to scroll into view
            // if (this.state.matchElements[this.state.matchIndex]) {
            //     this.state.matchElements[this.state.matchIndex].scrollIntoViewIfNeeded()
            // }
            // Note(rc) lets get the nth
            let element = document.querySelector(`.matches li:nth-of-type(${this.state.matchIndex})`);
            if (element) {
                element.scrollIntoView({ behavior: 'auto', block: 'start' });
                // if((element as any).scrollIntoViewIfNeeded){
                //     (element as any).scrollIntoViewIfNeeded()
                // }
            }
        }
        // enter
        if (e.keyCode == 13) {
            e.preventDefault();
            this.select(this.state.matches[this.state.matchIndex], e);
            this.clearInput();
            matches = [];
        }
        // escape
        if (e.keyCode == 27) {
            matches = [];
        }
        this.setState({ ...this.state, matchIndex: mi, matches });
        return false;
    }
    blurTimer: any = null;
    onBlur(e) {
        //todo(rc): when selecting, blur fires first and never selects the item. 
        // possible ideas. blur on timer?
        // console.log(e.type);
        // e.preventDefault();
        if (e.type == 'blur' || e.type == 'focusout') {
            let choosy = this;
            this.blurTimer = setTimeout(function () {
                if (document.activeElement != choosy.input) {
                    choosy.setState({ matches: [] });
                    choosy.clearInput();
                    choosy.blurTimer = null;
                }
            }, 300)
        }

    }
    focusInput() {
        // console.log('focus', document.activeElement, this.input);
        if (document.activeElement != this.input) {
            if (this.blurTimer) {
                clearTimeout(this.blurTimer);
            }
            if (this.input) {
                this.input.focus();
            }
        }
    }
    onInputFocus() {
        this.setState({ matches: this.props.items });
    }
    render(props: any, state: any) {
        return <div class={this.state.classes.join(' ')} onClick={this.focusInput.bind(this)}>
            {props.label && <label>{props.label}</label>}
            {/* <Text linkTo={this} onChange={this.searchItems.bind(this)} name="q"/> */}
            <div class="selected">
                <ul>
                    {Array.from(this.state.selected).map((x: any, i) => <li>
                        <span>{x.name}</span>
                        <Hidden<void> name={props.name} value={x.value} />
                        <button onClick={this.remove.bind(this, i)} aria-label="Remove Selection" title="Remove Selection">×</button>
                    </li>)}
                    <li class="input">
                        {/* <input autocomplete="off" onBlur={this.onBlur.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onFocus={this.onInputFocus.bind(this)} type="text" name="q" ref={x => this.input = x} onInput={this.searchItems.bind(this)} /> */}
                        <span
                        // @ts-ignore
                            ref={x => this.input = x}
                            contentEditable={true}
                            onInput={this.searchItems.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                            onFocus={this.onInputFocus.bind(this)}
                            onKeyDown={this.onKeyDown.bind(this)}
                        ></span>
                    </li>
                </ul>

            </div>
            {this.state.matches && this.state.matches.length > 0 &&
                <div class="matches">
                    <ul>
                        {/* ref={x => this.state.matchElements.push(x)} */}
                        {this.state.matches.map((m, mi) => <li class={'m ' + (this.state.matchIndex == mi ? 'm-hover' : 'active') + (this.state.selected.find(x => m.value == x.value) ? ' selected' : '')} onClick={this.select.bind(this, m)}>{m.name}</li>)}
                    </ul>
                </div>}

        </div>
    }
}
