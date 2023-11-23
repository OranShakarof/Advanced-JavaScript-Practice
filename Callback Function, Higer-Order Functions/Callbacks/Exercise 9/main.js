
// Normal Function
// function randomPaintColor(){
//     const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
//     const randomColor = Math.floor(Math.random() * 5);
//     document.body.bgColor= colors[randomColor];
// }
// setInterval(randomPaintColor,1000);

// Arrow Function
setInterval( () =>{
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
    const randomColor = Math.floor(Math.random() * 5);
    document.body.bgColor= colors[randomColor];    
},1000);