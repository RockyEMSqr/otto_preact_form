import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export declare class Text<T> extends Input<InputNameCheckProps<T>> {
    type: string;
    render(props?: any, state?: any): h.JSX.Element;
}
