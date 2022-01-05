import React from "react"
import { useParams } from "react-router-dom"
import BASE_URL from "../../contants/urls"
import { useRequest } from '../../hooks/useRequest'

const DetailsPage = () => {
    const params = useParams()
    const pokemon = useRequest(`${BASE_URL}/pokemon/${params.id}`,{})
    // console.log('Poke', pokemon)
    // console.log('params', params)
    
    return (
        <div>
            <h1>DetailsPage</h1>
        </div>
    )
}

export default DetailsPage