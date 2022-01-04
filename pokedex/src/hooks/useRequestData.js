import React, { useEffect, useState } from "react";
import BASE_URL from "../contants/urls";
import axios from "axios";
import { Router } from "react-router-dom";

export const useRequestData = (initial, url) => {
    const [data, setData] = useState(initial)
    const pokeObject = []

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log('n', response.data.results)
                response.data.results.map((item, index) => {
                    axios.get(`${BASE_URL}/pokemon/${item.name}`)
                        .then((res) => {
                            const object = {
                                index: index,
                                name: item.name,
                                front_default: res.data.sprites.front_default
                            }
                            pokeObject.push(object)
                            if (pokeObject.length === response.data.results.length) {
                                setData(pokeObject)
                            }
                        })
                        .catch((err) => {
                            console.log('erro', err.response)
                        })
                    return null
                })

            })
            .catch((err) => {
                console.log('l', err)
            })
    }, [url])
    return data
}
