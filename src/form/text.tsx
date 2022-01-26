import { AutoPath } from "ts-toolbelt/out/Function/AutoPath";
import { Input, InputNameCheckProps } from "./input";

export class Text<T> extends Input<InputNameCheckProps<T>> {
    type = "text";
    render(props?: any, state?: any) {
        return super.render(props, state)
    }
}