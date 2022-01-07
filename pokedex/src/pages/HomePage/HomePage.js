import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalContext"
import { DivCardContainer, Img } from './Styled'
import { useNavigate } from "react-router-dom"
import Loading from "../../components/img/Load.gif"

import CardHome from "./CardHome"

const HomePage = () => {
    const { list } = useContext(GlobalStateContext)
    const listMaped = list.results && list.results.map((poke, index) => {
        return (
            <CardHome key={index} name={poke.name} index={index}/>
        )
    })
    return (
        <DivCardContainer>
            {listMaped ? listMaped : <Img src={Loading}/>} 
        </DivCardContainer>
    )
}

export default HomePage