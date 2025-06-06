const coding = ["js", "ruby","java", "python","cpp"]
coding.forEach(   function (item) { console.log(item)}  )

// lets use arrow function call 
coding.forEach( (value) => {console.log("Arrow:: ", value)})

//using  explicit function in foreach 

function printMe(item) {
    console.log("printMe ::", item);
    
}

coding.forEach(printMe)