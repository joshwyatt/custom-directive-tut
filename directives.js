function helloWorld(){
  return {
    restrict: 'EA',
    replace: 'true',
    template: [
      '<pre>',
        'Hello World',
      '</pre>'
    ].join('')
  }
}


angular.module('directives', [])

.directive('helloWorld', helloWorld)