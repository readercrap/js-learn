
const user = {
    username : "Hitesh",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}  ,welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


function chai() {
    let username = "hitesh"
    console.log("chai :: ", this.username); // this works with object not with function. as here no object so that output coming as "undefined"
}
chai()

const chai2 = function(){
    let username = "hitesh"
    console.log("chai2 :: ", this.username);
}

chai2()

const chai3 = ()=> {
    let username = "hitesh"
    console.log("chai3 :: ", this); // here we will not get any this object unlike function  decalred above where we use to get node's object as this. here in 
    // arrow function declaraiton we get this = {} , empty object.
}
chai3()

const addtwo = (num1,num2)=>{ // if you use curly braces then you have to write return compulsorly
    return num1+num2;
}

console.log("addTwo :: ", addtwo(1,2))

// implicti return writing way using arrow styl of function declaration.

const addtwo2 = (num1,num2)=> num1+num2;
console.log("addTwo2 :: ", addtwo2(3,4))

const addtwo3 = (num1,num2)=> (num1+num2) // here return is implicit. this style is widely and wildly used in react
console.log("addTwo3 :: ", addtwo3(30,40))


// how to return object
// const obj1 = (num1,num2)=> {username:"default"} // returns undefined as we want to return object , but code is taking "{}" as function scope. so wrap them inside bracket as below 
const obj1 = (num1,num2)=> ({username:"default"})
console.log("obj1 :: ", obj1(1,2))




