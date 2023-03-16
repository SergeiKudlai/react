import { Component } from 'react';

export class AboutPage extends Component {
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
            <section className="about section container" style={this.style}>
                <h1 className="about__title" style={{ fontSize: '32px' }}>
                    About Page
                </h1>
            </section>
        );
    }
}
