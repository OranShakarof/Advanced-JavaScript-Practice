
document.write("Start" + "<br>");
setTimeout( () => {
    document.write(Math.floor(Math.random() * 100)+ "<br>");
},3000);
setTimeout( () => {
    document.write(Math.floor(Math.random() * 100)+ "<br>");
},5000);
setTimeout( () => {
    document.write(Math.floor(Math.random() * 100) + "<br>");
},7000);
document.write("End" + "<br>");