import { Component } from 'react';
import { Search } from '../../components/search/search';
import { Cards } from '../../components/cards/cards';
import './home.scss';

export class HomePage extends Component {
    render() {
        return (
            <section className="home container">
                <h1 className="home__title">Home Page</h1>
                <Search />
                <Cards />
            </section>
        );
    }
}
