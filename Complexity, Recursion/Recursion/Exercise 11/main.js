displaySumDigits();

function displaySumDigits() {
    const sumDigit = getSumDigits(1589);
    document.write((sumDigit));
}

function getSumDigits(n){
    if(n <= 0) return 0;
    return Math.floor(n % 10) + getSumDigits(Math.floor(n / 10));
}