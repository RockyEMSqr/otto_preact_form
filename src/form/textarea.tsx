import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact'; // error using vite?
export class Textarea<T> extends Input<InputNameCheckProps<T>>{
    te: HTMLTextAreaElement | undefined | null;
    type = "";

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
            <textarea disabled={props.disabled} value={this.getValue()} ref={x => this.te = x} autocomplete="off" onInput={this.getOnChange()} required={this.props.required} name={this.props.name} onChange={this.getOnChange()} class={this.inputClass} rows={rows} cols={cols}></textarea>
        </div>
    }
}