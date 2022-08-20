
import { h, Component } from 'preact';
import { debouncex } from '../utils';
// import { getJSON } from '../../otto_modules/otto_fetch'
export class TypeAhead<T = {}> extends Component<{
    required?,
    showClearButton?: boolean,
    value?: string,
    getResults: (str) => T[],
    endPoint?: string,
    label: string,
    onSelect: (x) => void,
    display?: (i: T) => any
}, { results: T[], selected: T|null, value: string }> {

    state = { results: [], selected: null, value: '' }
    input;
    constructor(props, ctx) {
        super(props, ctx);
    }
    componentDidMount() {
        this.setState({ value: this.props.value })
    }
    async getResults(str) {
        let results = await this.props.getResults(str);
        this.setState({ results });
    }
    async keyUp(e) {
        this.setState({ value: e.target.value })
        await this.getResults(e.target.value);
    }
    clear(e) {
        e.preventDefault();
        this.input.value = '';
        this.setState({ results: [], value: '' });
        if (this.props.onSelect) {
            this.props.onSelect(null);
        }
    }
    select(thing, e: Event) {
        let selected = thing;
        if (selected) {
            if (this.props.onSelect) {
                this.props.onSelect(selected);
            }
            this.setState({ results: [], value: this.props.display ? this.props.display(selected) : '' });
        }
    }
    async toggleList(e) {
        if (e.type == 'focus') {
            await this.getResults(e.target.value);

        }
        //todo(rc): when selecting, blur fires first and never selects the item. 
        // possible ideas. blur on timer?
        if (e.type == 'blur') {
            setTimeout(() => {
                this.setState({ results: [] });
            }, 200)
        }
    }
    render(props, state) {
        let required = props.required
        return <div class={"type-ahead-component form-group " + (required ? 'required' : '')}>
            <label class={(required ? 'required' : '')}>{props.label}</label>
            <div class={"input-group " + (required ? 'required' : '')}>
                <input onFocus={this.toggleList.bind(this)} onBlur={this.toggleList.bind(this)} ref={x => this.input = x} type="text" value={state.value} onKeyUp={debouncex(this.keyUp.bind(this))} />
                {this.props.showClearButton && <button onClick={this.clear.bind(this)}>Clear</button>}
            </div>
            <ul>
                {state.results.map(x => <li onClick={this.select.bind(this, x)}>{this.props.display ? this.props.display(x) : x.name}</li>)}
            </ul>
        </div>
    }
}
