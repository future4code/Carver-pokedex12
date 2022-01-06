import React, { useContext, useEffect } from 'react'
import { useRequest } from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalContext'
import { DivCard, Buttons } from './Styled'
import { Button } from "@mui/material"
import Load from '../../components/header/img/Load.gif'
import BASE_URL from '../../contants/urls'


export default function CardPokedex(props) {
    const { states, sets, list } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    const goDetails = (id) => {
        navigate(`/details/${id}`)
    }
    useEffect(() => {

    }, [])

    console.log('bbbbbb', states.pokedex)

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
            <h3>{props.name}</h3>
            <img src={pokemon.sprites && pokemon.sprites.front_default} />
            <Buttons>
                <Button variant='text' style={{ color: '#FF0000' }} onClick={() => goDetails(props.name)}>Detalhes</Button>
                <Button variant='text' style={{ color: '#FF0000' }} onClick={() => removeToPokedex(pokemon)}>Remover da Pokedex</Button>
            </Buttons>
        </DivCard>
    )
}

