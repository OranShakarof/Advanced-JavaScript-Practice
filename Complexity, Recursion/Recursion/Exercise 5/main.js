displayFactorial1ToN();

function displayFactorial1ToN() {
  const factorial = getFactorial1ToN(4);
  document.write("The Factorial :" + factorial);
}

function getFactorial1ToN(n) {
  if (n <= 1) return 1;
  return n * getFactorial1ToN(n - 1);
}
