import { useContext } from "react"
import { Link } from "react-router-dom"
import styled, { css } from 'styled-components'
import { ThemeContext } from "../../contexts/theme-context"

const CardsList = (props) => {
    const pokemons = props.pokemon
    const { theme } = useContext(ThemeContext)

    return (
        <Div >
            {pokemons.map((element, index) => {
                return (<PokeList key={index} theme={theme}>
                    <NavLink to={`/poke/${element.name}`}>
                        <div>
                            <img src={element.sprites.front_default} alt={element.name}></img>
                            <Name>{element.name}</Name>
                            <div>{element.types.map((types, index) => {
                                return (
                                    <Type key={index} type={types.type.name}> {types.type.name}</Type>
                                )
                            })}</div>
                        </div>
                    </NavLink>
                </PokeList>)
            })}
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content:center;
@media (max-width: 768px){
    display: block;
}
`

const PokeList = styled.div`
background-color: ${props => props.theme.card};
margin:10px;
height: 20rem;
text-align:center;
width:25%;
align-itens:center;
padding-top: 20px;
padding-bottom: 20px;
border-radius:20px;
border: 3px solid #7E281B;
box-shadow: 1px 5px 6px 1px rgba(0, 0, 0, 0.2);
font-size: 20px;
transition: all 300ms ease-in-out;
box-sizing: border-box;
&:hover{
    cursor: pointer;
    border: 10px solid #7E281B;
  
  };
@media (max-width: 768px){
    width: 50%;
    margin: 3% auto
}
`

const Name = styled.div`
font-weight: 500;

`

const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;
`

const Type = styled.span`
border-radius: 5px;
font-weight: 700;
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

export { CardsList }