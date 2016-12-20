/**
 * Created by jonnygold on 01/05/2016.
 */
//Serives for handling HTTP and rest calls
app.services.service('$httpServices', function ($http, $q) {

  this.getHttpLst = function (path) {
    var deferred = $q.defer();

    $http.get(path).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  this.postHttpItem = function (path, data) {
    var deferred = $q.defer();

    $http.post(path, data).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;

  }

});
