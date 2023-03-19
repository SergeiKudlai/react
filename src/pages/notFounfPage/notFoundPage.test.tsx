import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './notFoundPage';

describe('About', () => {
    it('render component About Page', () => {
        render(<NotFoundPage />);
        expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    });
});
