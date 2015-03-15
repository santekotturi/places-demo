angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation, uiGmapGoogleMapApi, uiGmapIsReady, ngGPlacesAPI) {
	  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;

      var places = ngGPlacesAPI.nearbySearch({
          latitude: $scope.lat,
          longitude: $scope.long
      }).then(
          function(data){
              console.log('returned with places data', data);
              $scope.places = data;
              return data;
          });

      // create new map with your location
      uiGmapGoogleMapApi.then(function(maps){

        $scope.control = {};

      	$scope.myMap = {
      		center: {
      			latitude: $scope.lat,
      			longitude: $scope.long
      		}, 
      		zoom : 14
      	};
      	$scope.myMarker = {
      		id: 1, 
      		coords: {
      			latitude: $scope.lat,
      			longitude: $scope.long
      		}, 
      		options: {draggable:false}
      	};

      });

    }, function(err) {
      // error
    });



    $scope.getMap = function() {
        var map1 = $scope.control.getGMap();
        console.log('map is:', map1);
        console.log('with places:', $scope.places);
        //for (var i = 0; i < $scope.places.length; i++) {
        //    var place = $scope.places[i];
        //    ngGPlacesAPI.getGplaces().createMarker($scope.places[i]);
        //}

    };

    uiGmapIsReady.promise(1).then(function(instances) {
        instances.forEach(function(inst) {
        var map = inst.map;
        var uuid = map.uiGmap_id;
        var mapInstanceNumber = inst.instance; // Starts at 1.
        console.log('from map is ready:', map, uuid, mapInstanceNumber);
        });
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});