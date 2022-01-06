import React, { useContext, useEffect } from 'react'
import { useRequest } from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalContext'
import { DivCard, Buttons, ButtonCardLeft, ButtonCardRight, DivImg } from './Styled'
import { Button } from "@mui/material"
import Load from '../../components/img/Load.gif'
import BASE_URL from '../../contants/urls'


export default function CardPokedex(props) {
    const { states, sets, list } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    const goDetails = (id) => {
        navigate(`/details/${id}`)
    }

    const removeToPokedex = (poke) => {
        const newPoke = { ...poke }
        list.results = [newPoke, ...list.results]
        const newListPokemon = states.pokedex.filter((pokemo) => {
            return pokemo.id !== poke.id;
        })
        sets.setPokedex(newListPokemon)
    }

    const pokemon = useRequest(`${BASE_URL}/pokemon/${props.name}`, {})

    return (
        <DivCard>
            <DivImg>
                <img src={pokemon.sprites && pokemon.sprites.front_default} />
            </DivImg>
            <h3>{props.name}</h3>
            <Buttons>
                <ButtonCardLeft variant='text' onClick={() => goDetails(props.name)}>Detalhes</ButtonCardLeft>
                <ButtonCardRight variant='text' onClick={() => removeToPokedex(pokemon)}>Remover da Pokedex</ButtonCardRight>
            </Buttons>
        </DivCard>
    )
}

