
app.controllers.controller("FavoritesCtrl",
  function ($scope, $rootScope, $state, $location, $listServices, $httpServices, $localStorage) {
  
    $scope.title = 'Weather App';
    $scope.test ='test';
    $scope.favorites = $rootScope.favorites;
  
    $scope.init = function () {
      if($scope.favorites.length > 0)
        $scope.getWeather($scope.favorites[0]);
    }
  
  
    $scope.getWeather = function(place){
      var url = $rootScope.config.placesAPI.replace("[location]", place.description);
      $httpServices.getHttpLst($rootScope.config.weatherAPI).then(function (data) {
        $listServices.printLst(data);
        $scope.weather = data;
        $scope.location=place.description
      });
    }
  
    $scope.remove = function ($index) {
      $scope.favorites.splice($index, 1);
      $localStorage.setObject('favorites', $scope.favorites);
    }
    

    


  });
