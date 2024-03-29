export declare function dset(obj: any, keys: string | any, val: any): void;
export declare function addBlankDefaultToItems(items: any[], defaultText?: string): {
    name: string;
    value: string;
    disabled: boolean;
    selected: boolean;
}[];
/**
 * todo(rc): needs to be better
 */
export declare function formatPhoneNumber(s: string): string;
import dlv from 'dlv';
export declare function delve(object: object, key: string | Array<string | number>, defaultValue?: any): any;
export declare const dget: typeof dlv;
/**
 * Debounce a function call.
 * Useful for oninputs so its only called when user stops typing
 * @param delay
 * @param fn
 */
export declare function debounce(delay: number, fn: Function): (...args: any[]) => void;
/**
 * debounce with a default 500 ms(for now)
 * @param fn
 */
export declare function debouncex(fn: Function): (...args: any[]) => void;
