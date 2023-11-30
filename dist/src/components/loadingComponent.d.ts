import { Component, ComponentChild } from 'preact';
export declare abstract class LoadingComponent<P, S extends {
    loading: boolean;
}> extends Component<P, S & {
    loading: boolean;
}> {
    state: S & {
        loading: boolean;
    };
    constructor(props: P, ctx: any);
    abstract loadData(): Promise<void>;
    dataDidLoad(): Promise<void>;
    componentWillMount(): Promise<void>;
    abstract rrender(props?: P, state?: Readonly<S>, context?: any): ComponentChild;
    render(p: P, s: S, c: any): ComponentChild;
}
