//Service for handling logging and list related functions
app.services.service('$listServices', function ($http, $q) {

  this.printLst = function (lst) {
    console.log(JSON.stringify(lst));
  };

  this.printLstItms = function (lst) {
    angular.forEach(lst, function (item, key) {
      console.log(JSON.stringify(item));
    });
  }

  this.selectLstItms = function (itms){
    angular.forEach(itms, function (itm, key) {
      if(!itm.selected){
        itms[key].selected = false;
      }

    });
    return itms;
  }

  this.unselectLstItms = function (itms){
    angular.forEach(itms, function (itm, key) {
      itms[key].selected = false;
    });
    return itms;

  }

});
