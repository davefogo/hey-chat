(function(){
  function LandingCtrl(Rooms){
    this.rooms = Rooms.all;
  }

  angular
    .module('heyChat')
    .controller('LandingCtrl', ['Rooms', LandingCtrl]);
})();
