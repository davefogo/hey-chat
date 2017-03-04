(function() {
  function LandingCtrl(Rooms, $rootScope, $scope, Messages) {

    this.rooms = Rooms.all

    $scope.messageText = document.getElementById('content-message-bar-description').value;

    this.message = Messages
    /*** PUBLIC ATTRIBUTES ***/

    /*
     * @desc Reference to Rooms service
     * @type [array]
     */

    /*** PUBLIC FUNCTIONS ***/

    /*
     * @function setRoom
     * @desc sets the newly selected room.
     * @param string
     */

     this.setRoom = function(room) {
       $rootScope.currentRoom = room;
       this.messages = Messages.getByRoomId(room);
     }

     this.sendMessage = function() {
        Messages.createMessage();
     }

  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$rootScope', '$scope', 'Messages', LandingCtrl]);
})();
