// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num)
// }
// const greetings ="Hello world" ; 
// for (const greet of greetings) {
//     console.log(greet)
// }
 
// maps 
// keep remember order .
// values are unique.

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map)

//lets put loop in map ::

for (const [key,value] of map){
    console.log("key ::", key, ':-', value);
}
console.log("=================")
for (const key in map){
    console.log("key ::", key, ':-', value);
}

const myobj = {
    "game1" : "NFS",
    "game2" : "CS"
}

// for (const key of myobj.key){
//     console.log("key ::", key, ':-', value);

// }