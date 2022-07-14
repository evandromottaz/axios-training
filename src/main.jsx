import './global/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SiteMap } from './components/SiteMap';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SiteMap />
    </React.StrictMode>,
);
