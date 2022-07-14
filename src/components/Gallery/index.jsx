import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { useFetch } from '../../hooks/useFetch';
import { Card } from '../Card';
import axios from 'axios';
import { GlobalContext } from '../../global/GlobalContext';

export function Gallery() {
    const [movies, moviesSet] = useState([]);
    const global = useContext(GlobalContext);

    useEffect(() => {
        async function getMovies() {
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/photos/',
            );

            moviesSet(data);
        }

        getMovies();
    }, []);

    if (!movies.length && !global.length) return;

    console.log(global[0].preco);
    return (
        <Container>
            {movies.map((item, index) => {
                return index <= 20 ? (
                    <Card
                        key={index}
                        price={
                            global[index]
                                ? global[index].preco
                                : 'Fora de estoque'
                        }
                        infoMovie={item}
                    />
                ) : (
                    ''
                );
            })}
        </Container>
    );
}

// movies.map((movie, index) => <Card key={index} item={movie} />)}
