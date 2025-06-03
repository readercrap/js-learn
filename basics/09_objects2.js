// const tinderUser = new Object() // singeton way of declaration 
const tinderUser = {} // literal declaration way 

tinderUser.id = "123abc" 
tinderUser.name = "virat"
tinderUser.isloggedin = false

// console.log(tinderUser);

const regularUser = {
    email : "somename@gmail.com" , 
    fullname : {
        firstname : "Omprakash",
        lastname : "Parganiha",
    }
}

// console.log(regularUser);
const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"a" , 4: "b"}
const obj5 = {5:"a" , 6: "b"}


const obj3 = {obj1, obj2} // not a correct way 
console.log("{obj1,obj2} way [which is not correct :: ", obj3)

const obj4 = Object.assign({},obj1,obj2,obj5)//Object.assign(target,source) and returns the object 
// so in about if first parameter we take as obj1, then it will also be changed as it is occupying target data location and obj4 will store thre returned object.
// So it is advisable to give empty object as first param so that no source object is changed mistakenly.
console.log("Object.assign way :: ", obj4)

// or use spread way 
const obj6 = {...obj1,...obj2,...obj5}
console.log("Spread way :: ", obj6)