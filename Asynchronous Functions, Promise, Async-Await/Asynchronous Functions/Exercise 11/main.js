
function getEvenRandomNumberAfterDelay (callback,first,last) {
    setTimeout (() => {
        let num = Math.floor(Math.random() * (last-first) + first);
        if(num % 2 !== 0) num += 1;
        callback(num);
    },5000);
}
function displayNumber() {
    getEvenRandomNumberAfterDelay( num => alert(num), 1,100);
}