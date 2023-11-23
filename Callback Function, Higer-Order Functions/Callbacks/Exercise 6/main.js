
function nice(paintCallback){
    paintCallback("Green");
}

// Normal Function
// nice(function paint(color){
//     const bodyColor = document.getElementById("bodyColor");
//     bodyColor.style.backgroundColor = color;
// });

// Arrow Function
nice( color => {
    const bodyColor = document.getElementById("bodyColor");
    bodyColor.style.backgroundColor = color;

});

