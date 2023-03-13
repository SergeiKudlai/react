import { Component, ChangeEvent } from 'react';

export class Search extends Component {
    public state: { value: string };

    constructor(props: string) {
        super(props);
        this.state = {
            value: '',
        };
    }

    getFunction = (e: ChangeEvent) => {
        this.getTextSearch(e);
        this.setLocalStorageValue(e);
    };

    getTextSearch = (e: ChangeEvent) => {
        const { target } = e;
        const searchData = (target as HTMLInputElement).value;
        this.setState({ value: searchData });
    };

    setLocalStorageValue = (e: ChangeEvent) => {
        const { target } = e;
        const searchData = (target as HTMLInputElement).value;
        localStorage.setItem('text', JSON.stringify(searchData));
    };

    componentDidMount() {
        const localValid = localStorage.getItem('text');
        localValid ? this.setState({ value: JSON.parse(localValid) }) : '';
    }

    render() {
        return (
            <label className="home__text" htmlFor="search">
                Search
                <input
                    className="home__search"
                    type="search"
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
