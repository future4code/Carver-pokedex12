import React, { useEffect, useState, useContext } from "react";
import BASE_URL from "../contants/urls";
import {GlobalStateContext} from "./GlobalContext";
import axios from "axios";
import { Router } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [listPoke, setListPoke] = useState([])

    const list = useRequest( `${BASE_URL}/pokemon?limit=20&offset=0`,[])

    
    const states = {pokedex, listPoke}
    const sets = {setPokedex, setListPoke}

    return <GlobalStateContext.Provider value={{ states, sets, list}}>
        {props.children}
    </GlobalStateContext.Provider>
}