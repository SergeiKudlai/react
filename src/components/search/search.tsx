import { Component, ChangeEvent } from 'react';
import { IFuncProps } from '../../ts/interface';

export class Search extends Component<IFuncProps> {
    public state: { value: string };

    constructor(props: IFuncProps) {
        super(props);
        this.state = {
            value: '',
        };
    }

    setParamsAssociatione(e: ChangeEvent) {
        const { target } = e;
        return (target as HTMLInputElement).value;
    }

    getFunction = (e: ChangeEvent) => {
        this.getTextSearch(e);
        this.setLocalStorageValue(e);
    };

    getTextSearch = (e: ChangeEvent) => {
        this.setState({ value: this.setParamsAssociatione(e) });
        this.props.updateData(this.setParamsAssociatione(e));
    };

    setLocalStorageValue = (e: ChangeEvent) => {
        localStorage.setItem('text', JSON.stringify(this.setParamsAssociatione(e)));
    };

    componentDidMount() {
        const localValid = localStorage.getItem('text');
        if (localValid) {
            this.setState({ value: JSON.parse(localValid) });
            this.props.updateData(JSON.parse(localValid));
        }
    }

    render() {
        return (
            <label className="home__text" htmlFor="search">
                Search
                <input
                    className="home__search"
                    type="search"
                    aria-label="search"
                    id="search"
                    name="search"
                    placeholder="Enter text"
                    onChange={this.getFunction}
                    value={this.state.value}
                    autoComplete="off"
                />
            </label>
        );
    }
}
