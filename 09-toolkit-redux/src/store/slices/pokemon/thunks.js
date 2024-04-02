import { startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return (dispatch, getState) => {
        dispatch( startLoadingPokemons());

        // TODO: realizar peticion http
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`)
    }
}