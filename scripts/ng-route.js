app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : '../page/main.html'
    })
    .when('/metas', {
      templateUrl : '../page/metas.html',
      controller : "MetasCtrl"
    }).when('/cardapio', {
      templateUrl : '../page/cardapio.html',
      controller : "CardapioCtrl"
    }).when('/compras', {
      templateUrl : '../page/compras.html',
      controller : "ComprasCtrl"
    });
});