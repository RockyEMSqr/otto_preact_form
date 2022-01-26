import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export class Text<T> extends Input<InputNameCheckProps<T>> {
    type = "text";
    render(props?: any, state?: any) {
        return super.render(props, state)
    }
}