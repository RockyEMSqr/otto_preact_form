import { delve, dset } from "../utils";
import { Input, Item } from "./input";
import { Hidden } from './hidden';
/**
 * multi select thingamajig
 */

export class Choosy extends Input<{
    items: Item[],
}, {
    matches: Item[],
    selected: Set<Item>,
    matchIndex: number,

}> {
    type: string = 'choosy';
    state = { items: [], matches: [], selected: new Set<any>(), matchIndex: 0 } as any;
    input: HTMLInputElement | undefined | null;
    componentWillMount() {
        if (this.props.name && this.props.linkTo) {
            let selectedIds = delve(this.props.linkTo.state, this.props.name);
            if (selectedIds) {
                for (let id of selectedIds) {
                    let val = this.props.items.find(x => (typeof id == 'object') ? x.value == id.value : x.value == id);
                    if (val) {
                        this.state.selected.add(val);
                    }
                }
            }
            selectedIds = this.state.selected;
        }
    }
    select(item: any, e: any) {

        this.state.selected.add(item);

        this.setState(this.state);
        if (!e.shiftKey) {
            this.setState({ matches: [] })
            if (this.input) {
                this.input.value = '';
            }
        }
        this.onChange({});
    }
    onChange(e: any) {
        if (this.props.linkTo) {
            dset(this.props.linkTo.state, this.props.name, this.state.selected);
            this.props.linkTo.setState(this.props.linkTo.state);
        }
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }
    remove(i: Item, e: any) {
        e.preventDefault();
        this.state.selected.delete(i);
        this.setState(this.state);
        this.onChange({});
    }
    searchItems(e: any) {
        let val = e.target.value;
        let regex = new RegExp('.*' + val + '.*', 'ig');
        let matches = this.props.items.filter(x => regex.test(x.name));
        this.setState({ matches, matchIndex: 0 });
    }
    onKeyDown(e: KeyboardEvent) {
        let mi = this.state.matchIndex;
        let matches: Item[] = [];
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();

            // down arrow
            if (e.keyCode == 40) {

                mi++;

                if (this.state.matches.length == 0) {
                    matches = this.props.items;
                    mi = 0;
                }
                if (this.state.matchIndex > this.state.matches.length - 1) {
                    mi = 0;
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
        }
        // escape
        if (e.keyCode == 27) {
            matches = [];
        }
        this.setState({ ...this.state, matchIndex: mi, matches });
        return false;
    }
    onBlur(e: any) {
        //todo(rc): when selecting, blur fires first and never selects the item. 
        // possible ideas. blur on timer?
        if (e.type == 'blur') {
            setTimeout(() => {
                this.setState({ matches: [] });
            }, 200)
        }
    }
    onInputFocus() {
        this.setState({ matches: this.props.items });
    }
    render(props: any, state: any) {
        return <div class="choosy form-group" >
            {props.label && <label>{props.label}</label>}
            {/* <Text linkTo={this} onChange={this.searchItems.bind(this)} name="q"/> */}
            <input autocomplete="off" onBlur={this.onBlur.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onFocus={this.onInputFocus.bind(this)} type="text" name="q" ref={x => this.input = x} onInput={this.searchItems.bind(this)} />
            <div class="matches">
                <ul>
                    {/* ref={x => this.state.matchElements.push(x)} */}
                    {this.state.matches?.map((m: Item, mi: number) => <li class={'m ' + (this.state.matchIndex == mi ? 'm-hover' : '')} onClick={this.select.bind(this, m)}>{m.name}</li>)}
                </ul>
            </div>
            <div class="selected">
                <ul>
                    {Array.from<any>(this.state.selected).map((x: Item, i: number) => <li>
                        {x.name}
                        <Hidden name={props.name} value={x.value} />
                        <a type="button" href="#" onClick={this.remove.bind(this, x)} aria-label="Remove Selection" title="Remove Selection"><span aria-hidden="true">x</span></a>
                    </li>)}
                </ul>
            </div>
        </div>
    }
}
