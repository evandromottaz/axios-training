import { Container, Img, ImgTitle, Title } from './styles';

export function Card({ infoMovie, price = '' }) {
    const { title, url, id } = infoMovie;

    const hasPrice = isNaN(price) ? 'Fora de estoque' : (+price).toLocaleString('pt-BR', 
    { style: 'currency', currency: 'BRL', })

    return (
        <Container>
            <Title>{title}</Title>
            <Img src={url} number={id}>
                <ImgTitle>
                    {hasPrice}
                </ImgTitle>
            </Img>
        </Container>
    );
}
