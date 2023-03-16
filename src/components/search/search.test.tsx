import { Search } from './search';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
    it('render component search', () => {
        render(<Search updateData={testFunc} />);
        screen.debug();
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
        expect(screen.getByDisplayValue('')).toBeInTheDocument();
    });
});

function testFunc(): never {
    throw new Error('Function not implemented.');
}
