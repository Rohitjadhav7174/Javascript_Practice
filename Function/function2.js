
// rest oparators

// suppose we don't know the how many parameters are thair so we use rest and spread opeators for eg shopping card 

function additionofcard(...num) {
    let add1 = 0;
    for (let i = 0; i < num.length; i++) {
      add1 += num[i];
    }
    return add1;
  }
  
  const add = additionofcard(80, 80, 80,80);
  console.log(add);
  
    

  //how to pass object in function

  const myobj={
    name:'ROHIT',
    mobail:'7709597174'
  }

  function handleobj(anyobj)
  {
     console.log(anyobj.name); 
  }
  handleobj(myobj)


  //how to pass array in fumction

  const myarr=[10,20,30,40]

  function returnarr(myarr1)
  {
    return myarr[1]

  }

  console.log(returnarr(myarr));
  
  