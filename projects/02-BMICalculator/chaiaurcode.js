const form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value )
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    // console.log(height)
    // console.log(weight)
    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height : ${height}`;
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight : ${weight}`;
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let type_of_body ;
        if (bmi <= 18.6){
            type_of_body = "Under Weight"
        }else if(bmi > 18.6 && bmi <24.9){
            type_of_body = "Normal Weight";
        } else if (bmi >= 24.9){
            type_of_body = "Over Weight";
        }
        results.innerHTML = `<span>${bmi} : ${type_of_body}</span>`
    }
})


// const calculateBtn = document.querySelector("button")
// // console.log(calculateBtn)

// // now lets add a button click event listener :
// calculateBtn.addEventListener("submit", function(event){
//     console.log("calculate button is clicked...");
//     results.innerText = "clicked";
//     console.log(event);
// })

/*

The Body Mass Index (BMI) is calculated by dividing your weight in 
kilograms by your height in meters squared. In the metric system, 
the formula is: BMI = weight (kg) / (height (m))^2. Alternatively, 
in the imperial system, the formula is: BMI = weight (lb) / (height (inches))^2 * 703. 
Here's a more detailed breakdown:

    Metric System:
        Step 1: Convert your height to meters.
        Step 2: Square your height (height * height).
        Step 3: Divide your weight (in kg) by the squared height.
        Example: If your weight is 70 kg and your height is 1.80 m, then 
        BMI = 70 / (1.80 * 1.80) = 70 / 3.24 = 21.6.
*/        