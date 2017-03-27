(function() {
  function LandingCtrl(Rooms, $scope, Messages, $cookies) {

    this.rooms = Rooms.all;

    this.message = Messages;

    this.setRoom = function(room) {
     $scope.currentRoom = room;
     this.messages = Messages.getByRoomId(room);
    }

    this.sendMessage = function() {
      content = $scope.messageText;
      roomId = $scope.currentRoom.$id;
      username = $cookies.get('name');
      Messages.createMessage(content, roomId, username);
      $scope.messageText = null;
    }
  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$scope', 'Messages', '$cookies', LandingCtrl]);
})();
