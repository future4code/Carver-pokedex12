import React, { useContext } from 'react'
import { useRequest } from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalContext'
import { DivCard, Buttons, ButtonCardLeft, ButtonCardRight, DivImg } from './Styled'
import BASE_URL from '../../contants/urls'


export default function CardPokedex(props) {
    const { states, sets, buttons } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    const goDetails = (id) => {
        navigate(`/details/${id}`)
        buttons.setVariant1('text')
        buttons.setVariant('text')
    }

    const removeToPokedex = (poke) => {
        const newPoke = { ...poke }
        states.listPoke.results = [newPoke, ...states.listPoke.results]
        const newListPokemon = states.pokedex.filter((pokemo) => {
            return pokemo.id !== poke.id;
        })
        sets.setPokedex(newListPokemon)
    }

    const pokemon = useRequest(`${BASE_URL}/pokemon/${props.name}`, {})

    return (
        <DivCard>
            <DivImg>
                <img src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} />
            </DivImg>
            <h3>{props.name}</h3>
            <Buttons>
                <ButtonCardLeft variant='text' onClick={() => goDetails(props.name)}>Detalhes</ButtonCardLeft>
                <ButtonCardRight variant='text' onClick={() => removeToPokedex(pokemon)}>Remover da Pokedex</ButtonCardRight>
            </Buttons>
        </DivCard>
    )
}

