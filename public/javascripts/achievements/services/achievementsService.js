(function(angular) {
  angular.module('achieveApp')
    .factory('achieveService', achieveService);

  achieveService.$inject = ['Restangular'];

  function achieveService(Restangular) {
    var service = {
      getAchievements: getAchievements,
      removeAchievement: removeAchievement,
      saveAchievement: saveAchievement,
      updateAchievement: updateAchievement
    };

    var httpService = Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl('http://localhost:3001/');
    });

    return service;


    function getAchievements() {
      return httpService.all('achievements').getList();
    }

    function removeAchievement(achievement) {
      return httpService.all('achievements').one(achievement).remove();
    }

    function saveAchievement(achievement) {
      return httpService.all('achievements').post(achievement);
    }

    function updateAchievement(achievement) {
      return httpService.all('achievements').customPUT(achievement);
    }
  };
})(angular);
