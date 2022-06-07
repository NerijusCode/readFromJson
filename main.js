'use strict';

import { getUsers } from './src/users.js';

const tableBodyElement = document.querySelector('tbody');
let users = [];

initDocument();

function initDocument() {
  getUsers().then((data) => {
      users = data;
      arrangeData();  
  });
}

function arrangeData() {
  let usersElements = '';
  users.forEach((user) => {
    usersElements += `<tr>
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.surname}</td>
                  <td>${user.city}</td>
                  <td>${(new Date(user.added)).toLocaleDateString()}</td>
              </tr>  
          `;
  });

  tableBodyElement.innerHTML = usersElements;
}
