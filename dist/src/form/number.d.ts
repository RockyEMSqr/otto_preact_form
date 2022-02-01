import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export declare class Number<T> extends Input<InputNameCheckProps<T>> {
    type: string;
    render(props?: any, state?: any): h.JSX.Element;
}
export declare class Decimal<T> extends Input<InputNameCheckProps<T>> {
    type: string;
    render(props?: any, state?: any): h.JSX.Element;
}
export declare class USD<T> extends Input<InputNameCheckProps<T>> {
    type: string;
    prepend: h.JSX.Element;
    render(props?: any, state?: any): h.JSX.Element;
}
export declare class Percent<T = unknown> extends Input<InputNameCheckProps<T>> {
    type: string;
    append: h.JSX.Element;
    render(props?: any, state?: any): h.JSX.Element;
}
