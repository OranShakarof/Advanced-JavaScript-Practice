displayArrayMax();

function displayArrayMax() {
    const arr = [10, 20, 30, 40, 50, 60, 70, 80];
    const max = getMax(arr,0,7);
    document.write("The Max num is: " + max);
}

function getMax(arr,start,end) {
    if(start === end) return arr[start];
    return arr[start] > arr[end] ?  getMax(arr,start,end-1) : getMax(arr,start+1,end);    
}