app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'page/main.html'
    })
    .when('/metas', {
      templateUrl : 'page/metas.html',
      controller : "MetasCtrl"
    }).when('/cardapio', {
      templateUrl : 'page/cardapio.html',
      controller : "CardapioCtrl"
    }).when('/compras', {
      templateUrl : 'page/compras.html',
      controller : "ComprasCtrl"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
});