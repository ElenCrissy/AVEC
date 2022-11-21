import { get } from "./api"

export async function getAliments() {
    const res = await get('aliments');
    return res.json
}