import { useState, useEffect, useContext } from "react"
import { getPokemon } from "../../services/requestApi"
import { useParams } from "react-router"
import { PokeDetails } from "../pokeDetails"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const Poke = () => {
    const [pokemon, setPokemon] = useState()
    const { theme } = useContext(ThemeContext)

    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon(name)
            setPokemon(data)
        }
        fetchData()
    }, [])
    return (

        <div>
            <GlobalStyle theme={theme} />
            <div>
                {pokemon !== undefined ? <PokeDetails pokemon={pokemon} /> : "No pokemon found"}
            </div>
        </div>
    )
}
const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  
  }
  body{
    background-color: ${props => props.theme.background}
}`

export { Poke }
