displayNTo1DivedBy7(21)

function displayNTo1DivedBy7(n) {
    if(n === 0) return;
    if(n % 7 === 0) document.write(n + " ");
    displayNTo1DivedBy7(n - 1);
}