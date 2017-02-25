(function() {
  function HeyChatCookies($cookies, $uibModal, $rootScope) {
    var currentUser = $cookies.get('heyChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $rootScope.uibModalInstanceB = $uibModal.open({
        templateUrl: 'templates/set-user-modal.html',
        controller: 'SetUserModalCtrl',
        size: 'sm'
      });
    }
  }

  angular
    .module('heyChat')
    .run(['$cookies', '$uibModal', '$rootScope', HeyChatCookies]);
})();
