//primitive  [call by value ]
    //   this type of data type type not refer the memory adderrs this only create a copy of data and 
    //   access it and whatever the changes happed in copy of data not actual data

// example string ,Number,null,symbol,undefined ,Boolean

// eg of symbole
let score =Symbol('1234')

let newscore =Symbol('1234')

console.log(score == newscore)
 // fasle



//non primitive [call by refernce ]

// It access the data using referenes of memory 

// example : array , function , objects

