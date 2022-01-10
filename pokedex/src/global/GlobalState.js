import React, { useState, useEffect } from "react";
import axios from 'axios'
import BASE_URL from "../contants/urls";
import { GlobalStateContext } from "./GlobalContext";

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [listPoke, setListPoke] = useState([])
    const [pagination, setPagination] = useState(1)

    const [variant, setVariant] = useState('text')
    const [variant1, setVariant1] = useState('contained')
    const [color, setColor] = useState('primary')
    const [color1, setColor1] = useState('success')

    useEffect(() => {
        const numberPagination = 20 * (pagination - 1)
        axios
            .get(`${BASE_URL}/pokemon?limit=20&offset=${numberPagination}`)
            .then((res) => {
                setListPoke(res.data)
            })
            .catch((err) => {
            })
    }, [pagination])

    const states = { pokedex, listPoke, pagination }
    const sets = { setPokedex, setListPoke, setPagination }
    const buttons = { variant, setVariant, variant1, setVariant1, color, setColor, color1, setColor1 }

    return <GlobalStateContext.Provider value={{ states, sets, buttons }}>
        {props.children}
    </GlobalStateContext.Provider>
}