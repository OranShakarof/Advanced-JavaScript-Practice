
// //Normal Function
// cool(function displayRandomNumber1To100() {alert(Math.floor(Math.random()*100) + 1); });

// Arrow Function
cool(() => document.write(Math.floor(Math.random()*100) + 1));

function cool(callback){
    callback();
}


