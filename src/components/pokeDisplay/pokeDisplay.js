import { useState, useEffect } from "react";
import { loadPokemons } from "../../services/pokeAPI";
import Pokemon from "../pokemon/pokemon";
import Button from '../button/button';
import styled from "styled-components";

const PokeDisplay = () => {
    const [display, setDisplay] = useState({
        pokemons: []
    });

    const pokemonsPerLoad = 10;
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const loadTenPokemons = await loadPokemons(offset);

            setDisplay({
                pokemons: [...display.pokemons, ...loadTenPokemons]
            });
        }

        fetchData();
    }, [offset]);

    const morePokemon = async () => {
        setOffset(offset + pokemonsPerLoad);
    }

    return (
        <>
            <Container>
                <PokeList>
                    {
                        display.pokemons.map((pokemon, index) => {
                            return <Pokemon pokemon={pokemon} key={index} />
                        })
                    }
                </PokeList>
                <Button label="More Pokémon" onClick={() => morePokemon()} />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const PokeList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);    
    justify-content: center;
    grid-gap: 10px;
    margin: 15px;

    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        margin: 10px;
    }
`

export default PokeDisplay;