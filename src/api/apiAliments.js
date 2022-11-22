import { get } from "./api"

export async function getAliments() {
    const res = await get('aliments');
    console.log(await res.json.bind())
    return res.json
}