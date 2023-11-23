
function getRandomNumberAfterDelay (callback,limit) {
    setTimeout (() => {
        const num = Math.floor(Math.random() * limit);
        callback(num);
    },5000);
}
function displayNumber() {
    getRandomNumberAfterDelay( num => alert(num), 100);
}