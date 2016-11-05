//firebase URL
var bancoDados = new Firebase("https://projeto-angularfirebase.firebaseio.com/AngularFirebase");

angular.module('tarefasApp',[]).controller('tarefasCtrl', function($scope){

  //objeto onde serão armazenadas as terefas
  $scope.tasks = [];

  //VARIAVEIS
  $scope.tarefa = "";


  //FUNÇÕES
  //ADICIONAR UMA NOVA TAREFA
  $scope.adicionar = function(){
      debugger;
      bancoDados.push({task:$scope.tarefa});
      $scope.tarefa = "";
  }

  //DELETAR TAREFA
  $scope.deletar = function(){
      $scope.tasks.splice(this.$index,1)
  }

  //INICIALIZAÇÃO
  $scope.inicializacao = function(){
      alert('Iniciando Aplicação')
  }


})