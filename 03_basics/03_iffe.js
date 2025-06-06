// Immediately Invoked function Expressions :: (IIFE)
// scenario or context where it comes :
//      - suppose you want to invoke something before database get loaded or called.
//      - want to protect function from global variable or scope pullution.

function chai() {
    console.log("chai: DB Connected.");
}

// chai()

// in above we decalred and called it immediatly. but we want that it whould not be polluted/affected by global score and varaibles.
// for that we write iife like below 
//below is named iife :: 
(function chai2() {
    console.log("chai2: DB Connected.");
})(); // here we calling the function immediately
// explicitly semicolon is put to stop the code when it is executed using IIFE technique


// now lets write using arrow function ::
// this is unnamed iife.
(() => {
    console.log("Arrow function IIFE example.")
})() ;
//let see how to pass data : anser => pass as you do in normal functions.

((username) => {
    console.log(`${username} : DB Connected`);
})("Omprakash") ; 
// how to execute two iife : put semicolon at end of iife functions.