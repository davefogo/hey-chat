(function() {
  function Messages($firebaseArray, $rootScope) {

    var setTime = function(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes() - 12;
      if (minutes.toString().length === 1) {
        return hours + ":0" + minutes;
      } else {
        return hours + ":" + minutes;
      }
    }

    return {
      getByRoomId: function(room) {
        if (room) {
          var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(room.$id);
          var messages = $firebaseArray(ref);
          return messages;
        }
      },
      createMessage: function(content, roomId, username) {
        var d = new Date;
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        messages.$add({content: content, roomId: roomId, username: username, sentAt: setTime(d)});
      }
    };
  }

  angular
    .module('heyChat')
    .factory('Messages', ['$firebaseArray', '$rootScope', Messages]);
})()
