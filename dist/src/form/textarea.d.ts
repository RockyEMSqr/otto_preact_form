import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export declare class Textarea<T> extends Input<InputNameCheckProps<T>> {
    te: HTMLTextAreaElement | undefined | null;
    type: string;
    getValue(): any;
    render(props: any, state: any): h.JSX.Element;
}
