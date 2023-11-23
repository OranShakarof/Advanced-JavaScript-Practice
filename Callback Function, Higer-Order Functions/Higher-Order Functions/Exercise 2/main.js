const points = [];
for(let i = 1; i <= 20; i++){
    const point = {x : Math.floor(Math.random() * 100), y : Math.floor(Math.random()* 100)};
    points.push(point);
}
console.log(points);

//Display X and Y
points.forEach((point) => document.write(`X: ${point.x} Y: ${point.y} <br>`));
document.write("<hr>");

//Display First point that x higher than y
let p = points.find( point => point.x > point.y);
document.write("First point that x higher than y: " + p.x + "," + p.y);
document.write("<hr>");

//Display First point that y higher than 50
p = points.find( point => point.y > 50 );
document.write("First point that y higher than 50: " + p.x + "," + p.y);
document.write("<hr>");

//Display All points that x is odd
points.filter( point => point.x % 2 !== 0).forEach( point => document.write(`(${point.x},${point.y}) | `));
document.write("<hr>");

//Display All points that y is higher than 50
points.filter( point => point.y  > 50).forEach( point => document.write(`(${point.x},${point.y}) | `));
document.write("<hr>");

//Display Index of the first point that x is higher than 50
const index = points.findIndex( point => point.x > 50)
document.write(index);
document.write("<hr>");

//Display the Distance form the origin
let distance = 0;
points.map( point => distance = Math.sqrt(point.x**2+point.y**2).toFixed(2)).forEach( point => document.write(point + " | "));
document.write("<hr>");

//Display Minimum x 
const min = points.reduce( (point1,point2) =>  {return point1.x < point2.x ? point1 : point2}
,points[0]);
document.write("Min X: " + min.x);
document.write("<hr>");

//Display Minimum x points
const minP = points.reduce( (point1,point2) =>  {return point1.x < point2.x ? point1 : point2}
,points[0]);
document.write("Min x point: " + minP.x + "," +minP.y);
document.write("<hr>");





