import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export declare class Checkbox<T> extends Input<InputNameCheckProps<T>> {
    type: string;
    onClick(v: any, e: any): void;
    get checked(): boolean | undefined;
    render(): h.JSX.Element;
}
