import React, { useState } from "react";
import BASE_URL from "../contants/urls";
import {GlobalStateContext} from "./GlobalContext";
import { useRequest } from "../hooks/useRequest";

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [listPoke, setListPoke] = useState([])
    const [variant, setVariant] = useState('text')
    const [variant1, setVariant1] = useState('contained')
    const [color, setColor] = useState('primary')
    const [color1, setColor1] = useState('success')

    const list = useRequest( `${BASE_URL}/pokemon?limit=20&offset=0`,[])

    
    const states = {pokedex, listPoke}
    const sets = {setPokedex, setListPoke}
    const buttons = { variant, setVariant, variant1, setVariant1, color, setColor, color1, setColor1}

    return <GlobalStateContext.Provider value={{ states, sets, list, buttons}}>
        {props.children}
    </GlobalStateContext.Provider>
}