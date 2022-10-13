import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './ContextApi/AuthContext';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>
);
