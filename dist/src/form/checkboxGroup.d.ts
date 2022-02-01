import { Input, Item } from "./input";
import { h } from 'preact';
export declare class CheckboxGroup extends Input<{
    items: Item[];
}> {
    type: string;
    render(props: any, state: any): h.JSX.Element;
}
