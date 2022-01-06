import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalContext"
import { GlobalState } from "../../global/GlobalState"
import CardPokedex from "./CardPokedex"
import { DivCardContainer, Img } from './Styled'


const PokedexPage = () => {

    const { states, sets, list} = useContext(GlobalStateContext)
    // console.log('b', states, sets)
    // console.log('c', states.listPoke)


    const renderListPokedex = states.pokedex.map((poke, index) => {
        return <CardPokedex key={poke.name} name={poke.name} index={index}/>
    })
 
    return (

        <DivCardContainer>
            {states.pokedex == 0 ? <p>Não tem pokemon</p> : renderListPokedex}
        </DivCardContainer>
    )
}

export default PokedexPage