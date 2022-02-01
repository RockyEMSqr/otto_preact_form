import { render, Component, h } from 'preact';
import linkState from 'linkstate';


import { JSXInternal as JSX } from 'preact/src/jsx';
import { delve } from '../utils';

export type Item = { name: any, value: any };

type NestedKeyOf<ObjectType extends object> =
    { [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
    }[keyof ObjectType & (string | number)];

type Join<K, P> = K extends string | number ?
    P extends string | number ?
    `${K}${"" extends P ? "" : "."}${P}`
    : never : never;
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]
type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: K extends string | number ?
        `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never
    }[keyof T] : ""

type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";
export type InputNameCheckProps<T> = {
    name?: T extends object ? Leaves<T> : string
}
export type InputProps = { linkTo?: { state: any, setState: any }, inputClass?: string, onChange?: (e: any, o1?: any) => void, onClick?: (e: any, o1?: any) => void, onInput?: (e: any) => void, label?: string | JSX.Element };
export type AllInputProps<P> = P & InputProps
    & Pick<JSX.HTMLAttributes, Exclude<keyof JSX.HTMLAttributes, keyof InputProps>>;
export type InputState = { value?: any }
export abstract class Input<P = {}, S = {}> extends Component<
    AllInputProps<P>, S & InputState>{
    abstract type: string;
    prepend: undefined | string | JSX.Element;
    append: undefined | string | JSX.Element;
    inp: HTMLInputElement | undefined | null;
    getValue() {
        if (this.props['value'] != undefined) {
            return this.props['value'];
        }
        if (this.props.linkTo) {
            let dval = delve(this.props.linkTo.state, this.props.name as string);
            return dval;
        }
        if (this.state.value) {
            return this.state.value;
        }
        if (this.inp) {
            return this.inp.value;
        }
        return null;
    }
    getOnChange() {
        // if (!this.props.name) {
        //     throw Error('No Name');
        // }
        if (this.props.linkTo) {
            let ls = linkState(this.props.linkTo, this.props.name as string);
            if (this.props.onChange) {
                return (e: any) => {
                    ls(e);
                    this.props.onChange && this.props.onChange(e);
                }
            }
            return ls;


        } else {
            return this.props.onChange;
        }
    }
    getOnInput() {
        if (this.props.onInput) {
            if (this.props.linkTo) {
                let ls = linkState(this.props.linkTo, this.props.name as string);
                return (e: any) => {
                    ls(e);
                    e.value = this.getValue();
                    this.props.onInput && this.props.onInput(e);
                }
            }
        }
        return undefined;
    }

    public get label() {
        return this.props.label;
    }
    public get isRequired() {
        return this.props.required;
    }
    public get inputClass() {
        return `form-control ${this.props.inputClass || null} ${this.isRequired ? 'required' : ''}`;
    }
    public get labelClass() {
        return this.isRequired ? 'required' : '';
    }
    public get id() {
        return this.props.id || this.props.name;
    }
    render(props?: any, state?: any) {
        let attributes = { ...props, linkTo: null }
        return (
            <div class="form-group">
                {this.label && <label for={this.id} class={this.labelClass}>{this.label}</label>}
                <div class="input-group">
                    {this.prepend}
                    <input {...attributes} ref={x => this.inp = x} onChange={this.getOnChange()} onInput={this.getOnInput()} value={this.getValue()} type={this.type} class={this.inputClass} name={props?.name} id={this.id} placeholder={this.label} />
                    {this.append}
                </div>
            </div>
        );
    }

}