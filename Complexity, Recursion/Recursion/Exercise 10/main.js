displayEven();

function displayEven() {
    const arr = [2, 4, 6, 8, 10];
    if(isEvenArray(arr)) {
        document.write("Array is even");
    }
    else{
        document.write("Array is not even");
    }
}

function isEvenArray(arr){
    if (arr.length === 0) return true;
    if (arr[0] % 2 === 0) {
        return isEvenArray(arr.splice(1));
    } else {
        return false;
    }
}