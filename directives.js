function helloWorld(){
  return {
    restrict: 'EA',
    replace: 'true',
    template: [
      '<pre>',
        'Hello World',
      '</pre>'
    ].join('')
  };
}

function colorWorld(){
  return {
    restrict: 'EA',
    replace: 'true',
    template: '<p style="background-color:{{color}}">Color World</p>',
    link: function(scope, elem, attrs){
      elem.bind('click', function(){
        elem.css('background-color', 'white');
        scope.$apply(function(){
          scope.color = "white";
        });
      });
    }
  };
}


angular.module('directives', [])

.directive('helloWorld', helloWorld)
.directive('colorWorld', colorWorld)