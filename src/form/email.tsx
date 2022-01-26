import { Input, InputNameCheckProps } from "./input";

export class Email<T> extends Input<InputNameCheckProps<T>> {
    type = "email"
    render(props?: any, state?: any) {
        return super.render(props, state);
    }
}