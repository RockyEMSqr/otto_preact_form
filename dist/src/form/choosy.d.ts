import { Input, InputNameCheckProps, Item } from "./input";
import { h } from 'preact';
/**
 * multi select thingamajig
 */
export declare class Choosy<T> extends Input<InputNameCheckProps<T> & {
    items: Item[];
}, {
    matches: Item[];
    selected: Item[];
    matchIndex: number;
}> {
    type: string;
    state: any;
    input: HTMLInputElement | undefined | null;
    componentWillMount(): void;
    select(item: any, e: any): void;
    onChange(e: any): Promise<void>;
    remove(i: number, e: any): void;
    searchItems(e: any): void;
    onKeyDown(e: KeyboardEvent): boolean;
    blurTimer: any;
    onBlur(e: any): void;
    focusInput(): void;
    onInputFocus(): void;
    render(props: any, state: any): h.JSX.Element;
}
