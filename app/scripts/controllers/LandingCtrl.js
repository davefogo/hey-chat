(function() {
  function LandingCtrl(Rooms, $rootScope, $scope, Messages) {

    this.rooms = Rooms.all

    this.message = Messages

    this.setRoom = function(room) {
     $rootScope.currentRoom = room;
     this.messages = Messages.getByRoomId(room);
    }

    this.sendMessage = function() {
      content = document.getElementById('content-message-bar-description').value
      roomId = $rootScope.currentRoom.$id;
      username = $rootScope.heyChatCurrentUser;
      Messages.createMessage(content, roomId, username);
    }
  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$rootScope', '$scope', 'Messages', LandingCtrl]);
})();
