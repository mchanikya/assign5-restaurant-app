(function () {
"use strict";

angular.module('public')
.controller('UserSignUpController',UserSignUpController);

UserSignUpController.$inject = ['menuItems'];
function UserSignUpController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
}

})();
