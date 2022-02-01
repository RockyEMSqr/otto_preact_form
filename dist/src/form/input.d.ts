import { Component, h } from 'preact';
import { JSXInternal as JSX } from 'preact/src/jsx';
export declare type Item = {
    name: any;
    value: any;
};
declare type Join<K, P> = K extends string | number ? P extends string | number ? `${K}${"" extends P ? "" : "."}${P}` : never : never;
declare type Prev = [
    never,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    ...0[]
];
declare type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? {
    [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>>;
}[keyof T] : "";
export declare type InputNameCheckProps<T> = {
    name?: T extends object ? Leaves<T> : string;
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
};
export declare type AllInputProps<P> = P & InputProps & Pick<JSX.HTMLAttributes, Exclude<keyof JSX.HTMLAttributes, keyof InputProps>>;
export declare type InputState = {
    value?: any;
};
export declare abstract class Input<P = {}, S = {}> extends Component<AllInputProps<P>, S & InputState> {
    abstract type: string;
    prepend: undefined | string | JSX.Element;
    append: undefined | string | JSX.Element;
    inp: HTMLInputElement | undefined | null;
    getValue(): any;
    getOnChange(): ((e: any, o1?: any) => void) | (<TEvent extends Event = Event>(e: TEvent) => void) | undefined;
    getOnInput(): ((e: any) => void) | undefined;
    get label(): string | h.JSX.Element | undefined;
    get isRequired(): boolean | undefined;
    get inputClass(): string;
    get labelClass(): "" | "required";
    get id(): string | undefined;
    render(props?: any, state?: any): h.JSX.Element;
}
export {};
