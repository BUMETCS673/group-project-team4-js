import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '@/pages/login/login';
import Landing from '../../../pages/landing/Landing';
import forgetPassword from '@/pages/forgetPassword/forgetPassword';
// We need a router to test the components since our components are rendered in a Router
import { MemoryRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider } from '@mui/material';

test('When forgot password is clicked', () => {
    render(
        <MemoryRouter>
            <Login></Login>
        </MemoryRouter>
    );
    const bannerButton = screen.queryByRole('button', { name: 'Forgot Password?' });
    expect(bannerButton).toBeInTheDocument();
    fireEvent.click(bannerButton!);
    expect(render(<forgetPassword></forgetPassword>)).toBeInTheDocument();
});
