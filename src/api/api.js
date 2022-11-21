// import { getCookie } from '../services/cookies';

export const url = 'http://localhost:3000/';

export async function get() {
  return fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // //   Authorization: `Bearer ${getCookie('restauration')}`,
    // },
  });
}

// export async function remove(authenURL) {
//   await fetch(url + authenURL, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${getCookie('restauration')}`,
//     },
//   });
// }

// export async function post(authenURL, body) {
//   const res = await fetch(url + authenURL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${getCookie('restauration')}`,
//     },
//     body: JSON.stringify(body),
//   });
//   return res;
// }

// export async function put(authenURL, body) {
//   const res = await fetch(url + authenURL, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${getCookie('restauration')}`,
//     },
//     body: JSON.stringify(body),
//   });
//   return res;
// }