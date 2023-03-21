import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './search';

const onChange = jest.fn();

const setLocalStorage = (id: string, data: { data: string }) => {
    window.localStorage.setItem(id, JSON.stringify(data));
};

describe('Search Component', () => {
    it('render component search', () => {
        const { getByLabelText } = render(<Search updateData={onChange} />);
        expect(getByLabelText(/search/i)).toBeInTheDocument();
    });

    test('data is added into local storage', () => {
        const mockId = 'text';
        const mockJson = { data: '' };
        setLocalStorage(mockId, mockJson);
        expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
    });

    it('onChange Works', () => {
        render(<Search updateData={onChange} />);
        fireEvent.change(screen.getByRole('searchbox'), {
            target: { value: 'testString' },
        });
    });
});
