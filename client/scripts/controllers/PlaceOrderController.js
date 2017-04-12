pizzaApp.controller('PlaceOrderController', [ 'PizzaService' , function(PizzaService){
  var placeOrder = this;

  placeOrder.pizza = PizzaService.pizzaObject;
  placeOrder.setPizzaSize = PizzaService.setPizzaSize;
  placeOrder.toppingArray = PizzaService.toppingArray;
  placeOrder.addPizzaTopping = PizzaService.addPizzaTopping;
  placeOrder.addPizza = PizzaService.addPizza;

  console.log(' PlaceOrderController Loaded ' , placeOrder.pizza );

}]);
