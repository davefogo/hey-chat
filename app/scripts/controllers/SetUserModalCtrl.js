(function() {
  function SetUserModalCtrl($rootScope, $scope, $cookies) {
    this.setUsername = function() {
      $cookies.put('name', $scope.name);
      var username = $cookies.get('name');
      if (typeof(username) !== "undefined" && username.trim() !== '') {
        $rootScope.uibModalInstanceB.close('cancel');
      }
    }
  }
  angular
    .module('heyChat')
    .controller('SetUserModalCtrl', ['$rootScope', '$scope', '$cookies', SetUserModalCtrl])
})();
