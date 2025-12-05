const name = "Chandan";
const repoCount = 50;

console.log(name + repoCount + "Value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Tiwari-chandan-bhai');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('w'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);
const newStringOne  = "    name    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://@codewithtiwari.com";
console.log(url.replace('@' , '_')); 
console.log(url.includes("tiwari")); // true
console.log(url.includes('chandan')); // false
console.log(url.replaceAll('https://@codewithtiwari.com','tiwari'));
console.log(`url replace = $(https://@codewithtiwari.com)`);
console.log(gameName.split('-')) // convert in array in another
