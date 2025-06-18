/*
- we need to fetch the current time
- we need to set the fetched time in clock
- we need to execute the script in fix interval of time so that it should keep updating in each second
*/


// get element where you want to set the clcok value 
const clock = document.getElementById('clock')
console.log(clock)

setInterval(function(){
    const current_time = new Date();
    // console.log(current_time.toLocaleTimeString());
    clock.innerHTML = current_time.toLocaleTimeString()
},1000) // it is in miliseconds , so 1000 means in each 1 seconds