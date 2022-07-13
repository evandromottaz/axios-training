import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { GET_DOGS_API } from "../apis/dogs";

export const GlobalContext = createContext();

export function GlobalProducts({ children }) {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        (async() => {
            const { data } = await axios.get(GET_DOGS_API)
            setProduct(data)
        }
        )()
    },[])

    if(!product) return;

    return (
        <GlobalContext.Provider value={product}>
            {children}
        </GlobalContext.Provider>
    )
}