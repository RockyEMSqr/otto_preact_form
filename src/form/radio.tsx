import { dset } from "../utils";
import { Input, Item } from "./input";

export class RadioGroup extends Input<{ items: Item[] }> {
    type = "radio";
    onClick(v: any, e: Event) {

        if (this.props.linkTo) {
            dset(this.props.linkTo.state, this.props.name, v);
            this.props.linkTo.setState(this.props.linkTo.state);
            if (this.props.onChange) {
                (e as any).changeToValue = v;
                this.props.onChange(e);
            }
        }
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
    render(props?: any, state?: any) {
        return <div class="radio-group">
            <p class={`group-label ${this.labelClass}`}>{this.label}</p><ul class="radio">
                {props.items && props.items.map((x: Item) => (
                    <li>
                        <input disabled={props.disabled} type={this.type} checked={this.getValue() == x.value} name={props.name} value={x.value} id={props.name + x.value} onClick={this.onClick.bind(this, x.value)} />
                        <label for={props.name + x.value}>
                            <span>{x.name}</span>
                        </label>
                    </li>
                ))}
            </ul></div>;
    }
}
