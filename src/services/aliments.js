import {useEffect, useState} from "react";

const useAliments = (platId) => {
    const [aliments, setAliments] = useState([])

    useEffect( () => {
        async function fetchData() {
            const url = `http://localhost:3000/aliments`
            const resp = await fetch(url)
            const data = await resp.json()
            setAliments(data)
        }
        fetchData().catch(err => console.log(err))

    }, [platId])

    return aliments
}

export default useAliments