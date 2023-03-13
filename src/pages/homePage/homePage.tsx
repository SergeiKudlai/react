import { Component } from 'react';
import { Search } from '../../components/search/search';
import './home.scss';

export class HomePage extends Component {
    render() {
        return (
            <section className="home section container">
                <h1 className="home__title">Home Page</h1>
                <Search />
            </section>
        );
    }
}
