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
      console.log("data",response);
      response.then(function(data){
        $ctrl.favFound=false;
        console.log("item details",data.data);
        console.log("short_Name",data.data.short_name);
        userInfoService.storeUser($ctrl.user);
        $ctrl.user.favItem=data.data;
        $ctrl.infoFlag=true;
      }).catch(function(error){
        console.log('Failed to fetch details');
        $ctrl.favFound=true;
        $ctrl.infoFlag=false;
      });
      // console.log("data.status",data.$$state.status);
      // console.log("data.value",data.$$state['status']);
      // if
    };
  }


})();
