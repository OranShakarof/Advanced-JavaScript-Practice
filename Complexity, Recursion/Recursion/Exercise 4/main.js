displaySum1ToN();

function displaySum1ToN() {
    const sum = getSum1ToN(100);
    document.write("The Sum:" + sum);
}

function getSum1ToN(n) {
    if(n <= 0) return 0;
    return n + getSum1ToN(n - 1);
}