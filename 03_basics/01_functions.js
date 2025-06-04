

function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();
// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2) ; 
// }

function addTwoNumbers(number1,number2) {
    // let result = number1 + number2 ; 
    // return result;
    return number1 + number2 ;
}
const result = addTwoNumbers(10,5)
// console.log("Result ::" , result);

function loginUserMessage(username) {
    // if (username == undefined){
    if (!username){
        console.log("Please enter a username.")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Om"))
console.log(loginUserMessage())