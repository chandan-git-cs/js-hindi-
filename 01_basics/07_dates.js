let myDate = new Date();
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());

console.log(typeof myDate);
let myCreatedDate = new Date(2025, 11, 5);
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getTime());
{
    newDate.toLocaleString('default', {
        weekday: "long"
    });
    console.log(`weekDay :  ${newDate} `);
}
