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
    $ctrl.favFound=false;
    $ctrl.validateUser=function(){
      console.log($ctrl.user.firstName);
      console.log($ctrl.user.lastName);
      console.log($ctrl.user.eMail);
      console.log($ctrl.user.pNumber);
      console.log($ctrl.user.favDish);
      var response = MenuService.getMenuItems($ctrl.user.favDish);
      console.log("data",response);
      response.then(function(data){
        $ctrl.favFound=false;
        console.log("short_Name",data.data.short_name);
        userInfoService.storeUser($ctrl.user);
      }).catch(function(error){
        console.log('Failed to fetch details');
        $ctrl.favFound=true;
      });
      // console.log("data.status",data.$$state.status);
      // console.log("data.value",data.$$state['status']);
      // if
    };
  }


})();
