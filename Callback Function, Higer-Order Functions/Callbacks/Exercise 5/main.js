
function cool(paintCallback){
    paintCallback();
}

// Normal Function
// cool(function paintRandomColor (){
//     const bodyColor = document.getElementById("bodyColor");
//     const colors = ["red", "blue" ,"purple", "yellow" , "green"];
//     const randomColor = Math.floor(Math.random() * 5);
//     bodyColor.style.backgroundColor = colors[randomColor];
// });

// Arrow Function
cool( () => {
    const bodyColor = document.getElementById("bodyColor");
    const colors = ["red", "blue" ,"purple", "yellow" , "green"];
    const randomColor = Math.floor(Math.random() * 5);
    bodyColor.style.backgroundColor = colors[randomColor];

}); 

