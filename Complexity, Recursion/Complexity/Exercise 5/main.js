
displayMatrix();

function displayMatrix() {
    const matrix = [];
    for(let i = 1; i<=10; i++) {
        const arr = [];
        for(let j =1; j<= 10; j++){
            const num = Math.floor(Math.random()*100) +1;
            arr.push(num);
        }
        matrix.push(arr);
    }
    console.log(matrix);
    const avg = getMatrixAverage(matrix);
    document.write("The Matrix Avg is : " + avg);
}
//O(n^2)
function getMatrixAverage(matrix){
    let sum = 0;
    let count = 0;
    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j <matrix[i].length; j++){
            sum += matrix[i][j];
            count++;
        }
    }
    console.log(sum);
    const avg = sum / count;
    return avg;
}