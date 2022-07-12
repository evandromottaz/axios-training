import { Container, MovieTitle } from './styles';

export function Card({ id, title, url }) {
    return (
        <Container>
            <MovieTitle>{title}</MovieTitle>
        </Container>
    );
}
