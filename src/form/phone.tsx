import { delve, dset, formatPhoneNumber } from "../utils";
import { Input, InputNameCheckProps } from "./input";
import { Component } from 'preact';
import { Select } from './select';
import { h } from 'preact';
export class Phone<T> extends Input<InputNameCheckProps<T>> {
    getValue() {
        let val = super.getValue();
        if (val) {
            val = formatPhoneNumber(val);
        }
        return val;
    }
    type = "tel";
}
export class PhoneAndType extends Component<any, any>{
    /**
     *
     */
    constructor() {
        super();

    }
    render() {
        return <div class="multi-input">
            <h5>{this.props.label}</h5>
            <Phone linkTo={this.props.linkTo} onChange={(e) => console.log(e)} name={this.props.name + '.number'} label="Number" />
            <Select items={this.props.types} linkTo={this.props.linkTo} name={this.props.name + '.type'} label="Type" />
            <button type="button" onClick={this.props.remove}>X</button>
        </div>
    }
}
export class Phones extends Component<any, any>{
    state = { phones: this.props.linkTo.state.phones || [{ number: "", type: "" }] }
    get name() {
        return `${this.props.name ? this.props.name + '.' : ''}phones`
    }
    getPhones() {
        let phones = delve(this.props.linkTo.state, this.name);
        if (!phones) {
            phones = [{ number: "", type: "" }];
            dset(this.props.linkTo.state, this.name, phones);
        }
        return phones;

    }
    addPhone(e: Event) {
        e.preventDefault();
        this.getPhones().push({});
        this.setState({});
    }
    removePhone(i: number) {
        this.getPhones().splice(i, 1);
        this.setState({});
    }
    render() {

        return <div class="phones">
            {this.getPhones().map((x: any, i: number) => <PhoneAndType remove={this.removePhone.bind(this, i)} types={this.props.types} value={x} linkTo={this.props.linkTo} label={`Phone ${i + 1}`} name={`${this.name}.${i}`} />)}
            <button onClick={this.addPhone.bind(this)}>Add Another Phone</button>
        </div>
    }

}