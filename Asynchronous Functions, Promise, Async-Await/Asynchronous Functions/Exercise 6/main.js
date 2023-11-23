
function paintBackground(){
    const colors = ["green", "red", "blue", "purple", "yellow", "aqua"];
    setInterval(() => {
        const color = Math.floor(Math.random() * 6);
        document.body.style.backgroundColor = colors[color];
    }, 1000);
}

paintBackground();