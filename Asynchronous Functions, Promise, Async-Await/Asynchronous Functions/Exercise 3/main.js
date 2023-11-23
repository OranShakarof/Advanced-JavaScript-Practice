
document.write("Start" + "<br>");
setTimeout( () => {
    const time = new Date;
    time.setSeconds(time.getSeconds() - 3);
    document.write(time.toLocaleTimeString());
},3000);
document.write("End" + "<br>");