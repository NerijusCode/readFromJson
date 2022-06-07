'use strict';

// const usersData = '../data/users.json';
const usersData = 'https://furtive-resisted-toque.glitch.me/users';

export const getUsers = async () =>
  await fetch(usersData).then((response) => {
    if (!response.ok) {
      throw new Error('Įvyko klaida: ' + response.status);
    }
    return response.json();
  });

export const addUser = async (data) =>
  await fetch(usersData, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Įvyko klaida: ' + response.status);
    }
    return response.json();
  });

// export const getUsers = async () => {
//     return await fetch(usersData).then((response) => {
//         if(!response.ok) {
//             throw new Error('Įvyko klaida: ' + response.status)
//         }
//         return response.json();
//     });
//   };
