import { Input, InputNameCheckProps, Item } from "./input";
import { h } from 'preact';
/**
 * multi select thingamajig
 */
export declare class Choosy<T> extends Input<InputNameCheckProps<T> & {
    items: Item[];
}, {
    matches: Item[];
    selected: Set<Item>;
    matchIndex: number;
}> {
    type: string;
    state: any;
    input: HTMLInputElement | undefined | null;
    componentWillMount(): void;
    select(item: any, e: any): void;
    onChange(e: any): void;
    remove(i: Item, e: any): void;
    searchItems(e: any): void;
    onKeyDown(e: KeyboardEvent): boolean;
    onBlur(e: any): void;
    onInputFocus(): void;
    render(props: any, state: any): h.JSX.Element;
}