import { addBlankDefaultToItems, delve } from "../utils";
import { Input, InputNameCheckProps, Item } from "./input";
import { h } from 'preact';
export class Select<T> extends Input<InputNameCheckProps<T> & { addDefaultBlankToItems?: boolean | string, items: Item[], readOnly?: boolean, }>{
    type = "";
    isSelected(val: any) {
        if (this.props.linkTo) {
            let dval = delve(this.props.linkTo.state, this.props.name as string);
            if (dval === undefined || dval === null) {
                return false;
            }
            if (typeof dval == 'object') {
                return dval.id == val;
            }
            if (typeof val == 'number' && typeof dval == 'string') {
                return dval === val.toString();
            }

            return dval === val;

        } else {
            return super.getValue() === val;
        }
    }
    render(props?: any, state?: any) {
        let attributes = { ...props, linkTo: null, items: null, readOnly: this.props.readOnly }
        let items = this.props.items;
        if (this.props.addDefaultBlankToItems) {
            if (typeof this.props.addDefaultBlankToItems == 'string') {
                items = addBlankDefaultToItems(this.props.items, this.props.addDefaultBlankToItems);
            } else {
                items = addBlankDefaultToItems(this.props.items);

            }
        }
        return <div class="form-group">
            <label class={this.labelClass} for={this.id}>{this.label}</label>
            <div class="select-w">
                <select ref={x => this.inp = x} {...attributes} disabled={props.disabled} required={props.required} onChange={this.getOnChange()} name={props.name} class={this.inputClass}>
                    {items.map(x => <option selected={this.isSelected(x.value)} value={x.value} disabled={x.disabled} >{x.name}</option>)}
                </select>
            </div>
        </div>
    }
}

export class MultiSelect extends Input<{ items: { name: any, value: any }[] }>{
    type = "";
    isSelected(val: any) {
        if (this.props.linkTo) {
            let dval = delve(this.props.linkTo.state, this.props.name as string);
            if (dval) {
                console.log('dval', dval, 'val', val, 'Selected:', dval.indexOf(val) > -1);
                return dval == val || dval.indexOf(val) > -1;
            }
            return false;

        }
        throw 'Handle not linkTo';
    }
    render(props?: any, state?: any) {
        return <div class="form-group">
            <label for={this.id}>{this.label}</label>
            <span>This doesn't work (https://github.com/developit/preact/issues/761)</span>
            <div class="select-style">
                <select multiple>
                    <option selected>1</option>
                    <option selected>2</option>
                </select>
                <select multiple onChange={this.getOnChange()} name={props.name} class={"form-control " + this.inputClass}>
                    {/* this.isSelected(x.value) */}
                    {props.items.map((x: Item) => <option selected value={x.value}>{x.name}</option>)}
                </select>
            </div>
        </div>
    }
}