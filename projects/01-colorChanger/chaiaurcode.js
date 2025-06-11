const buttons = document.querySelectorAll(".button") ; 
const body = document.querySelector("body");
// console.log(buttons)
// console.log(body)

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
        // console.log(e) // details of event 
        // console.log(e.target) //details of target from where event generated
        body.style.backgroundColor = e.target.id ; 
        // if (e.target.id === "grey"){
        //     body.style.backgroundColor = "grey" ; 
        //     console.log("background color changed...")
        // }
    })
})