function get7Boom() {
  const minBox = document.getElementById("minBox");
  const maxBox = document.getElementById("maxBox");

  const min = +minBox.value;
  const max = +maxBox.value;

  generate7BoomAfterDelayAsync(min, max)
    .then((num) => alert("The Num:" + num))
    .catch((err) => alert("Error! " + err.message));
}

function generate7BoomAfterDelayAsync(min, max) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const num = Math.floor(Math.random() * (max - min)) + min;
          if (num % 7 === 0 || num % 10 === 7) {
            resolve(num);
          } 
          else {
            reject(new Error("Number is not 7-boom!"));
          }
        }, 1000);
      } catch (err) {
        reject(err);
      }
    });
  }