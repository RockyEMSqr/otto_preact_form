import { Component } from 'preact';
import { AllInputProps, InputNameCheckProps } from './input';
import h from 'preact';
export declare class Address<T> extends Component<AllInputProps<InputNameCheckProps<T>>, any> {
    getNamePrefix(): string;
    render(props: any, state: any): h.JSX.Element;
}
