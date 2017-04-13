pizzaApp.factory('PizzaService', [function () {
  var pizzaObject = {
    size : 'Medium',
    toppings: {},
    price : 0,
    confirmed : false
  };

  var pizzaArray = [{
    size : 'Small',
    toppings: {Anchovies: true},
    price : 7,
    confirmed : false
  },
  {
    size : 'Medium',
    toppings: {Gorgonzola: true, Kimchi: true},
    price : 9,
    confirmed : false
  },
  {
    size : 'Big Boi',
    toppings: {Shitaake: true},
    price : 11,
    confirmed : true
  }];

  var orderObject = {
    total: 0
  };

  var toppingArray = ['Anchovies', 'Gorgonzola', 'Shitaake', 'Ghost Pepper', 'Kimchi', 'Seasonal Squash'];

 function setPizzaSize(size) {
  pizzaObject.size = size;
  console.log('pizzaObject.size =', pizzaObject.size);
  updatePrice(pizzaObject);
 }

 function addPizzaTopping(topping) {
  pizzaObject.toppings[topping] = true;
  console.log('pizzaObject.toppings =', pizzaObject.toppings);
  updatePrice(pizzaObject);
 }

 function removePizzaTopping(topping) {
  pizzaObject.toppings[topping] = false;
  console.log('pizzaObject.toppings =', pizzaObject.toppings);
  updatePrice(pizzaObject);
 }

function addPizza() {
  if (pizzaObject.size) {
    var newPizza = angular.copy(pizzaObject);
    pizzaArray.push(newPizza);
    console.log('pizzaArray array:', pizzaArray);
    clearOrder();
  } else {
    alert( 'WHAZZUP!!! What size do you want?');
  }


}

function clearOrder() {
  pizzaObject.size = '';
  pizzaObject.toppings = {};
  pizzaObject.price = 0;
}

function updatePrice(pizzaObject) {
  var price = 0;
  switch (pizzaObject.size) {
    case 'Small':
      price += 6;
      break;
    case 'Medium':
      price += 7;
      break;
    case 'Big Boi':
        price += 10;
        break;
  }
  for (var topping in pizzaObject.toppings) {
    if(topping){
      price++ ;
    }
  }
  pizzaObject.price = price;
  console.log(pizzaObject.price);
}

function confirmPizza(pizzaObject) {
  console.log('confirming pizza:', pizzaObject);
  pizzaObject.confirmed = true;
  calculateOrderTotal(pizzaArray);
}

function cancelPizza(pizzaIndex) {
  console.log(pizzaArray, pizzaIndex);
  console.log(pizzaArray.splice(pizzaIndex, 1));
}

function calculateOrderTotal(pizzaArray) {
  var total = 0;
  console.log(pizzaArray);
  for (var i in pizzaArray) {
    console.log('Pizza object', pizzaArray[i]);
    if (pizzaArray[i].confirmed) {
      console.log(pizzaArray[i].price);
      total += pizzaArray[i].price;
    }
  }
  console.log('Var tota', total);
  orderObject.total = total;

}


  return {
    pizzaObject : pizzaObject,
    setPizzaSize : setPizzaSize,
    toppingArray: toppingArray,
    addPizzaTopping : addPizzaTopping,
    removePizzaTopping : removePizzaTopping,
    addPizza: addPizza,
    pizzaArray: pizzaArray,
    confirmPizza: confirmPizza,
    cancelPizza: cancelPizza,
    orderObject: orderObject,
    calculateOrderTotal: calculateOrderTotal
  };
}]);
