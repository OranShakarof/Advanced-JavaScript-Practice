
displaySet();

function displaySet() {
    const numbers = new Set();
    for(let i = 1; i<=1000; i++) {
        const num = Math.floor(Math.random() *21);
        numbers.add(num);
    }
    for(const item of numbers) {
        document.write(item + " | ");
    }
    document.write("<hr>")

    const n = +prompt("Enter Number: ");
    //O(1)
    if(numbers.has(n)){
        document.write(`The number: ${n} Exists in the set`);
    }
    else{
        document.write(`The number: ${n} Isn't Exists in the set`);
    }
}