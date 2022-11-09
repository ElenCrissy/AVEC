import {useEffect, useState} from "react";

// Exemple de params
// /**
//  * Returns data about daily activities bar chart
//  * @param { Number } userId
//  * @return { Array.<{calories: Number, day: String, kilogram: Number}> } activity
//  */

const usePlats = () => {
    const [plats, setPlats] = useState([])

    useEffect( () => {
        async function fetchData() {
            const url = `http://localhost:3000/plats`
            const resp = await fetch(url)
            const data = await resp.json()
            setPlats(data)
        }
        fetchData().catch(err => console.log(err))

    }, [])

    return plats
}

export default usePlats