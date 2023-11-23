"use strict";

(() => {
  displayUsersOnload();

  async function displayUsersOnload() {
    const users = await getJSON("https://jsonplaceholder.typicode.com/users");
    displayUsersSelect(users);
  }

  const userSelect = document.getElementById("userSelect");
  userSelect.addEventListener("change", async function () {
    const selectUserUrl = this[this.selectedIndex].value;
    const user = await getJSON(
      `https://jsonplaceholder.typicode.com/users/${selectUserUrl}`
    );
    displayUser(user);
  });

  function displayUsersSelect(users) {
    const selectDiv = document.getElementById("userSelect");
    let html = `<option disabled selected> Select User </option>
        `;
    for (const user of users) {
      html += `
            <option value =${user.id}> ${user.name} </option>
            `;
    }
    selectDiv.innerHTML = html;
  }

  function displayUser(user) {
    const ulList = document.getElementById("ulList");
    let html = "";
    html += `
            <li>Name: ${user.name}</li>
            <li>UserName: ${user.username}</li>
            <li>Email: ${user.email}</li>
            <li>Phone: ${user.phone}</li>
            <li>City: ${user.address.city}</li>
            <li>Street ${user.address.street}</li>
            <li>ZipCode ${user.address.zipcode}</li>
            <li>Company Name: ${user.company.name}</li>
            `;
    ulList.innerHTML = html;
  }

  async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
})();
