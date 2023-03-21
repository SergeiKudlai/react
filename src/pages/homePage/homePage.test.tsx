import { render, screen } from '@testing-library/react';
import { HomePage } from './homePage';

const setUpdatetitle = jest.fn();

describe('Home', () => {
    it('render component Home Page', () => {
        render(<HomePage updateData={setUpdatetitle} />);
        expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    });
});
