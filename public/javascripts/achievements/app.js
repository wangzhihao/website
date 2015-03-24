(function(angular) {
  angular.module('achieveApp', [
      'restangular',
      'ngAnimate'
    ])
    .config(['$httpProvider', function($httpProvider) {
      /*
       * Enable CORS
       * http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
       */
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
})(angular);
