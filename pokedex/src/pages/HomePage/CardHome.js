import React, { useContext } from 'react'
import { useRequest } from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalContext'
import { DivCard, Buttons, ButtonCardLeft, ButtonCardRight, DivImg } from './Styled'
import BASE_URL from '../../contants/urls'

export default function CardHome(props) {
    const { states, sets, buttons } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    const addToPokedex = (poke, index) => {
        const newPoke = { ...poke }
        const newPokedex = [...states.pokedex, newPoke]
        sets.setPokedex(newPokedex)
        if (pokemon === poke) {
            states.listPoke.results.splice(index, 1)
        }
    }

    const goDetails = (id) => {
        navigate(`/details/${id}`)
        buttons.setVariant1('text')
        buttons.setVariant('text')
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
                <ButtonCardRight variant='text' onClick={() => addToPokedex(pokemon, props.index)}>Adicionar a Pokedex</ButtonCardRight>
            </Buttons>
        </DivCard>
    )
}

