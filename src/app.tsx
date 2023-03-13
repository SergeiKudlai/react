import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/homePage/homePage';
import { AboutPage } from './pages/aboutPage';
import { NotFoundPage } from './pages/notFoundPage';

export class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        );
    }
}
