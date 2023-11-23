display1ToN(5);

function display1ToN(n) {
    if(n <= 0) return 0;
    display1ToN(n-1);
    document.write(n + " ")
}