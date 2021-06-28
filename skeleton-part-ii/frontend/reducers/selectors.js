export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}
  
export const selectPokemon = (state, id) => {
  return state.entities.pokemon[id]
}

export const selectItem = (state, id) => {
  return state.entities.items[id]
}