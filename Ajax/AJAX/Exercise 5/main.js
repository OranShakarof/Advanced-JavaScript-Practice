"use strict";

( () => {

    const displayButton = document.getElementById("displayButton");
    displayButton.addEventListener("click", async () => {
        const photos = await getJSON("https://jsonplaceholder.typicode.com/photos?_limit=100");
        displayPhotos(photos);
    });

    function displayPhotos (photos){
        const tableBody = document.getElementById("tableBody");
        let html= "";
        for(const photo of photos){
            html +=`
                <tr>
                    <td>${photo.albumId}</td>
                    <td>${photo.id}</td>
                    <td>${photo.title} </td>
                    <td><img src="${photo.thumbnailUrl}"</td>
                </tr>
            `
        }
        tableBody.innerHTML = html;
    }

    async function getJSON(url){
        const response = await fetch(url);
        const data = await response.json(); 
        return data
    }   
}) ();