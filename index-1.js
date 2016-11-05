//angular.module('bindingApp',[])
//AQUI NOS CRIAMOS UM MODULO DO ANGULAR, ESTE MODULO INICIALMENTE É SEU
//E DEVER TER ACESSO A TODOS A SUA APLICAÇÃO
//POREM ESTE MODULO PODE RECEBER SOBRECARGAS 
//TODAS AS SOBRECARGAS DA SUA APLICAÇÃO SERÃO INSERIDAS DENTRO DO COLCHETES
//SOBRECARGAS PARA COOKIES, LOCALSTORAGE, LOCATION, ....
angular.module('bindingApp',[]).controller("BindingController",function($scope){

    //variaveis
    $scope.primeiroNome = "Jean";
    $scope.segundoNome = "Lima";
    $scope.terceiroNome = "Lopes"
})


// var BindingController = function ($scope) {

//     //variaveis
//     $scope.primeiroNome = "Jean";
//     $scope.segundoNome = "Lima";
//     $scope.terceiroNome = "Lopes"

// }