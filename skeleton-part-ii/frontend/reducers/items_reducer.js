import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON:
    // debugger
    // const newItems = {[action.items.id]: action.items}
    let newState = Object.assign({}, state, action.items)
    return newState
  default:
    return state;
  }
}
  
export default itemsReducer;
