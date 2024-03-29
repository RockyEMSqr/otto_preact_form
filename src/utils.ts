export function dset(obj: any, keys: string | any, val: any) {
    keys.split && (keys = keys.split('.'));
    var i = 0, l = keys.length, t = obj, x;
    for (; i < l; ++i) {
        x = t[keys[i]];
        t = t[keys[i]] = (i === l - 1 ? val : (x != null ? x : (!!~keys[i + 1].indexOf('.') || !(+keys[i + 1] > -1)) ? {} : []));
    }
}
export function addBlankDefaultToItems(items: any[], defaultText?: string) {
    return [{ name: defaultText, value: '', disabled:true }].concat(items);
}
/**
 * todo(rc): needs to be better
 */
export function formatPhoneNumber(s: string) {
    console.info('handle formatting better.')
    var s2 = ("" + s).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}
import dlv from 'dlv';
export function delve(object: object, key: string | Array<string | number>, defaultValue?: any) {
    return dlv(object, key, defaultValue);
}
export const dget = dlv;
/**
 * Debounce a function call. 
 * Useful for oninputs so its only called when user stops typing
 * @param delay 
 * @param fn 
 */
export function debounce(delay: number, fn: Function) {
    let timerId: any;
    return function (...args: any[]) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}
/**
 * debounce with a default 500 ms(for now)
 * @param fn 
 */
export function debouncex(fn: Function) {
    return debounce(500, fn);
}
