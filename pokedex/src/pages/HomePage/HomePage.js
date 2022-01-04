import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalContext"
import { DivCardContainer, Img } from './Styled'
import { useNavigate } from "react-router-dom"
import Load from '../../components/header/img/Load.gif'

import CardHome from "./CardHome"

const HomePage = () => {
    
    const navigate = useNavigate()

    function goDetails(id){
        navigate(`/details/${id}`)
    }

    const { list } = useContext(GlobalStateContext)
    console.log('kasd', list)
    const listMaped = list.results && list.results.map((poke) => {
        return (
           
            <CardHome name={poke.name} poke={poke}/>
        )
    })
    return (
        <DivCardContainer>
            {listMaped ? listMaped : <Img src={Load}/>} 
        </DivCardContainer>
    )
}

export default HomePage