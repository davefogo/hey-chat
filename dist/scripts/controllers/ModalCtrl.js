(function() {
  function ModalCtrl(Rooms, $uibModal, $rootScope) {

      this.rooms = Rooms.all;

    /*** PUBLIC FUNCTIONS ***/



    this.createRoomModal = function() {
        $rootScope.uibModalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
        size: 'sm',
        backdrop: true
      });
    };

    /*
     * @function addChatroom
     * @desc adds a new chat room to the rooms array.
     * @param string
     */

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
