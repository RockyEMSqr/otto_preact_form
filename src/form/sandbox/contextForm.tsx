import { Component, createContext, h } from 'preact';
import { useContext } from 'preact/hooks';
import { AutoPath } from 'ts-toolbelt/out/Function/AutoPath';
import { dget } from '../../utils';
import { getInput } from './linkedInput';

type CreateCtxType<T> = {
    state: T,
    setState: Function
}
type FormCtx<T> = {
    onSubmit: (e: any) => void
} & CreateCtxType<T>;
export const FormContext = createContext<CreateCtxType<any>>({} as any);
export function CtxForm<T>(p: FormCtx<T> & { children?: any[] }) {
    return <FormContext.Provider value={{ state: p.state, setState: p.setState }}>
        <form onSubmit={p.onSubmit}>{p.children}</form>
    </FormContext.Provider>
}
type CtxFormInputProps<O, P extends string> = {
    name: string //AutoPath<O, P> // uncomment to turn your fan on
    label: string
};
function getCtxInput<O extends object, P extends string>(type: 'text' | 'date', p: CtxFormInputProps<O, P>, v?: any) {
    const fc = useContext(FormContext);
    let props = { ...p, ...fc };
    return getInput(type, props, v)
}
export function Text<O, P extends string>(p: CtxFormInputProps<O, P>) {
    return getCtxInput('text', p);
}
export function DDate<O, P extends string>(p: CtxFormInputProps<O, P>) {
    const fc = useContext(FormContext);
    let value = null;
    let v = dget(fc.state, p.name);
    if (v) {
        value = new Date(v).toISOString().split('T')[0];
    }
    return getCtxInput('date', p, value)
}