import { Container, Img, ImgTitle, Title } from './styles';

export function Card({infoMovie}) {
    const {title, url, id } = infoMovie

    return (
        <Container>
            <Title>{title}</Title>
            <Img src={url} alt={title} number={id} >
                <ImgTitle>{title}</ImgTitle>
            </Img>
        </Container>
    );
}
