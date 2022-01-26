import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact'; // error using vite?
export class Textarea<T> extends Input<InputNameCheckProps<T>>{

    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any) {
        //todo(rc): why this always return true? Whats did it fix? what browser?
        return true;
    };
    te: HTMLTextAreaElement | undefined | null;
    type = "";

    componentDidMount() {
        if (this.te) {
            this.te.value = this.getValue();
        }
    }
    componentWillReceiveProps() {
        if (this.te) {
            this.te.value = this.getValue();
        }
    }

    getValue() {
        let val = super.getValue();
        if (!val) {
            return '';
        }
        return val;
    }
    render(props: any, state: any) {
        let rows = props.rows || 3;
        let cols = props.cols || null;
        return <div class="form-group vertical-top">
            <label for={this.props.name} class={this.labelClass}>{this.props.label}</label>
            <textarea disabled={props.disabled} ref={x => this.te = x} autocomplete="off" onInput={this.getOnChange()} required={this.props.required} name={this.props.name} onChange={this.getOnChange()} class={this.inputClass} rows={rows} cols={cols}></textarea>
        </div>
    }
}