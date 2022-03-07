import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export declare class Textarea<T> extends Input<InputNameCheckProps<T>> {
    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean;
    te: HTMLTextAreaElement | undefined | null;
    type: string;
    componentDidMount(): void;
    componentWillReceiveProps(): void;
    getValue(): any;
    render(props: any, state: any): h.JSX.Element;
}
