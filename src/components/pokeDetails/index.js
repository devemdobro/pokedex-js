import { useState, useEffect, useContext } from "react"
import { getPokeAbility } from "../../services/requestApi"
import styled, { css } from 'styled-components'
import { ThemeContext } from "../../contexts/theme-context"
import { Button } from "../pokebutton"
import { Link } from "react-router-dom"

const PokeDetails = (props) => {
    const [ability, setAbility] = useState()
    const { theme } = useContext(ThemeContext)
    const pokemon = props.pokemon
    


    useEffect(() => {
        
        const abilities = pokemon.abilities

        const abilitiesUrl = abilities.map((element) => {
            return element.ability.url
        })
        const fetchData = async () => {
            const data = abilitiesUrl.map(async (element) => {
                return (
                    await getPokeAbility(element)
                )
            })
            const results = await Promise.all(data)
            setAbility(results)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Card theme={theme}>
                <Img src={pokemon.sprites.front_default} alt={pokemon.name}></Img>
                <Div theme={theme}>
                    <Name>{pokemon.name}</Name>

                    <p>{pokemon.types.map((types, index) => {
                        return (
                            <Type key={index} type={types.type.name}> {types.type.name}</Type>
                        )
                    })}</p>
                    <h1>Moves List</h1>
                    <List>{pokemon.moves.map((moves, index) => {
                        return (
                            <Itens key={index}>{moves.move.name}</Itens>
                        )
                    })}</List>
                    <div><h1>Abilities</h1>
                        {ability !== undefined ? ability.map((ability, index) => {
                            return (<div key={index}>
                                <h4>{ability.name}</h4>
                                <p>{ability.effect_entries[1].language.name === "en" ? ability.effect_entries[1].effect : ability.effect_entries[0].effect}</p>
                            </div>
                            )
                        }) : "Loading Abilities"}</div>
                    <Button><NavLink to={`/`}>Back</NavLink></Button>
                </Div>

            </Card>
        </div>
    )
}

const Card = styled.div`
background-color: ${props => props.theme.card};
text-align:center;
width:90%;
border-radius:20px;
border: 3px solid #7E281B;
box-shadow: 1px 5px 6px 1px rgba(0, 0, 0, 0.2);
margin: auto;
display: flex;
align-items:center;
justify-content: space-around;
padding: 5px;
@media (max-width: 768px){
    display:block
  }
`

const List = styled.ul`
display: flex;
flex-wrap: wrap;
list-style:none;
justify-content: center;
`
const Itens = styled.li`
margin: 5px 10px ;
text-transform: capitalize;
`

const Img = styled.img`
width: 30%;
@media (max-width: 768px){
    width: 50%
  }
`

const Name = styled.h1`
font-size: 50px;
text-transform: uppercase;
font-weight:800
`

const Div = styled.div`
width: 50%;
background-color: #D2DED6;
border-radius: 20px;
border: 3px solid #7E281B;
box-shadow: 1px 8px 8px 1px rgba(0, 0, 0, 0.2);
padding:8px;
@media (max-width: 768px){
    width: 98%;
    margin: auto;
    padding: 0px
  }
`
const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;
`
const Type = styled.span`
border-radius: 5px;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
${props => props.type === "fire" && css`
color:#B42126;
`}
${props => props.type === "bug" && css`
color: #1C4B27
`}
${props => props.type === "normal" && css`
color: #76525C
`}
${props => props.type === "fighting" && css`
color: #EF613B
`}
${props => props.type === "flying" && css`
color: #48667E
`}
${props => props.type === "poison" && css`
color: #602b8d
`}
${props => props.type === "ground" && css`
color: #a66f2c
`}
${props => props.type === "rock" && css`
color: #49180a
`}
${props => props.type === "ghost" && css`
color: #33326c
`}
${props => props.type === "steel" && css`
color: #5d766e
`}
${props => props.type === "water" && css`
color: #1552e1
`}
${props => props.type === "grass" && css`
color: #157a3e
`}
${props => props.type === "electric" && css`
color: #E2E429
`}
${props => props.type === "psychic" && css`
color: #a22a6a
`}
${props => props.type === "ice" && css`
color: #86D1F4
`}
${props => props.type === "dragon" && css`
color: #438998
`}
${props => props.type === "dark" && css`
color: #05060A
`}
${props => props.type === "fairy" && css`
color: #EC1469
`}`

export { PokeDetails }
