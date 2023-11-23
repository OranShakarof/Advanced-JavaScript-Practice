
function nice(callback){
    callback(42);
}
// Normal Function
// nice(function printNum (num) { alert(num);});

// Arrow Function  
nice( num => document.write(num));