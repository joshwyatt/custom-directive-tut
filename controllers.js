function TestController(){
  var vm = this;

  vm.hello = 'hello';
}

angular.module('controllers', [])

.controller('TestController', TestController)