displayNSmiles(5)

function displayNSmiles(n) {
    if(n === 0) return;
    document.write("😁");
    displayNSmiles(n - 1);
}