import { Component } from 'react';
import { IFuncProps } from '../../ts/interface';
import { title_value } from '../../ts/enum';

export class AboutPage extends Component<IFuncProps> {
    public style: {
        display: string;
        alignItems: string;
        justifyContent: string;
    };

    constructor(props: IFuncProps) {
        super(props);
        this.style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };
        this.props.updateData(title_value.about);
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
