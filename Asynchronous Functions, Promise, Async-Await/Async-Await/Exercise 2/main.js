async function getPrimeNumber() {
  const minBox = document.getElementById("minBox");
  const maxBox = document.getElementById("maxBox");

  const min = +minBox.value;
  const max = +maxBox.value;
  try {
    const primeNumber = await generatePrimeNumberAfterDelayAsync(min, max);
    alert(primeNumber);
  } catch (err) {
    alert(err.message);
  }
}

function generatePrimeNumberAfterDelayAsync(min, max) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const num = Math.floor(Math.random() * (max - min)) + min;
        if (num === 1) reject(new Error("The Number isn't Prime Number!"));
        const limit = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= limit; i++) {
          if (num % i === 0) {
            reject(new Error("The Number isn't Prime Number!"));
          }
        }
        resolve(num);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
