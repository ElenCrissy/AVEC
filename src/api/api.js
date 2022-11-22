
export const url = 'http://localhost:3000/';

export async function get(string) {
  return await fetch(url + string);
}