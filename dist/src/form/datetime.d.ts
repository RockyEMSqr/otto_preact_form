import { h } from 'preact';
import { DateTime } from 'luxon';
import { Input, InputNameCheckProps } from '../../index';
export declare abstract class DTInput<T> extends Input<InputNameCheckProps<T>> {
    getDT(val: number | string | Date | undefined): DateTime | undefined;
    getValue(): string | undefined;
    onChangeCB: any;
    getOnChange(): any;
}
export declare class FDate<T> extends DTInput<T> {
    type: string;
    getDateString(): string | undefined;
    render(props: any, state: any): h.JSX.Element;
}
export declare class Time<T> extends DTInput<T> {
    type: string;
    getTimeStr(): string | undefined;
    render(props: any, state: any): h.JSX.Element;
}
export declare class FDateTime<T> extends DTInput<T> {
    type: string;
    getDateStr(): string | undefined;
    getTimeStr(): string | undefined;
    dateInp: HTMLInputElement | undefined | null;
    timeInp: HTMLInputElement | undefined | null;
    getOnChange(): any;
    render(props?: any, state?: any): h.JSX.Element;
}
