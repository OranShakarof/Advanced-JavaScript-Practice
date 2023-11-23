displayNTo1(5)

function displayNTo1(n) {
    if(n === 0) return;
    document.write(n + " ");
    displayNTo1(n - 1);
}