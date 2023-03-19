import { Component } from 'react';

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
            <section className="error-page section container" style={this.style}>
                <h1 className="about__title" style={{ fontSize: '32px' }}>
                    Error Page
                </h1>
            </section>
        );
    }
}
