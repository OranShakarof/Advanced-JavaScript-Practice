displayPalindrome();

function displayPalindrome() {
  const string = "abcba";
  if(isPalindrome(string)){
    alert("It's a Palindrome String");
  }
  else{
    alert("It's not a palindrome");
  }
}

function isPalindrome(string) {
    if(string.length === 1) return true;
    if(string[0] !== string[string.length-1]) return false;
    return isPalindrome(string.slice(1, -1));
}