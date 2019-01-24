app.controller('CardapioCtrl',[
    '$scope',
    function($scope){

    var mes = 1;
    var ano = 2019;

    var estiloAtual = {
        'background-color':'#58ACFA',
        'height':'95px',
        'color':'#000000'
    }

    var estiloAtivo = {
        'background-color':'#FFFFFF',
        'height':'95px',
        'color':'#000000'
    }
    
    var estiloVazio = {
        'background-color':'#C0C0C0',
        'height':'95px',
        'color':'#000000'
    }

    $scope.semanas = gerarSemanas();
    
    function gerarSemanas(){
        var dia = 1;
        var semanas = [];
        for(var i = 0; i < 6; i++){            
            var semana = {};
            for(var j = 0; j < 7; j++){         
                var dataAux = new Date(ano, mes-1, dia);
                var igualador = dataAux.getDay() == 0 ? 6 : dataAux.getDay() - 1;                
                if(j == igualador){
                    insereDiaNaSemana(semana, j, dia);
                    dia++;
                }else{
                    insereDiaNaSemana(semana, j, "");
                }
            }
            semanas.push(semana);
        }
        return semanas;
    }

    function insereDiaNaSemana(semana, diaSemana, dia){

        var dataCriada = new Date(ano, mes-1, dia);
        var diaValido = angular.copy(dia);
        var estilo = angular.copy(estiloAtivo);
        var nomeCampo = "";
        var cardapioDia = {'almoco': '', 'janta': ''};

        if(dataCriada.getMonth() != mes-1)
            diaValido = ""; 
        

        if(diaValido == "")
            estilo = angular.copy(estiloVazio);
        else{
            cardapioDia = buscarCardapio(dataCriada);
            if(compararDatas(dataCriada, new Date()))
                estilo = angular.copy(estiloAtual);            
        }

        if(diaSemana == 0)  
            nomeCampo = "segunda";
        else if(diaSemana == 1)
            nomeCampo = "terca";
        else if(diaSemana == 2)
            nomeCampo = "quarta";            
        else if(diaSemana == 3)
            nomeCampo = "quinta";
        else if(diaSemana == 4)
            nomeCampo = "sexta";
        else if(diaSemana == 5)
            nomeCampo = "sabado";
        else 
            nomeCampo = "domingo";          

        semana[nomeCampo] = { 
            'dia' : diaValido,
            'estilo' : estilo,
            'almoco': cardapioDia.almoco == "" ? "" : "Almoço: " + cardapioDia.almoco,
            'janta': cardapioDia.janta == "" ? "" : "Jantar: " + cardapioDia.janta,
            'almocoEstilo': { 'margin-top': cardapioDia.almoco == "" ? '54px' : '40px', 'text-align': 'left', 'font-size': '10px'},
            'jantaEstilo': { 'text-align': 'left', 'font-size': '10px' }
        };
    }

    function buscarCardapio(dataCriada){
        for(var k = 0; k < cardapioJaneiro2018.length; k++){
            if(compararDatas(dataCriada, cardapioJaneiro2018[k].dataCardapio)){
                return cardapioJaneiro2018[k];
            }
        }
        return {'almoco': '', 'janta': ''};
    }

    function compararDatas(dataA, dataB){
        if(dataA.getFullYear() == dataB.getFullYear() 
                && dataA.getMonth() == dataB.getMonth()
                && dataA.getDate() == dataB.getDate())
            return true;
        return false;
    }

}]);