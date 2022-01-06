import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalContext"
import { DivCardContainer, Img } from './Styled'
import { useNavigate } from "react-router-dom"
import Load from '../../components/header/img/Load.gif'

import CardHome from "./CardHome"

const HomePage = () => {

    const { state, sets, list } = useContext(GlobalStateContext)
    // console.log('kasd', list.results)
    const listMaped = list.results && list.results.map((poke, index) => {
        return (
            <CardHome key={index} name={poke.name} index={index}/>
        )
    })
    return (
        <DivCardContainer>
            {listMaped ? listMaped : <Img src={Load}/>} 
        </DivCardContainer>
    )
}

export default HomePage