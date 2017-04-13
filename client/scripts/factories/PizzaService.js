pizzaApp.factory('PizzaService', [function () {
  var pizzaObject = {
    size : '',
    toppings: {},
    price : 0,
    confirmed : false
  };

  var pizzaArray = [];

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

function addPizza() {
  var newPizza = angular.copy(pizzaObject);
  pizzaArray.push(newPizza);
  console.log('pizzaArray array:', pizzaArray);
  clearOrder();
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
}

function cancelPizza(pizzaIndex) {
  console.log(pizzaArray, pizzaIndex);
  console.log(pizzaArray.splice(pizzaIndex, 1));
}

  return {
    pizzaObject : pizzaObject,
    setPizzaSize : setPizzaSize,
    toppingArray: toppingArray,
    addPizzaTopping : addPizzaTopping,
    addPizza: addPizza,
    pizzaArray: pizzaArray,
    confirmPizza: confirmPizza,
    cancelPizza: cancelPizza
  };
}]);
