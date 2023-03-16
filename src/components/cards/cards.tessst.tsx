import { render, screen } from '@testing-library/react';
import { Cards } from './cards';

describe('Home Page', () => {
    it('render async component cards', async () => {
        render(<Cards updateStringSearch={''} />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});
