import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemon = (pokeDetails) => ({
  type: RECEIVE_POKEMON,
  items: pokeDetails.items,
  poke: pokeDetails.poke,
  moves: pokeDetails.moves
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemon = id => dispatch => (
  APIUtil.fetchPokemon(id).then(pokeDetails => {
    // debugger
    return dispatch(receivePokemon(pokeDetails))
  })
)