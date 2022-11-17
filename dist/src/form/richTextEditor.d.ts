import { h } from 'preact';
import RichTextArea from 'preact-richtextarea';
import { AllInputProps, Input, InputNameCheckProps } from './input';
export declare class RichTextEditor<T> extends Input<InputNameCheckProps<T> & {
    toolbarAdditions?: any;
}, any> {
    type: string;
    editor: RichTextArea;
    exec(c: string, v?: any): void;
    qcs(c: string): any;
    clear(): void;
    componentWillReceiveProps(nextProps: Readonly<AllInputProps<InputNameCheckProps<T> & {
        toolbarAdditions?: any;
    }>>, nextContext: any): void;
    actions: {
        [key: string]: any;
    };
    constructor(p: any, c: any);
    checkCommands(e: any): void;
    onInput(e: any): void;
    render(props: any): h.JSX.Element;
}
