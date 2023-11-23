async function get7Boom() {
  const minBox = document.getElementById("minBox");
  const maxBox = document.getElementById("maxBox");

  const min = +minBox.value;
  const max = +maxBox.value;

  try{
    const n7Boom = await generate7BoomAfterDelayAsync(min,max);
    alert(n7Boom);
  }
  catch (err) {
    alert(err.message);
  }
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