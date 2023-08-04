import { h, Component, JSX } from "preact";
// console.log(h)
// @ts-ignore
// if(!global.h){

// let preact = require('preact')
// @ts-ignore
// global.h = preact.h
// }

import { createPortal } from 'preact/compat'
interface ModalProps {
    noLabel?: boolean,
    onConfirm?: (data) => void
    onCancel?: (data) => void,
    class?: string,
    open?: boolean,
    selector?: string,
    useStyle?: boolean,
    label?: string | JSX.Element,
    modalStyle?: any,
    style?: string,
    buttonTabIndex?: number,
    backgroundClass?:string
}
interface ModalState {
    open: any,
    mountAt: any
}
/**Custom-written Preact modal class that uses preact-portal */
export abstract class BaseModal<P = {}, S = {}> extends Component<
    P & ModalProps,
    S & ModalState> {

    constructor(props, ctx) {
        super(props, ctx);
        let m = document.body;
        if (this.props.selector) {
            // @ts-ignore
            m = document.querySelector(this.props.selector);
        }
        this.setState({
            open: props.open || false,
            mountAt: m
        });


    }
    backgroundStyle = {
        position: "fixed", /* Stay in place */
        "z-index": 8000, /* Sit on top */
        left: 0,
        top: 0,
        width: "100%", /* Full width */
        height: "100%", /* Full height */
        overflow: "auto", /* Enable scroll if needed */
        "background-color": '#333333aa', /* Fallback color */
    }
    modalStyle = {
        position: "relative", /* Stay in place */
        "z-index": 9000, /* Sit on top */
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-top": "120px",
        "margin-bottom": "auto",
        width: "90%", /* Can override this in props */
        height: "80%", /* Can override this in props */
        overflow: "auto", /* Enable scroll if needed */
        "background-color": "#ccc",
        padding: "20px",
        border: "5px solid #000",
    }
    // =======================================================================
    // Methods that are recommended to overwrite for customization

    /** Render your content and attach onConfirm/onCancel - For example:  
     * {<CustomTaskFormComponent onConfirm={this.close.bind(this)} onCancel={this.close.bind(this)} />}
    */
    abstract renderModalContent(props?, state?)

    /** Render a button to open. Provides a button by default - just pass in a 'label' prop to replace it */
    openButton(label) {
        if (this.props.noLabel) {
            return null;
        }
        let buttonText = label || "Open";
        return <button {...this.props.buttonTabIndex ? ({ tabindex: this.props.buttonTabIndex }) : null} type="button" onClick={this.toggleOpen.bind(this)}>{buttonText}</button>
    }

    /** Default behavior on clicking background - go through Cancel workflow */
    onBackgroundClick(data?) {
        this.onCancel(data);
    }

    /** Keep click event from going through the modal foreground */
    onModalClick(e) {
        e.stopPropagation()
    }

    /** By default, closes the modal then attempts to pass data if props.onConfirm exists */
    onConfirm(data?) {
        this.close()
        if (this.props.onConfirm) {
            this.props.onConfirm(data)
        }
    }

    /** By default, closes the modal then attempts to pass data if props.onCancel exists */
    onCancel(data?) {
        this.close()
        if (this.props.onCancel) {
            this.props.onCancel(data)
        }
    }

    // Can override these to customize classes
    getBackgroundClass() {
        let classes = ['modal-background'];
        if(this.props.backgroundClass){
            classes.push(this.props.backgroundClass);
        }
        return classes.join(' ');
    }

    getModalClass() {
        let classes = ['modal-box'];
        if(this.props.backgroundClass){
            classes.push(this.props.class);
        }
        return classes.join(' ');
    }

    // =======================================================================
    // Common actions

    open() {
        this.setState({
            open: true
        })
    }

    close() {
        this.setState({
            open: false
        })
    }

    toggleOpen() {
        let currentlyOpen = this.state.open;
        if (currentlyOpen) {
            this.close()
        } else {
            this.open();
        }
    }


    // =======================================================================

    // state = {
    //     open: false,
    //     selector: 'body'
    // }

    // componentWillMount() {
    //     this.state.open = this.props.open || false;
    //     this.state.selector = this.props.selector || 'body'
    //     this.setState(this.state);
    // }

    _renderModal(props, state) {
        if (state.open) {
            return createPortal(<div class={this.getBackgroundClass()} style={this.props.useStyle ? this.backgroundStyle : undefined} onClick={this.onBackgroundClick.bind(this)}>
                {/* This is the modal foreground */}
                <div class={this.getModalClass()} style={this.props.useStyle ? this.modalStyle : this.props.modalStyle} onClick={e => { e.stopPropagation() }}>
                    {this.renderModalContent(props, state)}
                </div>
            </div>,
                this.state.mountAt)
        }
    }

    render(props, state) {
        let defaultContainerClass = `modal-wrapper`
        let defaultContainerStyle = ``
        return <div class={`${defaultContainerClass} ${this.props.class}`} style={`${defaultContainerStyle} ${this.props.style}`}>
            {this.openButton(this.props.label)}
            {this._renderModal(props, state)}
        </div>
    }
}

/** Basic modal structure that handles confirm/close */
export abstract class ConfirmCloseModal extends Component<any, any> {

    /** Return the kind of data you want to pass to onConfirm */
    abstract save()

    /** By default, calls save() and returns it to props.onConfirm callback */
    async confirm() {
        let data = await this.save();
        if (this.props.onConfirm) {
            this.props.onConfirm({ data })
        }
    }

    /** Calls props.onCancel() */
    async cancel() {
        if (this.props.onCancel()) {
            this.props.onCancel();
        }
    }

    abstract render(props?, state?)
}
export class SimpleModal<P={}, S = {}> extends BaseModal<P & ModalProps & {dismissible?:boolean},
    S & ModalState> {
    renderModalContent() {
        return <div>
            {(this.props.dismissible !== false) && <button onClick={this.toggleOpen.bind(this)} style="position:absolute; top:5px; right:5px;">X</button>}
            {this.props.children}
        </div>;
    }
}