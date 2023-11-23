

const divParagraphs = document.querySelectorAll("#container > p");
for (const paragraph of divParagraphs) {
  paragraph.addEventListener("click", function () {
    setTimeout( () => {
        const colors = ["red", "blue", "purple", "yellow", "green"];
        const color = Math.floor(Math.random() * 5);
        this.style.backgroundColor = colors[color];
    },1000);
  });
}

