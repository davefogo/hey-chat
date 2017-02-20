(function() {
  function Messages($firebaseArray) {

    /*** PRIVATE ATTRIBUTES ***/

    /*
     * @desc Reference/Query Firebase database
     * @type {Object}
     */
    var ref = firebase.database().ref().child("messages");

    /*
     * @desc Returns ref data to array
     * @type {Object}
     */
    var messages = $firebaseArray(ref);

    return {
      // all: messages
      getByRoomId: function(room) {
        ref.orderByChild("roomId").equalTo(room.$id);
      }
    }


  };

  angular
    .module('heyChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})()
