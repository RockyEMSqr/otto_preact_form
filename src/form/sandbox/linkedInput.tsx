import { h, Fragment } from 'preact';
import { AutoPath } from 'ts-toolbelt/out/Function/AutoPath'
import preact, { Component } from "preact"
import { useCallback } from 'preact/hooks';
import { dget, dset } from '../../utils';

type InputProps<T, N extends string> = {
    name: AutoPath<T, N>,
    label: string | preact.FunctionalComponent | Component,
    state: T,
    setState: Function
}
export function getId(name: string) {
    return name + Date.now();
}

export function link(state: any, setState: Function, path: string) {
    return useCallback(
        (e: any) => {
            console.log('New V', e.target.value, e)
            dset(state, path, e.target.value);
            setState({ ...state });
        }, [state]
    )
} export type InputTypeStrings = 'text' | 'date';
export function getInput<T extends object, N extends string>(type: InputTypeStrings, p: InputProps<T, N>, value?: any) {
    let id = getId(p.name);
    let val = value || dget(p.state, p.name);
    return <div class="mb-3">
        <label for={id} class="form-label">{p.label}</label>
        <input type={type} class="form-control" id={id} aria-describedby={id + 'help'} onChange={link(p.state, p.setState, p.name)} value={val || ''} />
        {/* <div id={id + 'help'} class="form-text">{p.label}</div> */}
    </div>
}
export function LinkedText<T extends object, N extends string>(p: InputProps<T, N>) {
    return getInput<T, N>('text', p);
}
export function DateInp<T extends Object, N extends string>(p: InputProps<T, N>) {
    let value = null;
    let v = dget(p.state, p.name);
    if (v) {
        value = new Date(v).toISOString().split('T')[0];
    }
    return getInput<T, N>('date', p, value);
}