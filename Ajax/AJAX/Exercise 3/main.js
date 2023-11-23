"use strict";

(() => {
  const idButton = document.getElementById("idButton");
  idButton.addEventListener("click", async () => {
    const idBox = document.getElementById("idBox");
    const url = `https://jsonplaceholder.typicode.com/users/${idBox.value}`;
    console.log(url);
    const user = await getJSON(url);
    displayUsers(user);
  });

  function displayUsers(user) {
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
