// Primitive 

// 7 Types : String , Number , Boolean , Null , Undefine , Symbal , Bigint
let name = "abc"; //String
let age = 20; // Number
let cgpa  = 7.5; // Number
let isPass = false; // Boolean
let marks = null; // Null
let email; // undefine

let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId);

// Bigint
let bigNumber = 123456789134562222222222222n;
console.log(typeof bigNumber);

// JavaScript is a => Dynamic typing language 

// Reference (Non primitive)

// Array , Objects , Functions

// Array 
const heros  =  ["shaktiman" , "naagraJ" , "doga"];

//Objects

let myJobs = {
    MyName: "abc",
    age: 20,
    
}

// function

const myFunction =  function() {
    console.log("Hello world");
}
myFunction();

console.log(typeof myFunction);
console.log(typeof myJobs);
console.log(typeof heros);
