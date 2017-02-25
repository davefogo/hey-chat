(function() {
  function SetUserModalCtrl($rootScope) {
    this.setUsername = function() {
      var heyChatCurrentUser = document.getElementById('heyChatCurrentUser').value;
      if (heyChatCurrentUser && heyChatCurrentUser.trim() !== '') {
        $rootScope.uibModalInstanceB.close('cancel');
        console.log(heyChatCurrentUser);
      }
    }
  }
  angular
    .module('heyChat')
    .controller('SetUserModalCtrl', ['$rootScope', SetUserModalCtrl])
})();
