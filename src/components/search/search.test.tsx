import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './search';

const onChange = jest.fn();

describe('Search Component', () => {
    it('render component search', () => {
        const { getByLabelText } = render(<Search updateData={onChange} />);
        expect(getByLabelText(/search/i)).toBeInTheDocument();
    });

    it('onChange works', () => {
        render(<Search updateData={onChange} />);
        userEvent.type(screen.getByRole('searchbox'), '');
        expect(onChange).toHaveBeenCalledTimes(0);
    });
});
