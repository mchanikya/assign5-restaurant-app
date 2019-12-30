(function () {
  "use strict";

  angular.module('public')
  .controller('UserSignUpController',UserSignUpController);

  UserSignUpController.$inject = ['userInfoService','MenuService'];
  function UserSignUpController(userInfoService,MenuService) {
    var $ctrl = this;
    $ctrl.user={};
    $ctrl.user.firstName="";
    $ctrl.user.lastName='';
    $ctrl.user.eMail='';
    $ctrl.user.pNumber='';
    $ctrl.user.favDish='';
    $ctrl.user.favItem={};
    $ctrl.favFound=false;
    $ctrl.infoFlag=false;

    $ctrl.validateUser=function(){
      var response = MenuService.getMenuItems($ctrl.user.favDish);
      response.then(function(data){
        console.log(data);
        $ctrl.favFound=false;
        userInfoService.storeUser($ctrl.user);
        $ctrl.user.favItem=data.data;
        $ctrl.infoFlag=true;
      }).catch(function(error){
        $ctrl.favFound=true;
        $ctrl.infoFlag=false;
      });
    };
  }


})();
