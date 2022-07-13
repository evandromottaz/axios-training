import { Gallery } from './components/Gallery';
import { GlobalProducts } from './global/GlobalContext';

export function App() {
    return (
        <GlobalProducts>
            <Gallery />
        </GlobalProducts>
    );
}
