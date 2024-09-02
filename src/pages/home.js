import PokeDisplay from "../components/pokeDisplay/pokeDisplay";
import { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../contexts/theme-context";
import { ThemeTogglerButton } from '../components/theme-toggler-button/theme-toggler-button'

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <GlobalStyle theme={theme} />
            <Container>
                <BtnContainer>
                    <ThemeTogglerButton />
                </BtnContainer>
                <PokeDisplay />
            </Container>
        </>
    );
}

export default Home;

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.background}
}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    min-width: 80%;
`

const BtnContainer = styled.div`
    align-self: flex-end;
`