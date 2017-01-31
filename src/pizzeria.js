'use strict';
var pizza = [
    {id:"01",name: "Margarita", price: 200},
    {id:"02", name: "Neapolitana", price: 300},
    {id:"03", name: "Ruccola", price: 250},
    {id:"04", name: "Salami", price: 350},
    {id:"05", name: "Tuna", price: 350},
    {id:"06", name: "Cherry-Sweet", price: 275}
];
class Pizzeria {
    calculateBasicPrice(pizzaItems){
      var arr = [];
          pizza.forEach(item => {
              pizzaItems.forEach(pizzaItem => {
                  if(pizzaItem == item.id){
                      arr.push(item.price);
                  }
              }) 
          });
         return  arr.reduce((a,b)=> a+b);

    }

    isBirthday(clientBirthday, date){
        if((clientBirthday.day - date.day) == 0 && (clientBirthday.month - date.month) == 0) {
            return pizza[5].name;
        }
        else {
            return false;
        }
    }
}

module.exports = Pizzeria;
/**
 * Created by HP on 1/29/2017.
 */
