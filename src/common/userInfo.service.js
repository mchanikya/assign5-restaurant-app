(function(){
	'use strict';

	angular.module('common')
	.service('userInfoService',userInfoService);

	function userInfoService(){
		var service=this;
		service.userDetails=[];
		service.getUserInfo=function(){
			return service.userDetails[0];
		};
		service.storeUser=function(user){
			service.userDetails.push(user);
			console.log("In Service",user.firstName);
			console.log("In Service",user.lastName);
			console.log("In Service",user.eMail);
			console.log("In Service",user.pNumber);
			console.log("In Service",user.favDish);
		};
	}

})();
