import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './components/store/favorites-context';

createRoot(document.getElementById('root'))
    .render(
        <FavoritesContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FavoritesContextProvider>
    );
