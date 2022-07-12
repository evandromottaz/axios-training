import axios from "axios";

export async function useFetch(url) {
    let res = null;
    let data = [];
    try {
        res = axios.getUri(url)
        data = res.json()

        if(error) throw new Error(error);
    } catch(e) {
        res = null
        data = null
        console.error(e)
    } 

    return {data}
    
}