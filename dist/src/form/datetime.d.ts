import { h } from 'preact';
import { DateTime } from 'luxon';
import { Input, InputNameCheckProps } from "./input";
export declare abstract class DTInput<T> extends Input<InputNameCheckProps<T> & {
    maxDate?: Date;
    maxTime?: Date;
}> {
    getDT(val: number | string | Date | undefined): DateTime | undefined;
    getValue(): string;
    onChangeCB: any;
    getOnChange(): any;
}
export declare class FDate<T> extends DTInput<T> {
    type: string;
    getDateString(): string;
    render(props: any, state: any): h.JSX.Element;
}
export declare class Time<T> extends DTInput<T> {
    type: string;
    getTimeStr(): string;
    render(props: any, state: any): h.JSX.Element;
}
export declare class FDateTime<T> extends DTInput<T> {
    type: string;
    getDateStr(): string;
    getTimeStr(): string;
    dateInp: HTMLInputElement | undefined | null;
    timeInp: HTMLInputElement | undefined | null;
    getOnChange(): any;
    render(props?: any, state?: any): h.JSX.Element;
}
