let score = "33";
let nan = "33abc";
let score1 = null;


console.log(typeof score);
console.log(typeof (score));

let  valInNumber = Number(score);
console.log(typeof valInNumber);

let valInNumber1 = Number(nan);
console.log(valInNumber1);

console.log(score1);
console.log(typeof (score1));


// "33" => 33
// "33abc" => Nan => Not a number
// true => 1 ; false => 0