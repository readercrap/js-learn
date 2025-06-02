const accountId = 144553
let accountEmail = "omprakash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState ; 

// accountId = 2 // can not change constant , it will throw error.

accountEmail = "hc@hc.com";
accountPassword = "21212121"
accountCity = "Bengaluru" ;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Notes :: 
- now use only let and const.
- forget using "var" because of issue in block scope and functional scope.
- Without using variable type you can reserve memory for varaible example above is : accountCity
*/