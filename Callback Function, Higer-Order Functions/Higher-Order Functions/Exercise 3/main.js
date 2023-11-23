const pizzas = [];
for (let i = 1; i <= 20; i++) {
  const pizza = {
    diameter: Math.floor(Math.random() * 40) + 10,
    slices: Math.floor(Math.random() * 3) + 6,
    toppings: Math.floor(Math.random() * 4),
    price: Math.floor(Math.random() * 100) + 25, 
};
  pizzas.push(pizza);
}
console.log(pizzas);

//Display pizzas
pizzas.forEach((pizza) => document.write(`Diameter: ${pizza.diameter}, Slices: ${pizza.slices}, Toppings: ${pizza.toppings}, Price: ${pizza.price} <br>`));
document.write("<hr>");

//Display First Pizza Without toppings
let p = pizzas.find((pizza) => pizza.toppings === 0);
document.write(`Diameter: ${p.diameter}, Slices: ${p.slices}, Toppings: ${p.toppings}, Price: ${p.price} <br>`);
document.write("<hr>");

//Display First point that price is lower than 30
p = pizzas.find((pizza) => pizza.price < 30);
document.write(`Diameter: ${p.diameter}, Slices: ${p.slices}, Toppings: ${p.toppings}, Price: ${p.price} <br>`);
document.write("<hr>");

//Display All pizzas that diameter is lower than 20
pizzas
  .filter((pizza) => pizza.diameter <= 20)
  .forEach((pizza) => document.write(`Diameter: ${pizza.diameter}, Slices: ${pizza.slices}, Toppings: ${pizza.toppings}, Price: ${pizza.price} <br>`));
document.write("<hr>");

//Display All pizzas that price is higher than 80
pizzas
  .filter((pizza) => pizza.price > 80)
  .forEach((pizza) => document.write(`Diameter: ${pizza.diameter}, Slices: ${pizza.slices}, Toppings: ${pizza.toppings}, Price: ${pizza.price} <br>`));
document.write("<hr>");

//Display All pizzas that without toppings
pizzas
  .filter((pizza) => pizza.toppings === 0)
  .forEach((pizza) => document.write(`Diameter: ${pizza.diameter}, Slices: ${pizza.slices}, Toppings: ${pizza.toppings}, Price: ${pizza.price} <br>`));
document.write("<hr>");

//Display Index of the first pizza that have 6 slices
const index = pizzas.findIndex((pizza) => pizza.slices === 6);
document.write(index);
document.write("<hr>");

//Display the pizzas radius 
let radius = 0;
pizzas
  .map(
    (pizza) => radius = pizza.diameter / 2)
  .forEach((pizza) => document.write(pizza + " | "));
document.write("<hr>");

//Display modified prices
const modifiedPrices = pizzas.map((pizza) => {
    return {
      price: pizza.price,
      vat: pizza.price * 1.18,
    };
  });
  modifiedPrices.forEach((pizza) => document.write(`Original Price: ${pizza.price}, Vat Price: ${pizza.vat.toFixed(2)} <br>`));
document.write("<hr>");

//Sum of all Pizzas
let sum = 0;
pizzas.forEach( pizza => sum+= pizza.price);
document.write("The Sum of all the pizzas: " + sum);
document.write("<hr>");


//Display Maximum price
const max = pizzas.reduce((pizza1, pizza2) => {
  return pizza1.price > pizza2.price ? pizza1 : pizza2;
}, pizzas[0]);
document.write("Max Price: " + max.price);
document.write("<hr>");

const maxP = pizzas.reduce((pizza1, pizza2) => {
    return pizza1.price > pizza2.price ? pizza1 : pizza2;
  }, pizzas[0]);
  document.write(`Diameter: ${max.diameter}, Slices: ${max.slices}, Toppings: ${max.toppings}, Price: ${max.price} <br>`)
  document.write("<hr>");


