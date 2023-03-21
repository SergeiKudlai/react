import { Component } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/homePage/homePage';
import { AboutPage } from './pages/aboutPage/aboutPage';
import { NotFoundPage } from './pages/notFounfPage/notFoundPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
);
export class App extends Component {
    render = () => <RouterProvider router={router} />;
}
