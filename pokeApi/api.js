let getAllPokemons = async () => {
    let pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    pokemonData = await pokemonData.json();

    return pokemonData;
}

let getPokemonById = async (id) => {
    /* return pokemon */

    let pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

    pokemonData = await pokemonData.json();

    return pokemonData;
}


let getPokemonsAbility = async (abilityName) => {
    let pokemonData = await fetch ("https://pokeapi.co/api/v2/ability/" + abilityName);

    pokemonData = await pokemonData.json();

    return pokemonData;
};

let getPokemonType = async (typeName) => {
    let pokemonData = await fetch ("https://pokeapi.co/api/v2/type/" + typeName);

    pokemonData = await pokemonData.json();

    return pokemonData;
};

let getPokemonSpecies = async (id) => {
    let pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id);

    pokemonData = await pokemonData.json();

    return pokemonData;
}

export {getAllPokemons, getPokemonById, getPokemonsAbility, getPokemonType, getPokemonSpecies}