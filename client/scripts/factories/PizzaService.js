pizzaApp.factory('PizzaService', [function () {
  var pizzaObject = {
    size : '',
    toppings: {}
  };

  var pendingPizzas = [];

  var toppingArray = ['Anchovies', 'Gorgonzola', 'Shitaake', 'Ghost Pepper', 'Kimchi', 'Seasonal Squash'];

 function setPizzaSize(size) {
  pizzaObject.size = size;
  console.log('pizzaObject.size =', pizzaObject.size);

 }
 function addPizzaTopping(topping) {
  pizzaObject.toppings[topping] = true;
  console.log('pizzaObject.toppings =', pizzaObject.toppings);
 }

function addPizza() {
  var newPizza = angular.copy(pizzaObject);
  pendingPizzas.push(newPizza);
  console.log('pendingPizzas array:', pendingPizzas);
  clearOrder();
}

function clearOrder() {
  pizzaObject.size = '';
  pizzaObject.toppings = {};
}

  return {
    pizzaObject : pizzaObject,
    setPizzaSize : setPizzaSize,
    toppingArray: toppingArray,
    addPizzaTopping : addPizzaTopping,
    addPizza: addPizza,
    pendingPizzas: pendingPizzas
  };
}]);
