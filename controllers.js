function TestController(){
  var vm = this;

  vm.hello = 'hello';
}

function MainController($scope){
  
}

function OtherController($scope){

}

angular.module('controllers', [])

.controller('TestController', TestController)
.controller('MainController', MainController)
.controller('OtherController', OtherController)