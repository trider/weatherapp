/**
 * Created by jonnygold on 01/05/2016.
 */
app.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

  $stateProvider
    .state('main', {
      url: "/main",
      views: {
        '': {
          templateUrl: "templates/main.html",
          controller:"mainCtrl"
        }
      }
    })
    .state('favorites', {
    url: "/favorites",
    views: {
      '': {
        templateUrl: "templates/favorites.html",
        controller:"FavoritesCtrl"
      }
    }
  });


  $urlRouterProvider.otherwise("/main");



});
