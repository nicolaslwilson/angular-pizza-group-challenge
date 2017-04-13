pizzaApp.controller('PlaceOrderController', [ 'PizzaService' , function(PizzaService){
  var placeOrder = this;

  placeOrder.pizzaObject = PizzaService.pizzaObject;
  placeOrder.setPizzaSize = PizzaService.setPizzaSize;
  placeOrder.toppingArray = PizzaService.toppingArray;
  placeOrder.addPizzaTopping = PizzaService.addPizzaTopping;
  placeOrder.addPizza = PizzaService.addPizza;
  placeOrder.removePizzaTopping = PizzaService.removePizzaTopping;
  
  console.log(' PlaceOrderController Loaded ' , placeOrder.pizzaObject );

}]);
