import React, { useContext } from 'react'
import { useRequest } from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalContext'
import { DivCard, Buttons } from './Styled'
import { Button } from "@mui/material"
import Load from '../../components/header/img/Load.gif'
import BASE_URL from '../../contants/urls'


export default function CardHome(props) {
    const { state, setters, requests } = useContext(GlobalStateContext)
    const navigate = useNavigate()

    function goDetails(id) {
        navigate(`/details/${id}`)
    }
    const pokemon = useRequest(`${BASE_URL}/pokemon/${props.name}`, {})
    console.log(pokemon, 'aaa')

    return (
           <DivCard>
            <h3>{props.poke.name}</h3>
            <img src={pokemon.sprites && pokemon.sprites.front_default} />
            <Buttons>
                <Button variant='text' style={{ color: '#FF0000' }} onClick={() => goDetails(props.poke.name)}>Detalhes</Button>
                <Button variant='text' style={{ color: '#FF0000' }}>Pokedex</Button>
            </Buttons>
        </DivCard>
    )
}

