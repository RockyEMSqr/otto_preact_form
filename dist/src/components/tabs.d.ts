import { h, Component } from "preact";
export declare class Tabs extends Component<any, any> {
    state: {
        selectedI: number;
        buttons: any[];
        selectedContent: any;
    };
    onTabButtonClick(index: any): Promise<void>;
    createTheGoods(props: any): void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): Promise<void>;
    selectTab(index: any): void;
    render(): h.JSX.Element;
}
