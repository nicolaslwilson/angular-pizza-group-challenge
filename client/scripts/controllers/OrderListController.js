pizzaApp.controller('OrderListController', [ 'PizzaService', function(PizzaService){
  var orderList = this;

  orderList.list = PizzaService.pizzaObject;
  orderList.pendingPizzas = PizzaService.pendingPizzas;

  console.log(' OrderListController Loaded ', orderList.list);


}]);
