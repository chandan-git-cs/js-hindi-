const score = 400;
const balance = new Number(100)
console.log(balance);
console.log(score)
console.log(balance.toString().length);
console.log(balance.toFixed(2))

const anotherNumber = 22.8669865;
console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

// ******************* Math ********************
console.log(Math);
console.log(Math.abs(-4)); // convert negative value to positive value
console.log(Math.round(4.3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) // top value 
console.log(Math.floor(4.9)) // lover value

console.log(`minimum value ${Math.min(5,5,4,6,0,1,3)}`);
console.log(`maximum value ${Math.max(10,11,0,8)}`);

console.log(`value of random in math = ${Math.random()}`); // minimum  0 to 1 number

console.log(`value of random in math = ${Math.random()*10}`); // minimum  0 to 1 number
console.log(`value of random in math = ${Math.random()*10 + 1 }`);
console.log(`value of random in math = ${Math.floor(Math.random()*10 + 1) }`);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min) - min)

