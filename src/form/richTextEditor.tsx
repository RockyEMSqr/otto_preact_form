import { h, Component, render } from 'preact';
// @ts-ignore
import RichTextArea from 'preact-richtextarea';
import { AllInputProps, Input, InputNameCheckProps } from './input';
import { dget, dset } from '../utils';
export class RichTextEditor<T> extends Input<InputNameCheckProps<T> & { toolbarAdditions?: any }, any>{
    type: string = "";
    editor: RichTextArea;
    exec(c: string, v?: any) {
        this.editor.execCommand(c, false, v);
        this.editor.doFocus();
    }
    qcs(c: string) {
        return this.editor && this.editor.queryCommandState(c);
    }
    clear(){
        this.editor.getDocument().body.innerHTML = '';
    }
    override componentWillReceiveProps(nextProps: Readonly<AllInputProps<InputNameCheckProps<T> & { toolbarAdditions?: any; }>>, nextContext: any): void {        
        if(this.props.linkTo){
            let val = dget(this.props.linkTo.state, this.props.name);

            this.setState({ value:  val});
            this.editor.getDocument().body.innerHTML = val;
        }{
            this.setState({ value:  nextProps.value});
            
        }
    }
    actions: { [key: string]: any; } = {
        bold: { exec: () => this.exec('bold'), on: () => this.qcs('bold'), button: <b>B</b> },
        italic: { exec: () => this.exec('italic'), on: () => this.qcs('italic'), button: <i>I</i> },
        underline: { exec: () => this.exec('underline'), on: () => this.qcs('underline'), button: <u>U</u> },
        strikethrough: { exec: () => this.exec('strikethrough'), on: () => this.qcs('strikethrough'), button: <s>S</s> },
        heading1: { exec: () => this.exec("formatBlock", '<h1>'), button: <b>H<sub>1</sub></b> },
        heading2: { exec: () => this.exec("formatBlock", '<h2>'), button: <b>H<sub>2</sub></b> },
        paragraph: { exec: () => this.exec("formatBlock", '<p>'), button: <span>&#182;</span> },
        quote: { exec: () => this.exec("formatBlock", '<blockquote>'), button: <span>&#8220; &#8221;</span> },
        olist: { exec: () => this.exec('insertOrderedList'), on: () => this.qcs('insertOrderedList'), button: <span>&#35;</span> },
        ulist: { exec: () => this.exec('insertUnorderedList'), on: () => this.qcs('insertUnorderedList'), button: <span>&#8226;</span> },
        code: { exec: () => this.exec("formatBlock", '<pre>'), button: <span>&lt;/&gt;</span> },
        hr: { exec: () => this.exec('insertHorizontalRule'), button: <span>&#8213;</span> },
        // link: {
        //     exec: () => {
        //         const url = window.prompt('Enter the link URL')
        //         if (url) this.exec('createLink', url)
        //     }
        // },
        // image: {
        //     exec: () => {
        //         const url = window.prompt('Enter the image URL')
        //         if (url) this.exec('insertImage', url)
        //     }
        // }
    }
    constructor(p: any, c: any) {
        super(p, c);
    }
    checkCommands(e: any) {
        this.forceUpdate();
    }

    onInput(e: any) {
        this.setState({ value: e.value });
        if (this.props.linkTo) {
            dset(this.props.linkTo.state, this.props.name, e.value);
            this.props.linkTo.setState(this.props.linkTo.state);
        }
    }
    render(props: any) {
        return <div class="form-group orte">
            {this.label && <label for={this.id} class={this.labelClass}>{this.label}</label>}
            <div class="input-group">
                <div class="rte-toolbar">
                    {Object.keys(this.actions).map(k => <button type="button"
                        class={this.actions[k].on && this.actions[k].on() ? 'on' : ''}
                        onClick={this.actions[k].exec}>{this.actions[k].button}</button>)}
                    {this.props.toolbarAdditions && <div class="rte-toolbar-additions">{this.props.toolbarAdditions}</div>}
                </div>
                <RichTextArea ref={(x: any) => this.editor = x}
                    onMouseUp={this.checkCommands.bind(this)}
                    onInput={this.onInput.bind(this)}
                    value={this.getValue()}
                    id={this.id} />
                <input type="hidden" name={props.name} value={this.state.value} />
            </div>
        </div>;
    }

}