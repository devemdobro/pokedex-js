import { useState, useEffect } from "react";
import { fetchPokemon } from "../../services/pokeAPI";
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";

const PokeStats = () => {
    const [pokemonStats, setStats] = useState({});
    const [abilities, setAbility] = useState([])

    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);

            setStats(data);

            const abilitiesPromises = await data.abilities.map(async ability => {
                const response = await fetch(ability.ability.url)
                return await response.json();
            });

            const abilitiesDescription = await Promise.all(abilitiesPromises)
            setAbility(abilitiesDescription);
        }

        fetchData();
    }, []);

    function isEmpty(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }

    function getAbilityText(ability) {
        let text;
        ability.effect_entries.forEach(entry => {
            if (entry.language.name === "en") {
                text = entry.effect;
            }
        });

        return text;
    }

    return (
        <>
            {!isEmpty(pokemonStats) && (
                <Section>
                    <Link to={"/"}>
                        <Btn>back</Btn>
                    </Link>
                    <Pokemon>
                        <PokemonImage src={pokemonStats.sprites.front_default} alt={pokemonStats.name} />
                        <PokemonName>{`A wild ${pokemonStats.name.toUpperCase()} appears!`}</PokemonName>
                    </Pokemon>
                    <div>
                        <Stats>
                            <h3>Moves</h3>
                            <Values>
                                {pokemonStats.moves.map((move, index) => {
                                    return <ListItems key={index}>{move.move.name}</ListItems>
                                })}
                            </Values>
                        </Stats>
                        <Stats>
                            <h3>Abilities</h3>
                            <Values>
                                {abilities.map((ability, index) => {
                                    return <ListItems key={index}>{ability.name + ": " + getAbilityText(ability)}</ListItems>
                                })}
                            </Values>
                        </Stats>
                        <Stats>
                            <h3>Type</h3>
                            <Values>
                                {pokemonStats.types.map((type, index) => {
                                    return <ListItems key={index}>{type.type.name}</ListItems>
                                })}
                            </Values>
                        </Stats>
                    </div>
                </Section>
            )}
        </>
    );
}

const Section = styled.section`
    background-color: #E3350D;
    min-width: 100%;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 0 20px 0;
`

const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    padding: 25px;
    margin: 20px;
    height: 50%;
`

const PokemonImage = styled.img`
    width: 80%;
`

const PokemonName = styled.h2`
    font-size: 100%;
    animation: .8s .2s shake infinite alternate;
    width: 80%;

    @keyframes shake {
        0% { transform: skewX(-15deg); }
        5% { transform: skewX(15deg); }
        10% { transform: skewX(-15deg); }
        15% { transform: skewX(15deg); }
        20% { transform: skewX(0deg); }
        100% { transform: skewX(0deg); }  
      }
`

const Stats = styled.div`
      color: white;
      margin: 20px;
      font-size: 12px;
`

const Values = styled.ul`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 80vw;
      justify-content: center;
`

const ListItems = styled.li`
      background-color: white;
      color: black;
      padding: 5px;
      margin: 5px;
`

const Btn = styled.h4`
      display: inline-block; 
      color: white;
      transition: ease-in-out .2s;

      &:hover {
        color: black;
        font-size: 14px;
      }
`

export default PokeStats;