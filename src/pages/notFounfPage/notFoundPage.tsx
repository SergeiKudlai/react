import { Component } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export class NotFoundPage extends Component {
    public style: {
        display: string;
        alignItems: string;
        justifyContent: string;
    };

    constructor(props: string) {
        super(props);
        this.style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };
    }

    render() {
        return (
            <>
                <Header valid={true} />
                <main className="main">
                    <section className="error-page section container" style={this.style}>
                        <h1 className="about__title" style={{ fontSize: '32px' }}>
                            Error Page
                        </h1>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}
