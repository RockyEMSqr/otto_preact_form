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
    thewindowClickHandler: (e: any) => void;
    thewindowFocusInHandler: (e: any) => void;
    theFakeInputHandler: (e: any) => void;
    /**
     *
     */
    constructor();
    componentWillMount(): void;
    fakeinputHandler(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    windowFocusInHandler(e: any): void;
    windowClickHandler(e: any): void;
    select(item: any, e?: any): void;
    clearInput(): void;
    onChange(e: any): Promise<void>;
    remove(i: number, e: Event): void;
    searchItems(e: any): void;
    onKeyDown(e: KeyboardEvent): boolean;
    blurTimer: any;
    onBlur(e: any): void;
    focusInput(): void;
    onInputFocus(): void;
    render(props: any, state: any): h.JSX.Element;
}
