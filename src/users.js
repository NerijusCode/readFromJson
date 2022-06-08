'use strict'

// const usersData = '../data/users.json';

export const getUsers = async () => {
    return await fetch(usersData).then((response) => {
       if(!response.ok) {
           throw new Error('įvyko klaida: ' + response.status)
       }
       return response.json();
         });
};
export const addUser = async (data) =>
  await fetch(usersData, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Įvyko klaida: ' + response.status);
    }
    return response.json();
  });
  
// function appendFoot() {
//     const totalUsers = users.length;
//     const tableFooterElement = document.querySelector('tfoot');
//     const footElement = `<tr>
//     <td>Total:</td>
//     <td>${totalUsers}</td>
//     </tr>`
//     tableFooterElement.inner = footElement;

// }