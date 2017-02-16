(function() {
  function ModalCtrl(Rooms, $uibModal, $rootScope) {
    this.rooms = Rooms.all;
    //function that pops up the modal
    this.createRoomModal = function() {
        $rootScope.uibModalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
        size: 'sm',
        backdrop: true
      });
    };

    this.addChatroom = function() {
      this.rooms.$add({$value: document.getElementById('value').value})
      $rootScope.uibModalInstance.close('cancel');
    };

    this.closeNewRoom = function() {
      $rootScope.uibModalInstance.close('cancel');
    }
  }

  angular
    .module('heyChat')
    .controller('ModalCtrl', ['Rooms', '$uibModal', '$rootScope', ModalCtrl]);
})();
