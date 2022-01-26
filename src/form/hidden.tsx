import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export class Hidden<T> extends Input<InputNameCheckProps<T>> {
    type = "hidden";
    render(props?: any, state?: any) {
        return <input onChange={this.getOnChange()} value={this.getValue()} type={this.type} class="form-control" name={props.name} />
    }
}
/**
 * Only there if inital state has a val
 */
export class ConditionalHidden<T> extends Hidden<T> {
    render(props?: any, state?: any) {
        if (!!!this.getValue()) {
            return null as any;
        }
        return super.render(props, state);
    }
}