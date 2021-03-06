import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../../App';

export function SiteMap() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
