async function loadPokemons(offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
    const data = await response.json();

    let pokemons = data.results.map(async (pokemon) => {
        return await fetchPokemon(pokemon.url);
    });

    return await Promise.all(pokemons);
}

async function fetchPokemon(url) {
    const response = await fetch(`${url}`)
    const data = await response.json();

    return await data;
}

export { loadPokemons, fetchPokemon };