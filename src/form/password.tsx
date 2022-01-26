import { Input, InputNameCheckProps } from "./input";

export class Password<T> extends Input<InputNameCheckProps<T>> {
    type = "password"
    render(props?: any, state?: any) {
        return super.render(props, state);
    }
}