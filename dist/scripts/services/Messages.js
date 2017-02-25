(function() {
  function Messages($firebaseArray) {

    /*** PRIVATE ATTRIBUTES ***/

    var ref = firebase.database().ref().child("messages").orderByChild("roomId");

    var messages = $firebaseArray(ref);

    /*
     * @desc Reference/Query Firebase database
     * @type {Object}
     */
     //
    //  var messages = $firebaseArray(ref);

    /*
     * @desc Returns ref data as array
     * @type {Object}
     */

    return {
      all : messages
      // getByRoomId: function(room) {
      //   // var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(room);
      //   // console.log(ref);
      //   // var messages = $firebaseArray(ref);
      //   // console.log(messages);
      //   // return messages;
      // }
    }

  };

  angular
    .module('heyChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})()
