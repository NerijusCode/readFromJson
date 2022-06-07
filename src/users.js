'use strict';

const usersData = '../data/users.json';

export const getUsers = async () =>
  await fetch(usersData).then((response) => {
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
