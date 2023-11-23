
function getRandomNumberAfterDelay (callback,first,last) {
    setTimeout (() => {
        let num = Math.floor(Math.random() * (last-first) + first);
        callback(num);
    },5000);
}
function displayNumber() {
    getRandomNumberAfterDelay( num => alert(num), 1,3);
}