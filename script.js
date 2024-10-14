let carlist = ("Mercedes", "Bmw","Audi","Toyota","Acura");

let first = carlist[0];
let middle = carlist[2];
let last = carlist[carlist.lenght -1];
console.log(first,middle,last);

console.log(carlist.length);
console.log(carlist);

carlist.pop();
console.log(carlist); // Output: ["Mercedes", "Bmw","Audi","Toyota"]

mycars.push("Toyota");
console.log(carlist); // Output: ["Mercedes", "Bmw", "Audi","Toyota","Acura"]

let Bestcar = carlist.slice(1, 3);
console.log(carlists); // Output: ["Mercedes", "Audi"]

let numbers = [0, 2, 1];
let roots = numbers.map(Math.sqrt);
console.log(roots); // Output: [1, 2, 3]

let [firstcar,secondcar,...restcarlist]= carlist;
console.log(firstcar);
console.log(secondcar);
console.log(rest);
console.log(carlist);

