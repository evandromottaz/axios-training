import { useEffect, useState } from 'react';
import { Container } from './styles';
import { useFetch } from '../../hooks/useFetch';
import { Card } from '../Card';
import axios from 'axios';

export function Gallery() {
    const [movies, moviesSet] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/photos/1',
            );

            moviesSet(data);
        }

        getMovies();
    }, []);
    return (
        <Container>
            {movies.length &&
                movies.map((movie, index) => <Card key={index} item={movie} />)}
        </Container>
    );
}
