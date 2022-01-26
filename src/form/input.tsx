import { render, Component, h } from 'preact';
import linkState from 'linkstate';


import { JSXInternal as JSX } from 'preact/src/jsx';
import { delve } from '../utils';
import { AutoPath } from 'ts-toolbelt/out/Function/AutoPath';


export type Item = { name: any, value: any };

export type InputNameCheckProps<T, N extends string = ''> = {
    name?: T extends object ? AutoPath<T, N> : string
}
export type InputProps = { linkTo?: { state: any, setState: any }, inputClass?: string, onChange?: (e: any, o1?: any) => void, onClick?: (e: any, o1?: any) => void, onInput?: (e: any) => void, label?: string | JSX.Element };
export type InputState = { value?: any }
export abstract class Input<P = {}, S = {}> extends Component<
    P & InputProps
    & Pick<JSX.HTMLAttributes, Exclude<keyof JSX.HTMLAttributes, keyof InputProps>>, S & InputState>{
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