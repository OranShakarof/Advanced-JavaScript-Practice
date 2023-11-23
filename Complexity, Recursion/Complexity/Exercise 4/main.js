
display();

function display() {
   const arr = [ "Amit", "Eli" ,"Hangel" , "Kopter" ,"Oran"];
   const string = prompt("Enter String: ");
   const index = getStringBinary(arr,string);
   if(index >= 0) {
    document.write("The string is found at index: " + index);
   }
   else{
    document.write("String Wo'nt found");
   }

}
// O(log n)
function getStringBinary(arr, string) {
    let start = 0;
    let end = arr.length - 1;
  
    do {
      let middle = Math.floor((end + start) / 2);
      const midValue = arr[middle].toUpperCase();
      const upperCaseString = string.toUpperCase();
  
      if (upperCaseString === midValue) {
        return middle;
      } else if (upperCaseString < midValue) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } while (start <= end);
  
    return -1;
  }
  