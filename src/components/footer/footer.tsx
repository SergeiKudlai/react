import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icon/react_img.png';
import gitHub from '../../assets/img/icon/github_icon.png';
import './footer.scss';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container container">
                    <Link className="logo" to={'./'}>
                        <img className="logo__img" src={logo} alt="Логотип" width="70" height="30" />
                    </Link>

                    <div className="footer__box">
                        <a
                            className="footer__link"
                            href="https://github.com/SergeiKudlai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="footer__img" src={gitHub} alt="gitHub" width="50" height="50" />
                        </a>

                        <span className="footer__text">2023г.</span>
                    </div>
                </div>
            </footer>
        );
    }
}
