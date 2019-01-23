app.controller('CardapioCtrl',[
    '$scope',
    function($scope){

    var mes = 1;
    var ano = 2019;
    //$scope.semanas = angular.copy(cardapioJaneiro2018);
    $scope.semanas = gerarSemanas();
    
    function gerarSemanas(){
        var dia = 1;
        var semanas = [];
        for(var i = 0; i < 5; i++){            
            var semana = {};
            for(var j = 0; j < 7; j++){         
                var dataAux = new Date(ano, mes-1, dia);   
                if(j == dataAux.getDay()){
                    insereDiaNaSemana(semana, dataAux.getDay(), dia);
                    dia++;
                }else{
                    insereDiaNaSemana(semana, dataAux.getDay(), "");
                }
            }
            semanas.push(semana);
        }
        return semanas;
    }

    function insereDiaNaSemana(semana, diaSemana, dia){

        var dataCriada = new Date(ano, mes-1, dia);
        var diaValido = angular.copy(dia);

        if(dataCriada.getMonth() != mes-1){
            diaValido = ""; 
        }

        if(diaSemana == 0) { 
            semana["domingo"] = { 'dia' : diaValido };
        }else if(diaSemana == 1){
            semana["segunda"] = { 'dia' : diaValido };
        }else if(diaSemana == 2){
            semana["terca"] = { 'dia' : diaValido };
        }else if(diaSemana == 3){
            semana["quarta"] = { 'dia' : diaValido };
        }else if(diaSemana == 4){
            semana["quinta"] = { 'dia' : diaValido };
        }else if(diaSemana == 5){
            semana["sexta"] = { 'dia' : diaValido };
        }else {
            semana["sabado"] = { 'dia' : diaValido };
        }    
    }

}]);