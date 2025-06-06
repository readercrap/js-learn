const coding = ["js", "ruby","java", "python","cpp"]

const values = coding.forEach( item => { // for each never returns values evn if you use return .
    // console.log(item);
    return item 
});
/*
Note :  Map    :: map is sused to perform operatio on values,
        Filter :: filter is used to apply the some condtion and then filter valeus which are passing or coming true for that condition
        Reduce : It reduces the whole array/collectin to single item as per operation performed inside reduce function.
*/
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num > 4 )
// console.log(newNums)

//===========================
const books = [
{title:"Book One"   , genre: "Fiction", publish: 1981, edition:2004},
{title:"Book Two"   , genre: "Non-Fiction", publish: 1992, edition:2008},
{title:"Book Three" , genre: "History", publish: 1999, edition:2007},
{title:"Book Four"  , genre: "Non-Fiction", publish: 1989, edition:2010},
{title:"Book Five"  , genre: "Science", publish: 2009, edition:2014},
{title:"Book Six"   , genre: "Fiction", publish: 1987, edition:2010},
{title:"Book Seven" , genre: "History", publish: 1986, edition:1996},
{title:"Book Eight" , genre: "Science", publish: 2011, edition:2016},
{title:"Book Nine"  , genre: "Non-Fiction", publish: 1981, edition:1989},
];
let  userBooks = books.filter( (bk) => bk.genre == "History" )
userBooks = books.filter( (bk) => bk.publish >= 2000 )

console.log(userBooks)
