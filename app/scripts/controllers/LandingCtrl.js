(function() {
  function LandingCtrl(Rooms, $rootScope, Messages) {

    /*** PUBLIC ATTRIBUTES ***/

    /*
     * @desc Reference to Rooms service
     * @type [array]
     */

    this.rooms = Rooms.all;

    this.message = Messages;


    /*** PUBLIC FUNCTIONS ***/

    /*
     * @function setRoom
     * @desc sets the newly selected room.
     * @param string
     */

     this.setRoom = function(room) {
        return $rootScope.currentRoom = room;
     }



  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$rootScope', 'Messages', LandingCtrl]);
})();
