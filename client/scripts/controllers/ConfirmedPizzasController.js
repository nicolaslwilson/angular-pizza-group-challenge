pizzaApp.controller('ConfirmedPizzasController', ['PizzaService', function(PizzaService){
  // reference for this instance of the controller
  // matches name used for 'Controller as' in confrimedPizzas.html
  var confirmedPizzas = this;
  // calculate current order total when the controller loads
  PizzaService.calculateOrderTotal(PizzaService.pizzaArray);
  // object references for use in confirmedPizzas.html
  confirmedPizzas.pizzaArray = PizzaService.pizzaArray;
  confirmedPizzas.orderObject = PizzaService.orderObject;
}]);
