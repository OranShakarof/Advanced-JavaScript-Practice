
// Normal Function
// function randomNumberArray(){
//     const arrayDiv = document.getElementById("arrayDiv");
//     const numbers = [];
//     for(let i = 1; i <= 100; i++){
//         const num = Math.floor(Math.random() * 1000) + 1;
//         numbers.push(num);
//     }
    
//     arrayDiv.innerText = numbers;
// }
// setInterval(randomNumberArray,3000);

// Arrow Function 
setInterval( () => {
    const arrayDiv = document.getElementById("arrayDiv");
    const numbers = [];
    for(let i = 1; i <= 100; i++){
        const num = Math.floor(Math.random() * 1000) + 1;
        numbers.push(num);
    }
    arrayDiv.innerText = numbers;
},3000);