
function getRandomNumberAfterDelay (callback) {
    setTimeout (() => {
        const num = Math.floor(Math.random() * 100);
        callback(num);
    },5000);
}
function displayNumber() {
    getRandomNumberAfterDelay( num => alert(num));
}