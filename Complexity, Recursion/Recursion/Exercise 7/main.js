displayArraySum();

function displayArraySum() {
    const arr = [10, 20, 30, 40, 50, 60, 70, 80];
    const sum = getArraySum(arr,0,7);
    document.write("The Arr Sum is: " + sum);
}

function getArraySum(arr,start,end) {
    if(start === end) return arr[start];
    return arr[start] + getArraySum(arr,start+1,end);    
}