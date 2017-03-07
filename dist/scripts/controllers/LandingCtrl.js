(function() {
  function LandingCtrl(Rooms, $rootScope, $scope, Messages, $cookies) {

    this.rooms = Rooms.all

    this.message = Messages

    this.setRoom = function(room) {
     $rootScope.currentRoom = room;
     this.messages = Messages.getByRoomId(room);
    }

    this.sendMessage = function() {
      content = $scope.messageText;
      roomId = $rootScope.currentRoom.$id;
      username = $cookies.get('name');
      Messages.createMessage(content, roomId, username);
      $scope.messageText = null;
    }
  }
  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', '$rootScope', '$scope', 'Messages', '$cookies', LandingCtrl]);
})();
