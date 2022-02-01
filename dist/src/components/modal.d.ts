import { h, Component } from "preact";
interface ModalProps {
    noLabel?: boolean;
    onConfirm?: (data: any) => void;
    onCancel?: (data: any) => void;
    class?: string;
    open?: boolean;
    selector?: string;
    useStyle?: boolean;
    label?: string;
    modalStyle?: any;
    style?: string;
}
interface ModalState {
    open: any;
    mountAt: any;
}
/**Custom-written Preact modal class that uses preact-portal */
export declare abstract class BaseModal<P = {}, S = {}> extends Component<P & ModalProps, S & ModalState> {
    constructor(props: any, ctx: any);
    backgroundStyle: {
        position: string;
        "z-index": number;
        left: number;
        top: number;
        width: string;
        height: string;
        overflow: string;
        "background-color": string;
    };
    modalStyle: {
        position: string;
        "z-index": number;
        "margin-left": string;
        "margin-right": string;
        "margin-top": string;
        "margin-bottom": string;
        width: string;
        height: string;
        overflow: string;
        "background-color": string;
        padding: string;
        border: string;
    };
    /** Render your content and attach onConfirm/onCancel - For example:
     * {<CustomTaskFormComponent onConfirm={this.close.bind(this)} onCancel={this.close.bind(this)} />}
    */
    abstract renderModalContent(props?: any, state?: any): any;
    /** Render a button to open. Provides a button by default - just pass in a 'label' prop to replace it */
    openButton(label: any): h.JSX.Element | null;
    /** Default behavior on clicking background - go through Cancel workflow */
    onBackgroundClick(data?: any): void;
    /** Keep click event from going through the modal foreground */
    onModalClick(e: any): void;
    /** By default, closes the modal then attempts to pass data if props.onConfirm exists */
    onConfirm(data?: any): void;
    /** By default, closes the modal then attempts to pass data if props.onCancel exists */
    onCancel(data?: any): void;
    getBackgroundClass(): string;
    getModalClass(): string;
    open(): void;
    close(): void;
    toggleOpen(): void;
    _renderModal(props: any, state: any): import("preact").VNode<any> | undefined;
    render(props: any, state: any): h.JSX.Element;
}
/** Basic modal structure that handles confirm/close */
export declare abstract class ConfirmCloseModal extends Component<any, any> {
    /** Return the kind of data you want to pass to onConfirm */
    abstract save(): any;
    /** By default, calls save() and returns it to props.onConfirm callback */
    confirm(): Promise<void>;
    /** Calls props.onCancel() */
    cancel(): Promise<void>;
    abstract render(props?: any, state?: any): any;
}
export declare class SimpleModal<P = {}, S = {}> extends BaseModal<P, S> {
    renderModalContent(): h.JSX.Element;
}
export {};
