const numbers = [];
for(let i = 1; i <= 20; i++){
    numbers.push(Math.floor(Math.random() * 100) +1);
}

//Display Array
numbers.forEach( n => document.write(n + " | "));
document.write("<hr>");

//Display First even number
document.write("The First even number:" + numbers.find( n => n % 2 === 0));
document.write("<hr>");

//Display First number higher than 50
document.write("The First number higher than 50: " + numbers.find( n => n > 50 ));
document.write("<hr>");

//Display All Odd numbers
document.write("All Odd numbers: " + numbers.filter( n => n % 2 !== 0 ));
document.write("<hr>");

//Display All numbers higher than 50
document.write("All numbers higher than 50: " + numbers.filter( n => n > 50 ));
document.write("<hr>");

//Display The Index of the first num higher than 50
const index = numbers.findIndex( n => n >50);
document.write("The Index of the first num higher than 50 : " + index);
document.write("<hr>");

//Display Whether a number is even or odd 
let msg="";
numbers.map( n => msg = n % 2 === 0 ? "Even" : "Odd").forEach( n => document.write(n + " | "));
document.write("<hr>");

//Display Min Number 
const min = numbers.reduce((n1,n2) => {return n1 < n2 ? n1 :n2;}
,numbers[0]);
document.write(min);
document.write("<hr>");

//Display max Number 
const max = numbers.reduce((n1,n2) => {return n1 > n2 ? n1 :n2;}
,numbers[0]);
document.write(max);
document.write("<hr>");

