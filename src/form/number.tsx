import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export class Number<T> extends Input<InputNameCheckProps<T>> {
    type = "number";
    render(props?: any, state?: any) {
        return super.render(props, state)
    }
}
export class Decimal<T> extends Input<InputNameCheckProps<T>> {
    type = "number";
    render(props?: any, state?: any) {
        return super.render({ ...props, ...{ step: 0.01 } })
    }
}
export class USD<T> extends Input<InputNameCheckProps<T>> {
    type = "number";
    prepend = <span class="input-group-prepend">
        <span class="input-group-text">$</span>
    </span>;
    render(props?: any, state?: any) {
        return super.render({ ...props, ...{ step: 0.01 } })
    }
}
export class Percent<T=unknown> extends Input<InputNameCheckProps<T>> {
    type = "number";
    // prepend = <div class="input-group-prepend">
    //     <div class="input-group-text">%</div>
    // </div>;
    append = <span class="input-group-append">
        <span class="input-group-text">%</span>
    </span>;
    // append = 
    render(props?: any, state?: any) {
        return super.render({ ...props, ...{ step: 0.01 } })
    }
}