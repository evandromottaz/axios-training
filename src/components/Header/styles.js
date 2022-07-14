import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    background-color: #eee;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222;
`

export const Logo = styled(Link)`
    font-family: 'Eater', cursive;
    font-size: 2rem;
    word-spacing: 5px;
    text-shadow: 0 0 5px darkorange, 0 0 8px red, 0 0 6px orange;
    color: #000;
    line-height: 1.4;
    text-align: center;
`

export const Menu = styled.nav`
    display: flex;
    gap: 1rem;
    width: 400px;
    justify-content: space-around;
`
export const HiperLink = styled(Link)`
    color: #fff;
    padding: 15px 20px;
    transition: 0.3s;

    &:hover {
        color: orangered;
        box-shadow: 0 0 10px 2px #000;
    }
`
