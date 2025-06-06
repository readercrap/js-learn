const array1 = [1,2,3,4] ; 
const initialValue = 0 ;

// console.log("First way :: ")

const sumWithInitial = array1.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue );
console.log(sumWithInitial)

console.log("Second Way ::")

const total = array1.reduce( function(acc,currval) {
    console.log(`acc :: ${acc} and currval: ${currval}`);
    return acc + currval ; 
}, 0 );

console.log(total);

// now using arrow function 
console.log("Third Way ::")

const totalArrow = array1.reduce((acc,currval)=> (acc+currval),0
);

console.log(total);
console.log("========================")
const cart = [
    {
        itemname : "Course 1",
        price : 1000,
    },
    {
        itemname : "Course 2",
        price : 500,
    },
    {
        itemname : "Course 3",
        price : 5000,
    },
    {
        itemname : "Course 4",
        price : 10000,
    },
]

// now lets get total cost in cart 

const totalCartValue = cart.reduce( (acc, currObj) => (acc + currObj.price),0

);

console.log("Total Cart Value ::", totalCartValue);
