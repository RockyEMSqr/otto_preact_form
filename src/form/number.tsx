import { Input } from "./input";

export class Number extends Input {
    type = "number";
    render(props?: any, state?: any) {
        return super.render(props, state)
    }
}
export class Decimal extends Input {
    type = "number";
    render(props?: any, state?: any) {
        return super.render({ ...props, ...{ step: 0.01 } })
    }
}
export class USD extends Input {
    type = "number";
    prepend = <span class="input-group-prepend">
        <span class="input-group-text">$</span>
    </span>;
    render(props?: any, state?: any) {
        return super.render({ ...props, ...{ step: 0.01 } })
    }
}
export class Percent extends Input {
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