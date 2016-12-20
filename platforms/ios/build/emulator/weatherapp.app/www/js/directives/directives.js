app.directive('feedItem', function ()
{
  return {
    transclude: true,
    templateUrl: 'templates/feeditem.html'
  };
});
app.directive('backButton', function(){
  return {
    restrict: 'A',

    link: function(scope, element, attrs) {
      element.bind('click', goBack);

      function goBack() {
        history.back();
        scope.$apply();
      }
    }
  }
});
