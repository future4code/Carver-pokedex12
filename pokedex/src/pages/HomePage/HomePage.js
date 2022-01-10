import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalContext"
import { MainContainer, DivCardContainer, Img } from './Styled'
import Loading from "../../components/img/Load.gif"
import Pagination from '@mui/material/Pagination';

import CardHome from "./CardHome"

const HomePage = () => {
    const { states, sets } = useContext(GlobalStateContext)

    const onChangePagination = (event, value) => {
        sets.setPagination(value)
    }

    const listMaped = states.listPoke.results && states.listPoke.results.map((poke, index) => {
        return (
            <CardHome key={index} name={poke.name} index={index} />
        )
    })
    return (
        <MainContainer>
            <Pagination count={32} shape="rounded" page={states.pagination} onChange={onChangePagination} />
            <DivCardContainer>
                {listMaped ? listMaped : <Img src={Loading} />}
            </DivCardContainer>
        </MainContainer>
    )
}

export default HomePage