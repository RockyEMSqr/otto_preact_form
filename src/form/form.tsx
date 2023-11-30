import { h, Component } from 'preact';
// import 'formdata-polyfill';
import { dset } from '../utils';
import delve from 'dlv';
export class Form extends Component<any, any>{
    formData(form: HTMLFormElement) {
        let formData: FormData = new FormData(form);
        return formData;
    }
    formDataToJSON(form: HTMLFormElement) {
        let object = {};

        let formData: FormData = new FormData(form);

        let keys: string[] = [];
        formData.forEach(function (value, key) {
            let needsArray = false;
            if (keys.indexOf(key) > -1) {
                needsArray = true;
            }
            keys.push(key);
            if (needsArray) {
                let val = delve(object, key);
                value = [...(Array.isArray(val) ? val : [val]), value] as any;
            }
            dset(object, key, value);
            needsArray = false;
        });
        return object;
    }
    form: HTMLFormElement | undefined | null;
    onSubmit(e: Event) {
        if (e.target) {
            (e as any).data = this.formDataToJSON(e.target as HTMLFormElement);
            this.props.onSubmit(e);
        }
    }
    onInvalid(e: Event) {
        console.log(e.type, e);
    }
    onError(e: Event) {
        console.log(e.type, e);
    }
    onAbort(e: Event) {
        console.log(e.type, e);
    }
    onChange(e: Event) {
    }
    getData() {
        return this.formDataToJSON(this.form as HTMLFormElement);
    }
    componentDidMount() {

    }
    render(props: any) {
        return (
            <form ref={x => this.form = x} class={this.props.class} onChange={this.onChange.bind(this)} onAbort={this.onAbort.bind(this)} onError={this.onError.bind(this)} onInvalid={this.onInvalid.bind(this)} onSubmit={this.onSubmit.bind(this)}>
                {this.props.children}
            </form>
        )
    }
}
/**
 * For MultiPart Forms
 */
export class FileForm extends Form {
    getData() {
        return this.formData(this.form as HTMLFormElement);
    }
    onSubmit(e: Event) {
        if (e.target) {
            (e as any).data = this.formData(e.target as HTMLFormElement);
            this.props.onSubmit(e);
        }
    }
    render(props: any) {
        return (
            <form encType="multipart/form-data" formEncType="multipart/form-data" ref={x => this.form = x} class={this.props.class} onSubmit={this.onSubmit.bind(this)}>
                {this.props.children}
            </form>
        )
    }
}