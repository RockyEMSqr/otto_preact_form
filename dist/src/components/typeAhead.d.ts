import { h, Component } from 'preact';
export declare class TypeAhead<T = {}> extends Component<{
    required?: any;
    showClearButton?: boolean;
    value?: string;
    getResults: (str: any) => T[];
    endPoint?: string;
    label: string;
    onSelect: (x: any) => void;
    display?: (i: T) => any;
}, {
    results: T[];
    selected: T | null;
    value: string;
}> {
    state: {
        results: any[];
        selected: any;
        value: string;
    };
    input: any;
    constructor(props: any, ctx: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    getResults(str: any): Promise<void>;
    keyUp(e: any): Promise<void>;
    clear(e: any): void;
    select(thing: any, e: Event): void;
    toggleList(e: any): Promise<void>;
    render(props: any, state: any): h.JSX.Element;
}
