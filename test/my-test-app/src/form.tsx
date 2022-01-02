import { h, render, Component } from 'preact';
import { Form, Text, Address, USD, RadioGroup, Number as NumNum, Phone, Select, MultiSelect, CheckboxGroup, Checkbox, Choosy } from '../../../index';

import { DateTime } from 'luxon';
import { FDate, Time, FDateTime } from '../../../index';
import { Percent as _P, USD as _USD, Number as _Num } from '../../../index';
export namespace Num {
    export function formatTwoDecimalOrNull(num: number) {
        let n = castToNumOrNull(num);
        if (typeof n == 'number') {
            return n.toFixed(2);
        }
        return n;
    }
}
export function castToNumOrNull(val: string | number | Number) {
    if (!val) {
        return null;
    }
    let num = Number(val);
    if (!Number.isNaN(num)) {
        return num;
    }

    return null;
}
export class Percent extends _P {
    componentDidMount() {
        if (this.inp) {
            this.inp.onblur = () => {
                let val = super.getValue();
                if (this.inp) {
                    this.inp.value = Num.formatTwoDecimalOrNull(val) as string;
                }
            }
        }
    }
    componentWillUnmount() {
        if (this.inp) {
            this.inp.onblur = null;
        }
    }
    getValue() {

        let val = super.getValue();
        if (!this.inp) {
            return Num.formatTwoDecimalOrNull(val);
        }
        return this.inp.value;
    }
    // getOnInput(){
    //     let oi = super.getOnInput();
    //     // console.log(oi);
    //     return oi;
    // }
    getOnChange() {
        let oc = super.getOnChange();
        // console.log(oc);
        return oc;//oc;
    }
}
function set_JSON_reaplacer(key: any, value: any) {
    if (typeof value === 'object' && value instanceof Set) {
        return [...value];
    }
    return value;
}
export class FormTestApp extends Component {
    state = {
        x: { percentPre: 99.999999999 },
        textArr: [] as any[], ob: { rads: 2, unoCheck: null },
        obj: {
            prepopdateString: '2017-12-03T17:01:08.392Z',
            prepopdate: new Date(),
            prepopdt: new Date(),
            prepopdtString: '2019-01-03T19:01:08.392Z',
            prepoptime: new Date(),
            prepoptimeString: '11:35'
        }, baseNameForContainingObj: { address: { street: 'adf' } }, submitted: null,
        choosy: { initvals: [3, 5, { name: 7, value: 7 }] }
    }
    getDT(val: any) {
        let dt: DateTime = DateTime.fromJSDate(new Date(0));
        if (val) {

            if (val.constructor.name == 'Number') {
                dt = DateTime.fromMillis(val);
            }
            else if (val.constructor.name == "String") {
                dt = DateTime.fromISO(val);
            } else if (val.constructor.name == "Date") {
                dt = DateTime.fromJSDate(val);
            }

        }
        return dt;
    }
    checkEqDt(a: Date, b: Date | string) {
        let adt = this.getDT(a)
        let bdt = this.getDT(b);
        console.log(adt.equals(bdt));
    }
    onSubmit(e: any) {
        e.preventDefault();
        this.setState({ submitted: e.data });
        this.checkEqDt(e.data.obj.prepopdateString, this.state.obj.prepopdateString);
        this.checkEqDt(e.data.obj.prepopdate, this.state.obj.prepopdate);
        this.checkEqDt(e.data.obj.prepoptimeString, this.state.obj.prepoptimeString);
        this.checkEqDt(e.data.obj.prepoptime, this.state.obj.prepoptime);

        this.checkEqDt(e.data.obj.prepopdt, this.state.obj.prepopdt);
        this.checkEqDt(e.data.obj.prepopdtString, this.state.obj.prepopdtString);


    }
    recInObj(obj: any) {
        for (let k in obj) {
            if (typeof obj[k] == 'object') {
                this.recInObj(obj[k]);
            }
            else {
                console.log(k, obj[k])
            }
        }
    }
    addTexts(e: any) {
        this.state.textArr = [];
        if (e.target.value) {
            let hm = Number(e.target.value);
            if (hm) {
                for (; ;) {
                    if (hm <= 0) {
                        break;
                    }
                    this.state.textArr.push('');
                    hm--;
                }
            }
        }
        this.setState(this.state);
    }
    onTextInput(e: any) {
        console.log(e.value);
    }
    testBind(e: any) {
        console.log(this, e.data, e.target.value);

    }
    render() {
        console.log(this.state, this.props);
        return <div class="row">
            <div style="float:left;">

                <h1>Form Elements YEEEHAW</h1>
                <Percent linkTo={this} name="x.percent" onChange={(x: any) => console.log('On Change', x)} label="Percent" />
                <Percent linkTo={this} name="x.percentPre" onChange={(x: any) => console.log('On Change', x)} label="Percent" />
                <Form onSubmit={this.onSubmit.bind(this)}>
                    <h1>Not Linked</h1>
                    <FDate onChange={this.testBind} label="Date (test bind)" name="nolink.d" />
                    <Time label="Time" name="nolink.t" />
                    <FDateTime label="DateTime" name="nolink.dt" />
                    <Text label="text" name="nolink.text" />
                    <NumNum label="Number" name="nolink.numnum" />
                    <USD label="Number" name="nolink.usd" />
                    <Percent label="Percent" name="nolink.percent" />
                    <Select addDefaultBlankToItems="Choose One" items={['- Select -', 1, 2, 3].map(x => { return { name: x, value: x } })} label="Select" name="nolink.select" />
                    <Select addDefaultBlankToItems linkTo={this} items={['- Select -', 1, 2, 3].map(x => { return { name: x, value: x } })} label="Select" name="asdf.sel" />
                    <RadioGroup label="Rads" items={[1, 2, 3].map(x => { return { name: x, value: x } })} name="nolink.rads" />
                    <CheckboxGroup label="checkychecks" items={[1, 2, 3].map(x => { return { name: x, value: x } })} name="nolink.checkGroup" />
                    <Address label="Address" name="nolink.addresses.0" />
                    <Address label="Address" name="nolink.addresses.1" />
                    <Address label="Address" name="nolink.addresses.2" />
                    <h1>Linked</h1>
                    <Text onInput={this.onTextInput.bind(this)} onChange={((x: any) => console.log('On Change', x))} linkTo={this} label="Text" name="obj.text" />
                    <Text disabled linkTo={this} label="Text" name="obj.text" />
                    <FDate linkTo={this} label="Date" name="obj.date" />
                    <FDate linkTo={this} label="Date" name="obj.prepopdate" />
                    <FDate linkTo={this} label="PrePop Date String" name="obj.prepopdateString" />
                    <Time linkTo={this} label="Time" name="obj.time" />
                    <Time linkTo={this} label="PrePopTime" name="obj.prepoptime" />
                    <Time linkTo={this} label="PrePopTimeString" name="obj.prepoptimeString" />
                    <FDateTime linkTo={this} label="DateTime" name="obj.dt" />
                    <FDateTime linkTo={this} label="PrePopDateTime" name="obj.prepopdt" />
                    <FDateTime linkTo={this} label="PrePopDateTimeW/String" name="obj.prepopdtString" />
                    <Address linkTo={this} label="Address" name="baseNameForContainingObj" />
                    <NumNum linkTo={this} label="Number" name="obj.numnum" />
                    <RadioGroup label="Rads" linkTo={this} items={[1, 2, 3].map(x => { return { name: x, value: x } })} name="ob.rads" />
                    <CheckboxGroup label="checkychecks" linkTo={this} items={[1, 2, 3].map(x => { return { name: x, value: x } })} name="ob.checkGroup" />

                    {/* Note(rc): Gotta give a value */}
                    <Checkbox value={1} label="One Checkbox" linkTo={this} name="ob.unoCheck" />
                    {this.state.ob.unoCheck && <h3>Checked</h3> || <h3>No Check</h3>}

                    <Phone linkTo={this} label="phone #" name="obbbb.phoneNum" />


                    <Select linkTo={this} items={['- Select -', 1, 2, 3].map(x => { return { name: x, value: x } })} label="Select" name="ob.select" />


                    <MultiSelect linkTo={this} items={['- Select -', 1, 2, 3].map(x => { return { name: x, value: x } })} name="ob.multiselect" />
                    <USD linkTo={this} name="ob.usd" label="USD" />
                    <h2>Choosy</h2>
                    <Choosy name="choosy.vals" linkTo={this} label="Choosy Label" items={[1, 2, 3, 4, 5, 6, 7, 8].map(x => { return { name: x, value: x } })} />
                    <Choosy name="choosy.initvals" linkTo={this} label="Choosy Init Value" items={[1, 2, 3, 4, 5, 6, 7, 8].map(x => { return { name: x, value: x } })} />
                    <button type="submit">Submit</button>
                </Form>
            </div>
            <div style="float:left;"><h2>State:</h2>
                <pre>{JSON.stringify(this.state, set_JSON_reaplacer, '   ')}</pre></div>
            {/* <Form onSubmit={this.onSubmit.bind(this)}> */}
            <NumNum onChange={this.addTexts.bind(this)} label="howManyTexts" />
            {this.state.textArr.map((x, i) => <div><Text linkTo={this} label="Text" name={`textArr.${i}`} /></div>)}
            <button type="submit">Submit</button>
            {/* </Form> */}
        </div>
    }
}