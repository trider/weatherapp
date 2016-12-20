
app.controllers.controller("mainCtrl",
  function ($scope, $rootScope, $state, $location, $listServices, $httpServices, $localStorage, $filter) {
  
    $rootScope.$watch('favorites', function (newValue, oldValue) {
      if (newValue !== oldValue) {
        $scope.favorites = newValue;
      }
    });
    
  
    $scope.title = 'Weather App: Search';
    $scope.favorites = $rootScope.favorites;
    

    //Init functionality isolated in function
    $scope.init = function () {
      $scope.getPlace('ab');
    }
    
    
    $scope.getPlace = function(place){
      var url = $rootScope.config.placesAPI.replace("[location]", place);
      $httpServices.getHttpLst(url).then(function (data) {
        $scope.places = data;
      });
    }
    
    $scope.addFavorite = function(place){
      var item = $filter('filter')($rootScope.favorites, {description: place.description})[0];
      if(item === undefined){
        $rootScope.favorites.push(place);
        $localStorage.delete('favorites');
        $localStorage.setObject('favorites',$rootScope.favorites)
        $scope.location=place.description + " added to favourites";
      }
      else{
        $scope.location=place.description + " already exits.";
      }
      
    }

    


  });
