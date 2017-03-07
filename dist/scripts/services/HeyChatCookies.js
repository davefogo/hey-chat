(function() {
  function HeyChatCookies($cookies, $uibModal, $rootScope) {
    var currentUser = $cookies.get('name');
    if (!currentUser || currentUser.trim() === '') {
      $rootScope.uibModalInstanceB = $uibModal.open({
        templateUrl: 'templates/set-user-modal.html',
        controller: 'SetUserModalCtrl',
        size: 'sm'
      });
    }
  }

  angular
    .module('heyChat')
    .run(['$cookies', '$uibModal', '$rootScope',  HeyChatCookies]);
})();
