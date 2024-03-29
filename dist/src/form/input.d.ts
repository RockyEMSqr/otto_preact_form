import { Component, h } from 'preact';
import { JSXInternal as JSX } from 'preact/src/jsx';
export declare type Item = {
    name: any;
    value: any;
    disabled?: boolean;
    selected?: boolean;
};
export declare type InputNameCheckProps<T = void> = {
    name?: string;
};
export declare type InputProps = {
    linkTo?: {
        state: any;
        setState: any;
    };
    inputClass?: string;
    onChange?: (e: any, o1?: any) => void;
    onClick?: (e: any, o1?: any) => void;
    onInput?: (e: any) => void;
    label?: string | JSX.Element;
    wrapperClass?: string;
};
export declare type AllInputProps<P> = P & InputProps & Pick<JSX.HTMLAttributes, Exclude<keyof JSX.HTMLAttributes, keyof InputProps>>;
export declare type InputState = {
    value?: any;
};
export declare abstract class Input<P = {}, S = {}> extends Component<AllInputProps<P> & {
    inputStyle?: string;
}, S & InputState> {
    abstract type: string;
    prepend: undefined | string | JSX.Element;
    append: undefined | string | JSX.Element;
    inp: HTMLInputElement | HTMLSelectElement | undefined | null;
    getValue(): any;
    getOnChange(): any;
    getOnInput(): (e: any) => void;
    get label(): string | h.JSX.Element;
    get isRequired(): boolean;
    get inputClass(): string;
    get labelClass(): "" | "required";
    get id(): string;
    get wrapperClass(): string;
    get inputWrapperClass(): string;
    render(props?: any, state?: any): h.JSX.Element;
}
