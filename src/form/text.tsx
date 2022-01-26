import { AutoPath } from "ts-toolbelt/out/Function/AutoPath";
import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export class Text<T> extends Input<InputNameCheckProps<T>> {
    // export class Text<O, P extends string = ''> extends Input<{
    // name?: AutoPath<O, P>,
    // name?: O extends object ? AutoPath<O, P> : string,
    // }>
    // {
    type = "text";
    render(props?: any, state?: any) {
        return super.render(props, state)
    }
}