import { h, Component } from "preact";
export class Tabs extends Component<any, any>{
    state = { selectedI: 0, buttons: [], selectedContent: null };
    async onTabButtonClick(index) {
        let oldComp = this.state.selectedContent;
        await this.selectTab(index);
        if (this.props.children[index]) {
            if (this.props.children[index].props) {
                if (this.props.children[index].props.onChange) {
                    this.props.children[index].props.onChange(oldComp);
                }
            }
        }
        if (this.props.onChange) {
            this.props.onChange(oldComp);
        }
        oldComp = null;
    }
    createTheGoods(props) {
        let buttons:any[] = [];
        let selectedContent = this.state.selectedContent;
        let selectedI = this.state.selectedI;
        // Make a "tab" out of each child
        for (let i = 0; i < props.children.length; i++) {
            let c = props.children[i];
            buttons.push({ label: (c.props && c.props.label) ? c.props.label : `Tab ${i + 1}`, alert: (c.props && c.props.alert) ? c.props.alert : '' })
            if (c.props && c.props.tabSelected) {
                selectedI = i;
                selectedContent = c;
            }
        }
        if (!selectedContent) {
            selectedI = 0;
            selectedContent = props.children[0];
        }
        this.setState({ buttons: buttons, selectedContent: selectedContent, selectedI })
    }
    componentWillMount() {
        this.createTheGoods(this.props);
    }
    async componentWillReceiveProps(nextProps) {
        await this.createTheGoods(nextProps);
        this.selectTab(this.state.selectedI);
    }
    selectTab(index) {
        this.setState({ selectedContent: this.props.children[index], selectedI: index })
    }
    render() {
        return <div class="tabs">
            <div class="tbtns">
                {this.state.buttons.map((x:any, i) => <button type="button" class={this.state.selectedI == i ? 'active' : ''}
                    onClick={this.onTabButtonClick.bind(this, i)}>{x.label}{x.alert && <span class="bubble-number"> {x.alert}<span class="sr-only"> items need your attention</span></span>}</button>)}
            </div>
            <div class="tcnt">
                {this.state.selectedContent}
            </div>
        </div>
    }
}