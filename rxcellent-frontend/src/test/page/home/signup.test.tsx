import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '@/pages/login/login';
// We need a router to test the components since our components are rendered in a Router
import { MemoryRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider } from '@mui/material';
import Landing from '@/pages/landing/Landing';
test('When login/signup is clicked', () => {
    render(
        <MemoryRouter>
            <Landing></Landing>
        </MemoryRouter>
    );
    const bannerButton = screen.queryByRole('button', { name: 'Category' });
    expect(bannerButton).toBeInTheDocument();
    fireEvent.click(bannerButton!);
    expect(render(<Login></Login>)).toBeInTheDocument();
});
