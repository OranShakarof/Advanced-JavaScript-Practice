"use strict";

(() => {
  displayOnLoad();

  async function displayOnLoad() {
    const usersObject = await getJSON("https://reqres.in/api/users");
    const users = usersObject.data;
    displayUsers(users);
  }

  function displayUsers(users) {
    const tableBody = document.getElementById("tableBody");
    let html = "";
    for (const user of users) {
      html += `
            <tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}"></td>
            </tr>
        `;
    }
    tableBody.innerHTML = html;
  }

  async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
})();
