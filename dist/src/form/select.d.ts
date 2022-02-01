import { Input, InputNameCheckProps, Item } from "./input";
import { h } from 'preact';
export declare class Select<T> extends Input<InputNameCheckProps<T> & {
    addDefaultBlankToItems?: boolean | string;
    items: Item[];
    readOnly?: boolean;
}> {
    type: string;
    isSelected(val: any): boolean;
    render(props?: any, state?: any): h.JSX.Element;
}
export declare class MultiSelect extends Input<{
    items: {
        name: any;
        value: any;
    }[];
}> {
    type: string;
    isSelected(val: any): boolean;
    render(props?: any, state?: any): h.JSX.Element;
}
