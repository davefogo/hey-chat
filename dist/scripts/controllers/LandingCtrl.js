(function() {
  function LandingCtrl(Rooms, $scope, Messages) {

    /*** PUBLIC ATTRIBUTES ***/

    /*
     * @desc Reference to Rooms service
     * @type [array]
     */

    this.rooms = Rooms.all;

    this.messages = Messages.all;

    /*** PUBLIC FUNCTIONS ***/

    /*
     * @function setRoom
     * @desc sets the newly selected room.
     * @param string
     */

     this.setRoom = function(room) {
        return $scope.currentRoom = room.$value;
     }



  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$scope', 'Messages', LandingCtrl]);
})();
