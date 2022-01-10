import axios from 'axios'
import { useEffect, useState } from "react"

export const useRequest = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err, 'useRequest error')
            })
    }, [url])
    return data
}

