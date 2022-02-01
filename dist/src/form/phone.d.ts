import { Input } from "./input";
import { Component } from 'preact';
import { h } from 'preact';
export declare class Phone extends Input {
    getValue(): any;
    type: string;
}
export declare class PhoneAndType extends Component<any, any> {
    /**
     *
     */
    constructor();
    render(): h.JSX.Element;
}
export declare class Phones extends Component<any, any> {
    state: {
        phones: any;
    };
    get name(): string;
    getPhones(): any;
    addPhone(e: Event): void;
    removePhone(i: number): void;
    render(): h.JSX.Element;
}
