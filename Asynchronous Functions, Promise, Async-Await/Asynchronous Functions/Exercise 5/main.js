
function getRandomNumber(){
    const randomNumDiv = document.getElementById("randomNumDiv");
   
    setInterval( () => {
        const limitNumBox = document.getElementById("limitNumBox");
        const limit = +limitNumBox.value;    
        const num = Math.floor(Math.random () * limit);
       randomNumDiv.innerText = num;
    },1000);
}


