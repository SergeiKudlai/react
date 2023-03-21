import { render, screen } from '@testing-library/react';
import { AboutPage } from './aboutPage';

const setUpdatetitle = jest.fn();

describe('About', () => {
    it('render component About Page', () => {
        render(<AboutPage updateData={setUpdatetitle} />);
        expect(screen.getByText(/About Page/i)).toBeInTheDocument();
    });
});
