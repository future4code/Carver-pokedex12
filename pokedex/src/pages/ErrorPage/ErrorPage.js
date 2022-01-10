import React from "react"
import Error from '../../components/img/Error.gif'
import BackHome from '../../components/img/BackHome.gif'
import { useNavigate } from "react-router-dom"
import * as C from './style'

const ErrorPage = () => {
    const navigate = useNavigate()

    function goHome() {
        navigate('/')
    }
    return (
        <C.DivContent>
            <div>
                <h1>Pagina não encontrada</h1>
                <h1>404!</h1>
                <C.ImgBackHome src={BackHome} onClick={goHome} />
                <h3>Clique no Squirtle para voltar</h3>
            </div>

            <C.ImgPika src={Error} />
        </C.DivContent>
    )
}

export default ErrorPage