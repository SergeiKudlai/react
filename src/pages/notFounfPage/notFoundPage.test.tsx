import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './notFoundPage';

const setUpdatetitle = jest.fn();

describe('Error', () => {
    it('render component Error Page', () => {
        render(<NotFoundPage updateData={setUpdatetitle} />);
        expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    });
});
