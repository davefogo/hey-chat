(function() {
  function LandingCtrl(Rooms, $rootScope, Messages) {
    this.rooms = Rooms.all

    this.message = Messages
    /*** PUBLIC ATTRIBUTES ***/

    /*
     * @desc Reference to Rooms service
     * @type [array]
     */

     this.messageList = $rootScope.roomMessage;

    /*** PUBLIC FUNCTIONS ***/

    /*
     * @function setRoom
     * @desc sets the newly selected room.
     * @param string
     */

     this.setRoom = function(room) {
        return $rootScope.currentRoom = room;
     }

     this.sendMessage = function() {
        Messages.send(Messages.textValue);
     }

  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$rootScope', 'Messages', LandingCtrl]);
})();
