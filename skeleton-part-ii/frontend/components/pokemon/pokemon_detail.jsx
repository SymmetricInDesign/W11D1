import React from 'react'

class PokemonDetail extends React.Component {

    componentDidMount(){
        this.props.requestPokemon()
    }

    renderIfPoke(){
        const {poke, items, moves} = this.props
        if (poke){
            return <>
                <h1>{poke.name}</h1>
                <h2>{poke.pokeType}</h2>
                <img src={poke.imageUrl} alt={poke.name} />
                <h1></h1>
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