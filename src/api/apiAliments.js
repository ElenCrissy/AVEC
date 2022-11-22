import { get } from "./api"

export async function getAliments() {
    const res = await get('aliments');
    console.log(res.json)
    return res.json
}