
async function getPizzaFromServer() {
    try{
    const pizza = await getPizzaFromServerAfterDelayAsync();
    alert(`Pizza: \nDiameter: ${pizza.diameter} \n Price: ${pizza.price} \n Toppings: ${pizza.toppings}`);
    }
    catch (err) {
        alert(err.message);
    }
    
}

function getPizzaFromServerAfterDelayAsync() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const n = Math.floor(Math.random() * 100) + 1;
        if (n % 2 !== 0)
          reject(new Error("Could'nt get the pizza Object from the server"));
        const pizza = {
            diameter : Math.floor(Math.random() * 40 ) +10,
            price : Math.floor(Math.random() * 60 ) +20,
            toppings : Math.floor(Math.random() * 4 ),
        };
        resolve(pizza);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
