import { Input, Item } from "./input";
import { Checkbox } from './checkbox';
import { h } from 'preact';
export class CheckboxGroup extends Input<{ items: Item[] }> {
    type = "checkbox";

    render(props: any, state: any) {
        return <div class="checkbox-group">
            <p class={`group-label ${this.isRequired ? 'required' : ''}`}>{this.label}</p><ul class="checkbox">
                {props.items && props.items.map((x: Item) => (
                    <li>
                        <Checkbox linkTo={this.props.linkTo} disabled={props.disabled} onChange={this.props.onChange} name={this.props.name as string} label={x.name} value={x.value} />
                    </li>
                ))}
            </ul></div>;
    }
}