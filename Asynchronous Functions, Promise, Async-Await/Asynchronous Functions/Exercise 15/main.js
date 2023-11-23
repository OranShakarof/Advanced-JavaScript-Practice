function displayClock () {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    setInterval (() => {
        const color = Math.floor(Math.random() * 5);
        const clockSpan = document.getElementById("clockSpan");
        const time = new Date;
        clockSpan.innerText = time.toLocaleTimeString();
        clockSpan.style.color = colors[color];
    },1000)

}

displayClock();