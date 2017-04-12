var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

pizzaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/placeOrder', {
          templateUrl: '/views/templates/placeOrder.html',
          controller: 'PlaceOrderController',
          controllerAs: 'placeOrder'
        })
        .when('/orderList', {
          templateUrl: '/views/templates/orderList.html',
          controller: 'OrderListController',
          controllerAs: 'orderList'
        })
        .otherwise({
          redirectTo: 'placeOrder'
        });
}]);
