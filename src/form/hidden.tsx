import { Input } from "./input";

export class Hidden extends Input {
    type = "hidden";
    render(props?: any, state?: any) {
        return <input onChange={this.getOnChange()} value={this.getValue()} type={this.type} class="form-control" name={props.name} />
    }
}
/**
 * Only there if inital state has a val
 */
export class ConditionalHidden extends Hidden {
    render(props?: any, state?: any) {
        if (!!!this.getValue()) {
            return null as any;
        }
        return super.render(props, state);
    }
}