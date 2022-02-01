import { Input, Item } from "./input";
import { h } from 'preact';
export declare class RadioGroup extends Input<{
    items: Item[];
}> {
    type: string;
    onClick(v: any, e: Event): void;
    render(props?: any, state?: any): h.JSX.Element;
}
