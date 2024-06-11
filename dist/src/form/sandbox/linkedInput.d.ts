import { h } from 'preact';
import preact, { Component } from "preact";
declare type InputProps<T, N extends string> = {
    name: string;
    label: string | preact.FunctionalComponent | Component;
    state: T;
    setState: Function;
};
export declare function getId(name: string): string;
export declare function link(state: any, setState: Function, path: string): (e: any) => void;
export declare type InputTypeStrings = 'text' | 'date';
export declare function getInput<T extends object, N extends string>(type: InputTypeStrings, p: InputProps<T, N>, value?: any): h.JSX.Element;
export declare function LinkedText<T extends object, N extends string>(p: InputProps<T, N>): h.JSX.Element;
export declare function DateInp<T extends Object, N extends string>(p: InputProps<T, N>): h.JSX.Element;
export {};
