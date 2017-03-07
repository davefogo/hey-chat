(function() {
  function Rooms($firebaseArray) {

    /*** PRIVATE ATTRIBUTES ***/

    /*
     * @desc Reference/Query Firebase database
     * @type {Object}
     */
    var ref = firebase.database().ref().child("rooms");

    /*
     * @desc Returns ref data to array 
     * @type [array]
     */
    var rooms = $firebaseArray(ref);

    /*** PUBLIC FUNCTIONS ***/

      /*
       * @function addChatroom
       * @desc adds a new chat room to the rooms array.
       * @param string
       */

    return {
      all: rooms
    }

  }

  angular
    .module('heyChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();
