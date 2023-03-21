import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/icon/react_img.png';
import './header.scss';

export class Header extends Component<{ valid: boolean }> {
    constructor(props: { valid: boolean }) {
        super(props);
    }

    render() {
        const { valid } = this.props;

        return (
            <header className="header">
                <div className="header__container container">
                    <nav className="header__nav">
                        <Link className="logo" to={'./'}>
                            <img className="logo__img" src={logo} alt="Логотип" width="70" height="30" />
                        </Link>

                        <ul className="header__list">
                            <li className="header__item">
                                <NavLink className="header__link" to={'./'}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="header__item">
                                <NavLink className="header__link" to={'./about'}>
                                    About
                                </NavLink>
                            </li>
                            {valid ? <li className="header__item header__item--error">404</li> : ''}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
