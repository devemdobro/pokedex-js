async function getPokemons(number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${number}&offset=0`)
    const pokemons = await response.json()
    const results = pokemons.results
    return results
}

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemons = await response.json()
    return pokemons
}

async function getPokeAbility(url) {
    const response = await fetch(url)
    const pokemons = await response.json()
    return pokemons
}


export { getPokemons, getPokemon, getPokeAbility }