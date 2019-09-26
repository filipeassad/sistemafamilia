app.controller('ComprasCtrl',[
    '$scope',
    function($scope){

    $scope.produtosLimpeza = angular.copy(produtosLimpeza);
    $scope.higienePessoal = angular.copy(higienePessoal);
    $scope.besteiras = angular.copy(besteiras);
    $scope.bebidas = angular.copy(bebidas);
    $scope.comidas = angular.copy(comidas);
    $scope.legumes = angular.copy(legumes);
    $scope.frutas = angular.copy(frutas);


}]);