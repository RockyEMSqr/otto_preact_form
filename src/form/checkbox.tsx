import { delve, dset } from "../utils";
import { Input, InputNameCheckProps } from "./input";
import { h } from 'preact';
export class Checkbox<T> extends Input<InputNameCheckProps<T>> {
    type = "checkbox";
    onClick(v: any, e: any) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
        if (this.props.linkTo) {
            let vals = delve(this.props.linkTo.state, this.props.name as string);
            //TODO: Refactor
            if (e.target.checked) {

                if (vals) {
                    if (Array.isArray(vals)) {
                        vals.push(v);
                    } else {
                        vals = [vals, v];
                    }
                } else {
                    vals = v;
                }

            } else {
                if (vals) {
                    if (Array.isArray(vals)) {

                        vals.splice(vals.indexOf(v), 1);
                        if (vals.length == 1) {
                            vals = vals[0];
                        }
                    } else {
                        vals = null;
                    }
                } else {
                    vals = null;
                }

            }
            dset(this.props.linkTo.state, this.props.name, vals);
            this.props.linkTo.setState(this.props.linkTo.state);
            if (this.props.onChange) {
                this.props.onChange(e, vals);
            }
        }
    }

    public get checked(){
        if (this.props.linkTo) {
            let valOrArrayOfVals = delve(this.props.linkTo.state, this.props.name as string);
            if (valOrArrayOfVals) {
                if (Array.isArray(valOrArrayOfVals)) {
                    // note(rc): use a find so that "1" == 1... i know....
                    if (valOrArrayOfVals.find(x => {
                        if (x === undefined || x === null) {
                            return false;
                        }
                        if (typeof x == 'object') {
                            return x.id == this.props.value;
                        }
                        return x == this.props.value;
                    })) {
                        return true;
                    }
                } else {
                    if (valOrArrayOfVals === undefined || valOrArrayOfVals === null) {
                        return false;
                    }
                    if (typeof valOrArrayOfVals == 'object') {
                        return valOrArrayOfVals.id == this.props.value;
                    }
                    return valOrArrayOfVals == this.props.value;
                }
            }
            return false;
        }
        return this.props.checked;
    }

    render() {
        return <div class="form-check">
            <input class="form-check-input" name={this.props.name} disabled={this.props.disabled} checked={this.checked} onClick={this.onClick.bind(this, this.props.value)} type="checkbox" value={this.props.value} id={'' + this.id + this.getValue()} />
            <label class="form-check-label" for={'' + this.id + this.getValue()}>
                {this.props.label}
            </label>
        </div>
    }
}