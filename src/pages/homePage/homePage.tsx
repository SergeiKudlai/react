import { Component } from 'react';
import { Search } from '../../components/search/search';
import { Cards } from '../../components/cards/cards';
import { IFuncProps } from '../../ts/interface';
import { title_value } from '../../ts/enum';
import './home.scss';

export class HomePage extends Component<IFuncProps> {
    public state: { valueSearch: string };

    constructor(props: IFuncProps) {
        super(props);
        this.state = {
            valueSearch: '',
        };
        this.props.updateData(title_value.home);
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
