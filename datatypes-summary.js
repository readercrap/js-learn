/*
two types of data officially:
    - premitive
    - non- premitive also called reference type.

    difference : how data is stored in memory, according to that categorization of datatype is done.
*/

// Premitive Data type: 7 categories
// it is called by value where copy of data is shared 
// String , Number, Boolean , null, undefined (space is allocated but type and value is not defined), Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail ;  // it is undefined. you can also write like = undefined explicitly.
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // result is false , so they are not same
const bigNumber1 = BigInt(12121212121212121212121212121212121n)
const bigNumber2 = 12121212121212121212121212121212121n
console.log(bigNumber1);
console.log(bigNumber2);



//Note : master is objects and events of browser, then you can master JS.
// reference Type : Non-premitive data type:
// Array , Objects, Functions 

const heroes = ["sahktiman","naagraj","doga"] ; 
let myObj = {
    name : "Om",
    age: 22 , 
}

// you can treat function as a varaible in JS.

const myFunction = function (){
    console.log("HiThere")
}

// how to find the data type of any varaible : typeof ( read ecma documentation of typeof to understand how 
// it works on datatypes when used typeof on it.)
// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(typeof myFunction); // gives object function.



