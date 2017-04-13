pizzaApp.controller('OrderListController', [ 'PizzaService', function(PizzaService){
  var orderList = this;

  orderList.list = PizzaService.pizzaObject;
  orderList.pizzaArray = PizzaService.pizzaArray;
  orderList.confirmPizza = PizzaService.confirmPizza;
  orderList.cancelPizza = PizzaService.cancelPizza;
  console.log(' OrderListController Loaded ', orderList.list);


}]);
