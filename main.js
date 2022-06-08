"use strict";
 
import { getUsers } from "./src/users.js";
import { getCountry } from "./src/countries.js";
 
const tableBodyElement = document.querySelector("tbody");
let users = [];
 
initDocument();
 
function initDocument() {
  getUsers().then((data) => {
    users = data;
    console.log(data);
    arrangeData();
    appendFoot();
  });
}
 
function arrangeData() {
  let usersElements = "";
  users.forEach((user) => {
    getCountry(user.country)
      .then((country) => {
        console.log(user, country);
        usersElements += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td><img src="${country[0].flags.png}" alt="${
          country[0].flag
        }" width="30"> ${user.country}, ${country[0].capital}</td>
        <td>${new Date(user.added).toLocaleDateString()}</td>
    </tr>
`;
      })
      .then(() => (tableBodyElement.innerHTML = usersElements));
  });
}
function appendFoot() {
    const totalUsers = users.length;
    const tableFooterElement = document.querySelector("tfoot");
    const footElement = `<tr>
    <td>Total:</td>
    <td>${totalUsers}</td>
  </tr>`
  tableFooterElement.innerHTML = footElement;
}
