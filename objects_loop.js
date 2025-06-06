const myObject = {
    js: "Javascript",
    cpp : "C++",
    swift : "Swift by apple",
    rb: "Ruby",
}

for (key in myObject){
    console.log(key, "::", myObject[key])
}