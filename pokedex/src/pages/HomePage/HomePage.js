import axios from "axios"
import React, { useContext } from "react"
import BASE_URL from "../../contants/urls"
import { GlobalStateContext } from "../../global/GlobalContext"
import { GlobalState, useGlobalStates, useGlobalSets } from "../../global/GlobalState"
import { DivCardContainer, DivCard } from './Styled'

const HomePage = () => {
    const { list } = useContext(GlobalStateContext)
    
    const listMaped = list.map((poke) => {
        return (
            <DivCard>
                <h3>{poke.name}</h3>
                <img src={poke.front_default} />
            </DivCard>
        )
    })
    return (
        <DivCardContainer>
            {listMaped}
        </DivCardContainer>
    )
}

export default HomePage