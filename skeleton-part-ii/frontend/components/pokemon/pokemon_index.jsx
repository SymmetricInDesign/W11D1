import React from 'react';
import PokemonIndexItem from "./pokemon_index_item"
import {Route} from 'react-router-dom'
import PokemonDetail from './pokemon_detail';
import PokemonDetailContainer from './pokemon_detail_container'


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    const pokemonLis = this.props.pokemon.map((poke) => (
      <PokemonIndexItem key={poke.id} poke={poke}/>
    ))

    return (
    <section className="pokedex">
      <Route path='/pokemon/:id' component={PokemonDetailContainer} replace/>
      <ul>
        {pokemonLis}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;