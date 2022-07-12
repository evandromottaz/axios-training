import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    background-color: #ccc;
    width: 200px;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 55px max-content;
`;

export const Title = styled.h2`
    font-size: 16px;
    line-height: 1.1;
    color: #222;
    text-align: center;
`

export const Img = styled.div(props => ({
    borderRadius: '20px',
    backgroundImage: `url(${props.src})`,
    backgroundPosition: 'center',
    height: '200px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    marginTop: '20px',

    '&::after': {
        content: '""',
        display: 'block',
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: '-10px',
        top: '-5px',
        backgroundImage: `url(${props.src})`,
        borderRadius: '50%',
        zIndex: 10,
        padding: '5px',
        filter: 'brightness(0.7)',
    },

    '&::before': {
        content: `"${props.number}"`,
        color: '#fff',
        display: 'block',
        width: '20px',
        height: '20px',
        padding: '5px',
        position: 'absolute',
        right: '-10px',
        top: '-5px',
        zIndex: 15,
        fontWeight: 700,
        textAlign: 'center',
    }
}));

export const ImgTitle = styled.h3`
    padding: 0.5rem 1.5rem;
    color: #fff;
    font-size: 10px;
    text-align: center;
`
