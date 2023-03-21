import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer/footer';

export class Layout extends Component {
    setAddedTitleHeader() {}

    render() {
        return (
            <>
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </>
        );
    }
}
