(function(angular) {
  angular.module('achieveApp').directive('myCollapse', function() {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        iElm.click(function() {
          iElm.next().collapse("toggle");
        });
      }
    };
  });
}(angular));
