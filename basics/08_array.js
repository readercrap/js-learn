// Notes :
// Element of array can be of different types also in JS.
let arr = [1,2,3,"A", "alpha", 12.35]

// console.log(arr);

// Objects

// objects can be decalred as literal or as constructor
// singleton : when make through constructor then only one object is made
// Object.create
// from literal decalration no singleton object is made
// objet literals :
const mysym = Symbol("key1")
const jsuser = {
    name: "Om" , // here name is treatd as string internally by engine.
    age : 18, 
    // mysym : "mykey1",
    [mysym] : "mykey1" , // correct way of using symbol as a key .
    location : "Jaipur",
    email: "omprakash@google.com",
    isLoggedIn : false, 
    lastLoginDays: ["monday","saturday"],
}
// console.log((jsuser.email));

// another way of accessing the element of object
// console.log(jsuser["email"]); // we need to key name in string format, else it will throw error.
// onsole.log(jsuser["mysym"]);
// console.log(typeof jsuser["mysym"]);

// console.log(jsuser[mysym]);
// console.log(typeof jsuser[mysym]); // so rather then symbol it is coming as string.

jsuser.email = "omprakash@chatgpt.com"
// console.log(jsuser["email"]);
// lets freeze the object 
// Object.freeze(jsuser)
jsuser.email = "omprakash@microsoft.com"
// console.log(jsuser); // email is not changed as we applied freeze. 


jsuser.greetings = function(){
    console.log("Hello jsuser");
}

jsuser.greetings2 = function(){
    console.log(`Hello jsuser ${this.name}`);
}

console.log(jsuser.greetings()); // gives function reference but function is not executed.
console.log(jsuser.greetings2());



