import { h } from 'preact';
import { DateTime } from 'luxon';
import { Input, Hidden } from '../../index'
import { dset } from '../utils';
export abstract class DTInput extends Input {
    getDT(val: number | string | Date | undefined): DateTime | undefined {
        let dt: DateTime | undefined;
        if (val) {

            if (typeof val == 'number') {
                dt = DateTime.fromMillis(val);
            }
            else if (typeof val == "string") {
                dt = DateTime.fromISO(val);
            } else if (val.constructor.name == "Date") {
                dt = DateTime.fromJSDate(val);
            }

        }
        return dt;
    }
    getValue() {
        let dt = this.getDT(super.getValue());
        if (dt) {
            return dt.toISO();
        }

    }
    onChangeCB: any;
    getOnChange() {
        if (!this.onChangeCB) {
            this.onChangeCB = (e: any) => {
                this.setState({ value: e.target.value });
                if (this.props.linkTo) {
                    let dt = this.getDT(e.target.value)
                    dset(this.props.linkTo.state, this.props.name, dt ? dt.toISO() : null)
                    this.props.linkTo.setState(this.props.linkTo.state);
                }
                if (this.props.onChange) {
                    let dt = this.getDT(e.target.value)
                    e.data = dt ? dt.toISO() : null
                    this.props.onChange(e);
                }
            }
        }
        return this.onChangeCB;
    }
}
export class FDate extends DTInput {
    type = "date"

    getDateString() {
        let dt = this.getDT(super.getValue());
        if (dt) {
            return dt.toFormat('yyyy-MM-dd')
        } else {
            return undefined;
        }

    }
    render(props: any, state: any) {
        return <div class="form-group">
            {this.label && <label for={this.id} class={this.labelClass}>{this.label}</label>}
            <div class="input-group">

                <Hidden name={props.name} value={this.getValue()} />
                <input disabled={props.disabled} ref={x => this.inp = x} onChange={this.getOnChange()} onInput={this.getOnInput()} value={this.getDateString()} type={this.type} class={this.inputClass} id={this.id} placeholder={this.label as string} />
            </div>
        </div>
    }
}

export class Time extends DTInput {
    type = "time";

    getTimeStr() {
        let dt = this.getDT(super.getValue());

        if (dt) {
            let time = dt.toFormat('HH:mm');
            return time;
        }
    }

    render(props: any, state: any) {
        return <div class="form-group">
            {this.label && <label class={this.labelClass} for={this.id}>{this.label}</label>}
            <div class="input-group">

                <Hidden name={props.name} value={this.getValue()} />
                <input disabled={props.disabled} onChange={this.getOnChange()} onInput={this.getOnInput()} value={this.getTimeStr()} type={this.type} class={this.inputClass} id={this.id} placeholder={this.label as string} />
            </div>
        </div>
    }

}
export class FDateTime extends DTInput {
    type: string = 'datetime';
    getDateStr() {
        let dt = this.getDT(super.getValue());
        if (dt) {
            return dt.toISODate()
        }
        if (this.dateInp) {
            return this.dateInp.value;
        }
    }
    getTimeStr() {
        let dt = this.getDT(super.getValue());
        if (dt) {
            return dt.toFormat('HH:mm')
        }
        if (this.timeInp) {
            return this.timeInp.value;
        }
    }
    dateInp: HTMLInputElement | undefined | null;
    timeInp: HTMLInputElement | undefined | null;
    // onChangeCB: any;
    getOnChange() {
        if (!this.onChangeCB) {
            this.onChangeCB = (e: any) => {
                let d = this.dateInp?.value;
                let t = this.timeInp?.value;
                let dt = DateTime.fromString(`${d} ${t}`, 'yyyy-MM-dd HH:mm');
                this.setState({ value: dt.toISO() });
                if (this.props.linkTo && this.props.name) {

                    dset(this.props.linkTo.state, this.props.name, dt.toISO());
                    this.props.linkTo.setState(this.props.linkTo.state);

                }
                if (this.props.onChange) {
                    // note(rc) only trigger if valid date. Should this be the default behavior
                    if (dt.isValid) {
                        this.props.onChange(e, dt.toJSDate());
                    }
                }
            }
        }
        return this.onChangeCB;
    }
    render(props?: any, state?: any) {
        return <div class="form-group row date-time-group">
            <Hidden name={props.name} value={this.getValue()} />
            <label class={this.labelClass} for={props.id}>{props.label}</label>
            <div class="col">
                <input type="date" disabled={props.disabled} required={props.required} ref={x => this.dateInp = x} onChange={this.getOnChange()} class={this.inputClass} value={this.getDateStr()} />
            </div>
            <div class="col">
                <input type="time" disabled={props.disabled} required={props.required} ref={x => this.timeInp = x} onChange={this.getOnChange()} class={this.inputClass} value={this.getTimeStr()} />
                {/* <Time value={props.value} /> */}
            </div>
        </div>
        // if(props.value && typeof props.value == 'object' && props.value.constructor.name == 'Date'){
        // console.log(props.value)
        // }
        // return super.render(props, state);
    }
}