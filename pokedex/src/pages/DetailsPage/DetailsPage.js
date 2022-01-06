import React from "react"
import { useParams } from "react-router-dom"
import BASE_URL from "../../contants/urls"
import { useRequest } from '../../hooks/useRequest'
import * as C from './Styled'

const DetailsPage = () => {
    const params = useParams()

    const pokemon = useRequest(`${BASE_URL}/pokemon/${params.id}`,{})
    // console.log('Poke', pokemon)
    // console.log('params', params)

    const pokemon = useRequest(`${BASE_URL}/pokemon/${params.id}`, {})
    console.log('Poke', pokemon)

    const getHability = pokemon.moves && pokemon.moves.map((hab) => {
        return (
            <div key={hab.move.name}>
                <p>{hab.move.name}</p>
            </div>
        )
    })

    const getTypes = pokemon.types && pokemon.types.map((typ) => {
        return (
            <div key={typ.type.name}>
                <p>{typ.type.name}</p>
            </div>
        )
    })

    const getStats = pokemon.stats && pokemon.stats.map((sta)=>{
        return (
            <div>
                <p><b>{sta.stat.name}</b>: {sta.base_stat}</p>

    
            </div>
        )
    })
    return (
        <C.Content>
            <div>
            <h1>Detalhes do {pokemon.name}</h1>

            <C.Img>
                <img src={pokemon.sprites && pokemon.sprites.front_default} />
                <img src={pokemon.sprites && pokemon.sprites.back_default } />
            </C.Img>
            </div>

            <C.ContainerInfo>
                <C.Type>
                <h2>Tipos</h2>
                {getTypes}
                </C.Type>
               

                <C.Stats>
                <h2>Estatísticas</h2>
                <p>{getStats}</p>
                </C.Stats>

                <C.Hability>
                <h2>Habilidades</h2>
                <p>{getHability}</p>
                </C.Hability>
            </C.ContainerInfo>

        </C.Content>
    )
}

export default DetailsPage