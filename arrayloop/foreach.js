const coding =['js','py','c++','c']

coding.forEach(function (a){
    console.log(a);
    
})

coding.forEach((a,inddex,array)=>{
   console.log(a,inddex,array);
   
})

const myobj=[
      {
        id:"Rohit"
      }
      ,
      {
        id:"Rohit1"

      },
      {
        id:"Rohit2"

      },
        

    ]

    myobj.forEach((a,index)=>{
        console.log(a.id);
        
    })