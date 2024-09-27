//Declaration 
const UniqueId =Symbol()

const mydetails={
    name:"Rohit",
 [UniqueId]:"DSE130869",  //symbole variable decleration 
    age:"21",
    Div:"C", 
    Class:"B-Tech"
}

//how to access

console.log(mydetails[UniqueId])

// how to add new property in object 

mydetails.openelective_subject ="Machine learning"

console.log(mydetails.openelective_subject);

//suppose we don't want to add of change the proprty so we use frezz

// Object.freeze(mydetails)


//how to add function in object

mydetails.greeting=function()
{
    console.log("Hello Rohit");
    
}

// console.log(mydetails.greeting());

// how to access value of function 

mydetails.greetingtwo=function()
{
   console.log('my age is , ${this.age}');
       
}
console.log(mydetails.greetingtwo());
