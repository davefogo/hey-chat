(function() {
  function Messages($firebaseArray, $rootScope) {
    var setTime = function(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();

      if (minutes.length < 2) {
        return time = hours + ":0" + minutes;
      } else {
        return time = hours + ":" + minutes;
      }
    }

    return {
      getByRoomId: function(room) {
        if (room) {
          var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(room.$id);
          var messages = $firebaseArray(ref);
          return messages;
          // return $rootScope.roomMessages = $firebaseArray(ref);
        }
      },
      createMessage: function() {
        var d = new Date;
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        messages.$add({content: document.getElementById('content-message-bar-description').value, roomId: $rootScope.currentRoom.$id, username: $rootScope.heyChatCurrentUser, sentAt: setTime(d)});
        // .$add(function(()))
      }
    };
  }



  angular
    .module('heyChat')
    .factory('Messages', ['$firebaseArray', '$rootScope', Messages]);
})()
