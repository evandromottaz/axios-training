import { Container, HiperLink, Logo, Menu } from "./styles";

export function Header() {
    return(
        <Container>
            <Logo to="">Uma <br/>logo Top</Logo>

            <Menu>
                <HiperLink to="">Home</HiperLink>
                <HiperLink to="sobre">Sobre</HiperLink>
                <HiperLink to="login">Login</HiperLink>
            </Menu>
        </Container>
    )
}