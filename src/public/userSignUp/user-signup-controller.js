(function () {
  "use strict";

  angular.module('public')
  .controller('UserSignUpController',UserSignUpController);

  UserSignUpController.$inject = ['userInfoService'];
  function UserSignUpController(userInfoService) {
    var $ctrl = this;
    $ctrl.user={};
    $ctrl.user.firstName="";
    $ctrl.user.lastName='';
    $ctrl.user.eMail='';
    $ctrl.user.pNumber='';
    $ctrl.user.favDish='';
    $ctrl.validateUser=function(){
      console.log($ctrl.user.firstName);
      console.log($ctrl.user.lastName);
      console.log($ctrl.user.eMail);
      console.log($ctrl.user.pNumber);
      console.log($ctrl.user.favDish);
      userInfoService.storeUser($ctrl.user);
    };
  }


})();
