(function() {
  function Messages($firebaseArray) {

    /*** PRIVATE ATTRIBUTES ***/

    /*
     * @desc Reference/Query Firebase database
     * @type {Object}
     */
    var ref = firebase.database().ref().child("messages").orderByChild("roomId");

    /*
     * @desc Returns ref data to array
     * @type {Object}
     */
    var messages = $firebaseArray(ref);

    return {
      all: messages
      // getByRoomId: function(roomId){
      //   messages.roomId.equalTo(roomId);
      }
    };

  angular
    .module('heyChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})()
