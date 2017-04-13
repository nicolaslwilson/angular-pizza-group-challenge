pizzaApp.controller('ConfirmedPizzasController', ['PizzaService', function(PizzaService){
  var confirmedPizzas = this;
  //
  PizzaService.calculateOrderTotal(PizzaService.pizzaArray);
  confirmedPizzas.pizzaArray = PizzaService.pizzaArray;
  confirmedPizzas.orderObject = PizzaService.orderObject;

  // orderList.confirmPizza = PizzaService.confirmPizza;
  // orderList.cancelPizza = PizzaService.cancelPizza;
  console.log('ConfirmedPizzasController Loaded');


}]);
