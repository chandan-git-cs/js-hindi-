const accountId = 85212;
let accountEmail = "chandan@gmail.com";
var accountPassword = "123456";
accountCity = "Mohali";
let accountState;
// accountId = 2;  // Not allowed

accountEmail = "change@gmail.com";
accountPassword = "98765";
accountCity = "Bhabua";

console.log(accountId);

/*Prefer not to use var because of issue in block scope and functional scope */

console.table([accountEmail , accountId , accountPassword , accountCity , accountState]);