import React from 'react'
import {Route} from 'react-router-dom'
import ItemDetailContainer from './item_detail_container'

class PokemonDetail extends React.Component {

    componentDidMount(){
        this.props.requestPokemon()
    }

    renderIfPoke(){
        const {poke, items, moves} = this.props
        if (poke){
            return <>
                <Route path='/pokemon/:pokemonId/items/:itemId' component={ItemDetailContainer}/>
                <h1>{poke.name}</h1>
                <h2>{poke.pokeType}</h2>
                <img src={poke.imageUrl} alt={poke.name} />
                <ItemDetailContainer/>
            </>
        }else{
            return null
        }
    }

    render(){
        // debugger
        
        // console.log(poke)
        return (
            this.renderIfPoke()
        )
    }
}

export default PokemonDetail