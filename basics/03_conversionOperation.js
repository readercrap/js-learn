let score = false
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber  = Number(score)

// console.log(typeof(valueInNumber));
// console.log(valueInNumber); // gives NaN : Not a Number

/* == Notes ==|
Number(score) : 
"33" => 33
"33abc" => NaN but type is still NaN
true => 1 false => 0
*/

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(booleanIsLoggedIn))
// console.log(booleanIsLoggedIn)

//======================= Operations ===================

let value = 3
let negValue = -value 
// console.log(negValue)


let str1 = "hello" , str2 = "Om"
console.log(str1+str2)

console.log("1" + 2)
console.log(1 + "2")

console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

