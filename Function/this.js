

// THIS keyword :- this keyword refer to the current context 

const mgobj={
    name: 'Rohit',
    age:'21',
    class:'B-Tech',
    use: function()
    {
        console.log(this.name);
        
    }
}

mgobj.use()
mgobj.name="jadhav"
mgobj.use()