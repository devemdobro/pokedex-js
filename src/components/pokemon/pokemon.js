import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Pokemon = ({ pokemon }) => {
    return (
        <li>
            <Link to={`pokemon/${pokemon.name}`}>
                <PokemonContainer>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h2>
                        {pokemon.name}
                    </h2>
                </PokemonContainer >
            </Link>
        </li>
    );
}

const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;    
    height: 150px;
    width: 150px;
    align-items: center;
    justify-content: center;
    background-color: #E3350D;
    border-radius: 10px;
    color: white;
    transition: ease-in-out .2s;

    &:hover {
        background-color: white;
        color: black;
    }
`

export default Pokemon;