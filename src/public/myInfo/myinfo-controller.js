(function(){
  'use strict';
  angular.module('public')
  .controller('myInfoController',myInfoController);

  myInfoController.$inject=['userInfoService'];
  function myInfoController(userInfoService){
    var $ctrl=this;
    $ctrl.user=userInfoService.getUserInfo();
  }

})();
