import { Footer } from "../Footer";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { Container } from "./styles";


export function Grid() {
    return (
        <Container>
            <Header />
                <Gallery />
            <Footer />
        </Container>
    )
}