import { Component } from 'react';
import { Search } from '../../components/search/search';
import { Cards } from '../../components/cards/cards';
import './home.scss';

export class HomePage extends Component {
    public state: { valueSearch: string };

    constructor(props: string) {
        super(props);
        this.state = {
            valueSearch: '',
        };
    }

    updateData = (value: string) => this.setState({ valueSearch: value });

    render() {
        return (
            <section className="home container">
                <h1 className="home__title">Home Page</h1>
                <Search updateData={this.updateData} />
                <Cards updateStringSearch={this.state.valueSearch} />
            </section>
        );
    }
}
