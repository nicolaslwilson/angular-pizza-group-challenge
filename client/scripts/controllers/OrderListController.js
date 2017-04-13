pizzaApp.controller('OrderListController', [ 'PizzaService', function(PizzaService){
  var orderList = this;

  orderList.pizzaArray = PizzaService.pizzaArray;
  orderList.confirmPizza = PizzaService.confirmPizza;
  orderList.cancelPizza = PizzaService.cancelPizza;
  console.log(' OrderListController Loaded ', orderList.list);


}]);
