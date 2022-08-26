import { h, Component } from 'preact';
export declare class Form extends Component<any, any> {
    formData(form: HTMLFormElement): FormData;
    formDataToJSON(form: HTMLFormElement): {};
    form: HTMLFormElement | undefined | null;
    onSubmit(e: Event): void;
    onInvalid(e: Event): void;
    onError(e: Event): void;
    onAbort(e: Event): void;
    onChange(e: Event): void;
    getData(): {};
    componentDidMount(): void;
    render(props: any): h.JSX.Element;
}
/**
 * For MultiPart Forms
 */
export declare class FileForm extends Form {
    getData(): FormData;
    onSubmit(e: Event): void;
    render(props: any): h.JSX.Element;
}
