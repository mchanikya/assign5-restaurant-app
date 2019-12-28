(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (shortName) {
    var response = $http({
          method: "GET",
          url: (ApiPath + 'menu_items/'+shortName+'.json'),
        });
    return response;
  };

}



})();
