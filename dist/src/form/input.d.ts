import { Component, h } from 'preact';
import { JSXInternal as JSX } from 'preact/src/jsx';
export declare type Item = {
    name: any;
    value: any;
};
declare type NotRecursiveKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object ? `${Key}` | {
        [Key1 in keyof ObjectType[Key] & (string | number)]: ObjectType[Key][Key1] extends object ? `${Key}.${Key1}` | {
            [Key2 in keyof ObjectType[Key][Key1] & (string | number)]: ObjectType[Key][Key1][Key2] extends object ? `${Key}.${Key1}.${Key2}` | {
                [Key3 in keyof ObjectType[Key][Key1][Key2] & (string | number)]: ObjectType[Key][Key1][Key2] extends object ? `${Key}.${Key1}.${Key2}.${Key3}` | 'Max Hit. Tell Rocky if you need more' : `${Key}.${Key1}.${Key2}.${Key3}`;
            }[keyof ObjectType[Key][Key1][Key2] & (string | number)] : `${Key}.${Key1}.${Key2}`;
        }[keyof ObjectType[Key][Key1] & (string | number)] : `${Key}.${Key1}`;
    }[keyof ObjectType[Key] & (string | number)] : `${Key}`;
}[keyof ObjectType & (string | number)];
export declare type InputNameCheckProps<T = void> = {
    name?: T extends void ? string : T extends Object ? NotRecursiveKeyOf<T> : string;
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
    inp: HTMLInputElement | HTMLSelectElement | undefined | null;
    getValue(): any;
    getOnChange(): (e: any, o1?: any) => void;
    getOnInput(): (e: any) => void;
    get label(): string | h.JSX.Element;
    get isRequired(): boolean;
    get inputClass(): string;
    get labelClass(): "" | "required";
    get id(): string;
    render(props?: any, state?: any): h.JSX.Element;
}
export {};
