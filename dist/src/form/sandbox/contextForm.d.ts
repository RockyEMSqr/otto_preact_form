import { h } from 'preact';
declare type CreateCtxType<T> = {
    state: T;
    setState: Function;
};
declare type FormCtx<T> = {
    onSubmit: (e: any) => void;
} & CreateCtxType<T>;
export declare const FormContext: import("preact").Context<CreateCtxType<any>>;
export declare function CtxForm<T>(p: FormCtx<T> & {
    children?: any[];
}): h.JSX.Element;
declare type CtxFormInputProps<O, P extends string> = {
    name: string;
    label: string;
};
export declare function Text<O, P extends string>(p: CtxFormInputProps<O, P>): h.JSX.Element;
export declare function DDate<O, P extends string>(p: CtxFormInputProps<O, P>): h.JSX.Element;
export {};
