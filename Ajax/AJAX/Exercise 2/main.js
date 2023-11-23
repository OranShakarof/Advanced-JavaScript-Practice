"use strict";

( () => {

    displayUsersOnload();

     async function displayUsersOnload () {
        const users = await getJSON("https://jsonplaceholder.typicode.com/users");
        displayUsers(users);
    }



    function displayUsers (users){
        const tableBody = document.getElementById("tableBody");
        let html = "";
        for(const user of users) {
            html+=`
            <tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address.city}</td>
                <td>${user.address.street}</td>
                <td>${user.address.zipcode}</td>
                <td>${user.company.name}</td>
            </tr>
            `;
        }
        tableBody.innerHTML = html;
    }


    async function getJSON(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

}) ();