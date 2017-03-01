(function() {
  function Messages($firebaseArray, $rootScope) {
    var d = new Date;

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
          console.log($rootScope.roomMessages);
          return $rootScope.roomMessages = $firebaseArray(ref);
        }
      },
      send: function() {
        $rootScope.roomMessages.$add({content: document.getElementById('content-message-bar-description').value, roomId: $rootScope.currentRoom.$id, username: $rootScope.heyChatCurrentUser, sentAt: setTime(d)});
      }
    };
  }



  angular
    .module('heyChat')
    .factory('Messages', ['$firebaseArray', '$rootScope', Messages]);
})()
