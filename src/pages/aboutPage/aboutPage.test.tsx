import { render, screen } from '@testing-library/react';
import { AboutPage } from './aboutPage';

test('title', () => {
    render(<AboutPage />);
    const title = screen.getByAltText(/About Page/i);
    expect(title).toBeInTheDocument();
});
