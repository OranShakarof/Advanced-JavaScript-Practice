displayCountDigits();

function displayCountDigits() {
    const countDigit = getCountDigits(589);
    document.write((countDigit));
}

function getCountDigits(n){
    if(n === 0) return 0;
    return 1+ getCountDigits(Math.floor(n / 10));
}