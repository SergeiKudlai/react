import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/homePage/homePage';
import { AboutPage } from './pages/aboutPage/aboutPage';
import { NotFoundPage } from './pages/notFounfPage/notFoundPage';
import { FormsPage } from './pages/formsPage/formsPage';
import { Header } from './components/header/header';

export class App extends Component {
    public state: {
        title: string;
    };

    constructor(props: string) {
        super(props);
        this.state = {
            title: '',
        };
    }

    setUpdatetitle = (params: string) => {
        this.setState({ title: params });
    };

    render = () => (
        <>
            <Header title={this.state.title} />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage updateData={this.setUpdatetitle} />} />
                    <Route path="/about" element={<AboutPage updateData={this.setUpdatetitle} />} />
                    <Route path="/form" element={<FormsPage updateData={this.setUpdatetitle} />} />
                    <Route path="*" element={<NotFoundPage updateData={this.setUpdatetitle} />} />
                </Route>
            </Routes>
        </>
    );
}
