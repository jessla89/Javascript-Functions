let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };


  let is_shop_open = true;
  
  let order = (time, work) =>{
    return new Promise( (resolve, reject)=>{
      if(is_shop_open){
        
        setTimeout( ()=>{
           resolve( work() )
        }, time)
       
      }
      else{
        reject(console.log("our shop is closed"))
      }
      
    })
  }
  
  order(2000, () => {console.log(`${stocks.fruits[0]}  was selected`);})
  
  .then(()=>{
    return order(0000, ()=>{console.log("production has started");})
  })
  
  .then(()=>{
    return order(2000, ()=>{console.log("the fruit was chopped");})
  })
  
  .then(()=>{
    return order(1000, ()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);})
  })
  
  .then(() =>{
    return order(1000, ()=>{
      console.log("machine was started");
    })
  })
  
  .then(() =>{
    return order(2000, ()=>{
      console.log(`ice cream was placed on a ${stocks.holder[0]}`);
    })
  })
  
  .then(() =>{
    return order(3000, ()=>{
      console.log(`${stocks.toppings[0]} was added as a topping`);
    })
  })
  
  .then(() =>{
    return order(2000, ()=>{
      console.log("ice cream was served :) ")
    })
  })

  .catch(() =>{
    console.log("customer has left");
  })

  .finally(()=>{
    console.log("our day ended, shop is closed :( ");
  });