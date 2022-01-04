import React, { useEffect, useState, useContext } from "react";
import BASE_URL from "../contants/urls";
import {GlobalStateContext} from "./GlobalContext";
import axios from "axios";
import { Router } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [listPoke, setListPoke] = useState([])

    const list = useRequestData([], `${BASE_URL}/pokemon`)
    
    const states = {pokedex, listPoke}
    const sets = {setPokedex, setListPoke}

    return <GlobalStateContext.Provider value={{ states, sets, list }}>
        {props.children}
    </GlobalStateContext.Provider>
}

// export const useGlobal = () => {
//     return useContext(GlobalStateContext)
//   }
  
//   export const useGlobalStates = () => {
//     const {states} = useGlobal()
//     return states
//   }
  
//   export const useGlobalSets = () => {
//     const {sets} = useGlobal()
//     return sets
//   }
  