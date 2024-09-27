//nested object 

//singleton
// const mypro=new Object();
// mypro.name='Rohit'
// mypro.id='12345'


//object literals
const mypro = {
    fullname:"ROhit",
     userid:{
          first:"ROhit",
          last:"Jadhav",
     mobail_no:{
           phone:"7709597174"
     }
     }
}

console.log(mypro.userid.mobail_no);

//object concatenation

const obj1={name:"rohit",email:"rohitjadhav"}
const obj2={phone:"7709597174"}

// const obj3= Object.assign(obj1,obj2)
    //OR

const obj3 ={...obj1 ,... obj2}

console.log(obj3);


const mypro1=new Object();
mypro1.name="Rohit"
mypro1.id="12345"
console.log(mypro1);

//take object as an arrya so we use
console.log(Object.keys(mypro1));
console.log(Object.values(mypro1));

// DE-Structure the object 

const mypro3={
    name:"ROhit",
    email:"rj@gmail.com",
    phone:"7709597174"
}

const {email} =mypro3
const {name} =mypro3
const {phone} =mypro3

console.log(email);
console.log(name);
console.log(phone);

