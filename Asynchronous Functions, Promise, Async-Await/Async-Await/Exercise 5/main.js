
async function getArrayFromServer() {
  try{
    const arr = await getArrayFromServerAfterDelayAsync(15);
    alert(arr);
  }
  catch (err){
    alert(err.message);
  }
}


function getArrayFromServerAfterDelayAsync(size) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const n = Math.floor(Math.random() * 100) + 1;
        if (n % 2 !== 0)
          reject(new Error("Could'nt get the array from the server"));
        const numbers = [];
        for (let i = 1; i <= size; i++) {
          numbers.push(Math.floor(Math.random() * 100));
        }
        resolve(numbers);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
