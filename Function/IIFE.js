
// IIFS : immediatly invoked function expression 

(function myfun()
{
    console.log("Database connected ")
})();



//OR

( (name)=>{
    console.log('Database connected 2 ',{name});
    
})('Rohit')