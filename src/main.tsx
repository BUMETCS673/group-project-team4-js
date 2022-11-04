import './index.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import LandingLayout from './layouts/LandingLayout';
import Landing from './pages/landing/Landing';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace={true} />
    },
    {
        path: 'home',
        element: <LandingLayout />,
        children: [
            {
                path: '',
                element: <Landing />
            }
        ]
    },
    {
        path: 'shop',
        // element: </>,
        children: []
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);