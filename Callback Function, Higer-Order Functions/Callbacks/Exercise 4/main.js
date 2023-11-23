
function amazing(callback){
    const num = callback(42, 128, 37, 81, 66);
    document.write("Num: " +num);
}
// // Normal Function
// amazing(function displayRandomNumber(num1,num2,num3,num4,num5) {
//     const numbers = [num1, num2, num3, num4, num5];
//     const randomNum = Math.floor(Math.random() * 5) ;
//     return numbers[randomNum];    
//  } );

// Arrow Function
amazing ((num1,num2,num3,num4,num5) => {
    const numbers = [num1, num2, num3, num4, num5];
    const randomNum = Math.floor(Math.random() * 5) ;
    return numbers[randomNum];
})