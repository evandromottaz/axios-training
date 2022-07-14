import { GlobalProducts } from './global/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from './components/Grid';

export function App() {
    return (
        <GlobalProducts>
            <Grid />
        </GlobalProducts>
    );
}
