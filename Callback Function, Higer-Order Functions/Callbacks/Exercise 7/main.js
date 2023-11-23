
function amazing(paintCallback){
    const paintedColor = paintCallback("Red","Green","Blue");
    document.write("Painted Color:" +  paintedColor);
};

// // Normal Function 
// function Paint(color1,color2,color3){
//     const colors = [color1, color2, color3];
//     const randomColor = Math.floor(Math.random() * 3 ) ;
//     document.body.bgColor= colors[randomColor];
//     return colors[randomColor];
// };
// amazing(Paint);
 
// Arrow Function 
amazing( (color1,color2,color3) =>{
    const colors = [color1, color2, color3];
    const randomColor = Math.floor(Math.random() * 3 ) ;
    document.body.bgColor= colors[randomColor];
    return colors[randomColor];
})