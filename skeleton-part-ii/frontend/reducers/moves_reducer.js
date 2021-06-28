import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
//   case RECEIVE_ALL_POKEMON:
//     return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON:
    // const newPokemon = {[action.poke.id]: action.moves}
    let newState = Object.assign({}, state, action.moves)
    // debugger
    return newState
  default:
    return state;
  }
}
  
export default movesReducer;
