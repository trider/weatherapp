var app = angular.module('app', ['ionic', 'ui.router', 'app.controllers','app.services']);
app.controllers = angular.module('app.controllers', []);
app.services = angular.module('app.services', []);


app.run(
  function ($rootScope, $localStorage, $ionicPlatform) {
    
    $rootScope.config = {};
    $rootScope.config.placesAPI='places-api/place/autocomplete/json?input=[location]&types=(cities)&location=0,0&radius=20000000&key=AIzaSyDtiY4QKJgJd3fTAgI3Oi7orl2xROY9eGE';
    $rootScope.config.weatherAPI='weather-api/weather?q=[location]&appid=990584634987be651d36ebf9c57752f3';
    $rootScope.favorites = [];
  
    if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
      $rootScope.config.placesAPI='https://maps.googleapis.com/maps/api/place/autocomplete/json?input=[location]&types=(cities)&location=0,0&radius=20000000&key=AIzaSyDtiY4QKJgJd3fTAgI3Oi7orl2xROY9eGE';
      $rootScope.config.weatherAPI='http://api.openweathermap.org/data/2.5/weather?q=[location]&appid=990584634987be651d36ebf9c57752f3';
      
    }
   
    
    
    
    if($localStorage.getObject('favorites')!==null)$rootScope.favorites = $localStorage.getObject('favorites');
  
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins) {
  
        if (window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
  
      }
        
    
    });
    
  });
