import { render, screen } from '@testing-library/react';
import { AboutPage } from './aboutPage';

describe('About', () => {
    it('render component About Page', () => {
        render(<AboutPage />);
        expect(screen.getByText(/about page/i)).toBeInTheDocument();
    });
});
