import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </>
        );
    }
}
