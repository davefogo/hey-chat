(function() {
  function SetUserModalCtrl($rootScope) {
    this.setUsername = function() {
      $rootScope.heyChatCurrentUser = document.getElementById('heyChatCurrentUser').value;
      if ($rootScope.heyChatCurrentUser && $rootScope.heyChatCurrentUser.trim() !== '') {
        $rootScope.uibModalInstanceB.close('cancel');
        return $rootScope.heyChatCurrentUser;
      }
    }
  }
  angular
    .module('heyChat')
    .controller('SetUserModalCtrl', ['$rootScope', SetUserModalCtrl])
})();
