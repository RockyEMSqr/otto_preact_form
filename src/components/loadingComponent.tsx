import { h, Component, ComponentChild } from 'preact';
export abstract class LoadingComponent<P, S extends { loading: boolean }> extends Component<P, S & { loading: boolean }> {
    state = { loading: true } as S & { loading: boolean };
    constructor(props: P, ctx: any) {
        super(props, ctx);

    }
    abstract loadData(): Promise<void>;
    async dataDidLoad() {

    }
    async componentWillMount() {
        await this.loadData();
        await this.setState({ loading: false })
        await this.dataDidLoad();
    }
    abstract rrender(props?: P, state?: Readonly<S>, context?: any): ComponentChild;
    render(p: P, s: S, c: any) {
        if (this.state.loading) {
            return <div class="loading"><svg viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20"></circle>
            </svg></div>
        }
        return this.rrender(p as P, s as S, c);
    }
}