let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  
  
  let is_shop_open = true;
  
  function time(ms){
    return new Promise( (resolve, reject) =>{
      if(is_shop_open){
        setTimeout(resolve, ms)
      }
      else{
        reject(console.log("shop is closed"));
      }
    });
  }
  
  async function kitchen () {
    try{
      await time(2000);
      console.log(`${stocks.fruits[0]} was selected`);
      
      await time(0000);
      console.log("start the production");
      
      await time(2000);
      console.log("the fruit was chopped");
      
      await time(1000);
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
      
      await time(1000);
      console.log("the machine was started")
      
      await time(2000);
      console.log(`ice cream was placed on a ${stocks.holder[0]}`)
      
      await time(3000);
      console.log(`${stocks.toppings[0]} was added as a topping`);
      
      await time(2000);
      console.log("ice cream was served :) ")
      
    }catch(error){
      console.log("customer left", error)
    }finally{
      console.log("day ended, shop closed")
    }
  }
  
  kitchen();
