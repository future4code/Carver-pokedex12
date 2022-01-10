import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalContext"
import CardPokedex from "./CardPokedex"
import { DivCardContainer, Img } from './Styled'
import Ash from '../../components/img/Ash.png'
import * as C from './Styled'

const PokedexPage = () => {
    const { states } = useContext(GlobalStateContext)
    const renderListPokedex = states.pokedex.map((poke, index) => {
        return <CardPokedex key={poke.name} name={poke.name} index={index} />
    })

    return (
        <DivCardContainer>
            {states.pokedex == 0 ? <C.PokeDex> <img src={Ash} />  <h1>Sem Pokemons na Pokedex </h1></C.PokeDex> : renderListPokedex}
        </DivCardContainer>
    )
}

export default PokedexPage