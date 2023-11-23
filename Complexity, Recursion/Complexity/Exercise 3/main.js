
display();

function display() {
   const arr = ["Oran", "Amit", "Hangel", "Eli", "Kopter"];
   const string = prompt("Enter String: ");
   const index = getString(arr,string);
   if(index >= 0) {
    document.write("The in the array in the index: " + index);
   }
   else{
    document.write("String Wo'nt found");
   }

}
// O(n)
function getString(arr,string) {
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === string) return i;
    }
    return -1;
}