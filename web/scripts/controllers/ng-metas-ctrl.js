app.controller('MetasCtrl',[
    '$scope',
    '$interval',
    function($scope,
    $interval){

    var anoFinal = 2019;
    var mesFinal = 12;
    var diaFinal = 31;
    var horaFinal = 23;
    var minutoFinal = 59;
    var segundoFinal = 59;    

    var intervalo = $interval(contarTempo ,1000);
    
    $scope.metasProfissionais = angular.copy(metasProfissinaisFilipe);
    $scope.metasFinanceiras = angular.copy(metasFinanceirasFilipe);
    $scope.metasCasa = angular.copy(metasCasaFilipe);
    $scope.metasBemEstar = angular.copy(metasBemEstarFilipe);

    function contarTempo() {

        var hoje = new Date();  
        var futuro = new Date(  anoFinal, mesFinal-1, diaFinal, 
                                horaFinal, minutoFinal, segundoFinal);  

        var segundos = parseInt((futuro - hoje) / 1000);  
        var minutos = parseInt(segundos / 60);  
        var horas = parseInt(minutos / 60);  
        var dias = parseInt(horas / 24);   

        segundos = segundos - (minutos * 60);  
        minutos = minutos - (horas * 60);  
        horas = horas - (dias * 24);  

        var naoAcabouTempo = dias+horas+minutos+segundos > 0;

        if (naoAcabouTempo) 
        {            
            $scope.dias = dias > 9 ? dias : '0' + dias;
            $scope.horas = horas > 9 ? horas : '0' + horas;
            $scope.minutos = minutos > 9 ? minutos : '0' + minutos;
            $scope.segundos = segundos > 9 ? segundos : '0' + segundos;    
        }
        else
        {
            $interval.cancel(intervalo);
        }    
    }
}]);