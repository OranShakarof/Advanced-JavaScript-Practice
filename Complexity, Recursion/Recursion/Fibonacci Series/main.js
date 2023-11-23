function displayFibonacciValue() {
  document.write(`Fibonacci value for index ${8} -> ${fibonacciValue(8)}<br>`);
  document.write(
    `Fibonacci value for index ${10} -> ${fibonacciValue(10)}<br>`
  );
  document.write(`Fibonacci value for index ${1} -> ${fibonacciValue(1)}<br>`);
  document.write(`Fibonacci value for index ${2} -> ${fibonacciValue(2)}<br>`);
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...
// 1  2  3  4  5  6  7  8   9   10  11
// 8 --> 13
// 10 --> 34

function fibonacciValue(index) {
    if(index <= 1) return index-1;
    return fibonacciValue(index-1)+fibonacciValue(index-2);
}

//Without Recursion:
// function fibonacciValue(index) {
//     if(index === 1) return 0;
//     if(index === 2) return 1;

//     let value1 = 0; //First Fibonacci value.
//     let value2 = 1; //Second Fibonacci value.
//     let sum;
//     for(let i = 3; i <= index ; i++){
//         sum = value1+value2;
//         value1 = value2;
//         value2 = sum;
//     }
//     return sum;
// }
