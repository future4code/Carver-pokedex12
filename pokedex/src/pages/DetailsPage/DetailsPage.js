import React, { useState } from "react"
import { useParams } from "react-router-dom"
import BASE_URL from "../../contants/urls"
import { useRequest } from '../../hooks/useRequest'
import ProgressBar from "./ProgressBar"
import Button from '@mui/material/Button';

import * as C from './Styled'

const DetailsPage = () => {
    const params = useParams()
    const [control, setControl] = useState('stats')
    const [variant1, setVariant1] = useState('contained')
    const [variant2, setVariant2] = useState('text')
    const [variant3, setVariant3] = useState('text')
    const [color1, setColor1] = useState('success')
    const [color2, setColor2] = useState('success')
    const [color3, setColor3] = useState('success')

    const pokemon = useRequest(`${BASE_URL}/pokemon/${params.id}`, {})

    const getHability = pokemon.moves && pokemon.moves.map((hab) => {
        return (
            <C.RenderHability key={hab.move.name}>
                <p>{hab.move.name}</p>
            </C.RenderHability>
        )
    })

    const getTypes = pokemon.types && pokemon.types.map((typ) => {
        return (
            <div key={typ.type.name}>
                <p>{typ.type.name}</p>
            </div>
        )
    })

    const getStats = pokemon.stats && pokemon.stats.map((sta) => {
        return (
            <C.DivStats key={sta.stat.name}>
                <p><b>{sta.stat.name}</b>:</p>
                <C.DivBarrerStats>
                    <ProgressBar baseState={sta.base_stat} />
                </C.DivBarrerStats>
                <p>{sta.base_stat}</p>
            </C.DivStats>
        )
    })

    const changeStatsText = (text) => {
        setVariant1('contained')
        setVariant2('text')
        setVariant3('text')
        setControl(text)
    }

    const changeTypesText = (text) => {
        setVariant1('text')
        setVariant2('contained')
        setVariant3('text')
        setControl(text)
    }

    const changeHabilitiesText = (text) => {
        setVariant1('text')
        setVariant2('text')
        setVariant3('contained')
        setControl(text)
    }

    const detailRender = () => {
        if (control === 'stats') {
            return (
                <C.ContainerInfo>
                    <C.Stats>
                        {getStats}
                    </C.Stats>
                </C.ContainerInfo>
            )
        } else if (control === 'types') {
            return (
                <C.ContainerInfo>
                    <C.Type>
                        {getTypes}
                    </C.Type>
                </C.ContainerInfo>
            )
        } else if (control === 'habilities') {
            return (
                <C.ContainerInfo>
                    <C.Hability>
                        <div>
                            {getHability}
                        </div>
                    </C.Hability>
                </C.ContainerInfo>
            )
        }
    }

    return (
        <C.Content>
            <div>
                <h1>Detalhes do {pokemon.name}</h1>
                <C.Img>
                    <img src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} />
                </C.Img>
            </div>
            <C.DivInfoText>
                <div>
                    <Button
                        variant={variant1}
                        color={color1}
                        onClick={() => changeStatsText('stats')}>Estatísticas</Button>

                    <Button
                        variant={variant2}
                        color={color2}
                        onClick={() => changeTypesText('types')}>Tipos</Button>

                    <Button
                        variant={variant3}
                        color={color3}
                        onClick={() => changeHabilitiesText('habilities')}>Habilidades</Button>
                </div>

            </C.DivInfoText>
            {detailRender()}
        </C.Content>
    )
}

export default DetailsPage