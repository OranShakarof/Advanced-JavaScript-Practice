
document.write("Start" + "<br>");
setTimeout( () => {
    const time = new Date;
   document.write(time.toLocaleTimeString());
},3000);
document.write("End" + "<br>");