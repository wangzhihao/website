(function(angular) {
  angular.module('achieveApp')
    .controller('achieveCtrl', achieveCtrl);

  achieveCtrl.$inject = ['achieveService'];

  function achieveCtrl(achieveService) {
    var ctrl = this;
    ctrl.colorClasses = [
      'knowledge_level',
      'comprehension_level',
      'application_level',
      'analysis_level',
      'synthesis_level',
      'evaluation_level'
    ];
    achieveService.getAchievements().then(function(results) {
      //group by subject firstly.
      results = _.groupBy(results, function(item) {
        return item.subject;
      });
      //then group by category inside each subject
      $.each(results, function(subject, achieves) {
        results[subject] = _.groupBy(achieves, function(item) {
          return item.category;
        });
      });
      ctrl.achievements = results;
      console.log(results);
    }, function() {
      ctrl.achievements = [];
    });
  }


})(angular);
