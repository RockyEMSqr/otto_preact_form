import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export declare class Hidden<T> extends Input<InputNameCheckProps<T>> {
    type: string;
    render(props?: any, state?: any): h.JSX.Element;
}
/**
 * Only there if inital state has a val
 */
export declare class ConditionalHidden<T> extends Hidden<T> {
    render(props?: any, state?: any): any;
}
