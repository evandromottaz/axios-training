import { Container, Img, ImgTitle, Title } from './styles';

export function Card({infoMovie, price}) {
    const {title, url, id } = infoMovie

    return (
        <Container>
            <Title>{title}</Title>
            <Img src={url} number={id}>
                <ImgTitle>
                    {Number(price).toLocaleString('pt-BR', { style:'currency', currency:'BRL' })}
                </ImgTitle>
            </Img>
        </Container>
    );
}
