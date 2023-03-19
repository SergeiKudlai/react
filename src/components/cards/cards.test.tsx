import { render, screen, waitFor } from '@testing-library/react';
import { Cards } from './cards';
import { getResponseData } from '../../ts/api';

global.fetch = jest.fn();
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('Home Page', () => {
    it('render list ', () => {
        render(<Cards updateStringSearch={''} />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('render fetch data', async () => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve(),
        } as Response);
        render(<Cards updateStringSearch={''} />);
        await waitFor(async () => {
            expect(screen.getByText('Загрузка...')).toBeInTheDocument();
        });
    });

    test('the data is peanut butter', async () => {
        const data = await getResponseData();
        await waitFor(() => {
            expect(data);
        });
    });

    test('the fetch fails with an error', async () => {
        expect.assertions(0);
        try {
            await getResponseData();
        } catch (e) {
            expect(e).toMatch('error');
        }
    });
});
