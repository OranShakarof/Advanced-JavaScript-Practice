
// Normal Function
// function displayRandomNumber1To100(){
//     const radomNumDiv = document.getElementById("radomNumDiv");
//     const num = Math.floor(Math.random() *100) + 1;
//     radomNumDiv.innerText ="Random Number: " + num;
// }
// setInterval(displayRandomNumber1To100,1000);

// Arrow Function 
setInterval( () => {
    const radomNumDiv = document.getElementById("radomNumDiv");
    const num = Math.floor(Math.random() *100) + 1;
    radomNumDiv.innerText ="Random Number: " + num;
},1000);