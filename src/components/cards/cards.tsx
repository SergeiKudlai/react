import { Component } from 'react';
import { getResponseData } from '../../ts/api';
import { IData, INewString } from '../../ts/interface';
import './cards.scss';

export class Cards extends Component<INewString> {
    public state: {
        data: null | [];
    };

    constructor(props: INewString) {
        super(props);
        this.state = {
            data: null,
        };
    }

    async componentDidMount() {
        const value = await getResponseData();
        this.setState({ data: value });
    }

    setFilterArray() {
        const { data } = this.state;
        const { updateStringSearch } = this.props;
        return data?.filter(({ title }: IData) =>
            title.trim().toLowerCase().includes(updateStringSearch.trim().toLowerCase())
        );
    }

    render() {
        const data = this.setFilterArray();

        return (
            <ul className="home__cards cards">
                {data ? (
                    data.map(({ id, title, image, category, description, price }: IData) => (
                        <li className="cards__item" key={id}>
                            <article className="card">
                                <h2 className="card__title">{title}</h2>
                                <span className="card__category">{category}</span>
                                <img className="card__img" src={image} alt={title} width="200" height="200" />
                                <span className="card__price">{price}$</span>
                                <p className="card__text">{description}</p>
                            </article>
                        </li>
                    ))
                ) : (
                    <li className="cards__loading">Загрузка...</li>
                )}
            </ul>
        );
    }
}
