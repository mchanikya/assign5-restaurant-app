(function(){
	'use strict';

	angular.module('common')
	.service('userInfoService',userInfoService)
	.filter('splitStringAndNumber', [ '$filter' ,function($filter){
	    return function(string){
	      var matches = string.match(/\d+|[a-z]+/ig);
	      return matches[0];
	    };
	}]);

	function userInfoService(){
		var service=this;
		service.userDetails=[];
		service.getUserInfo=function(){
			return service.userDetails[service.userDetails.length-1];
		};
		service.storeUser=function(user){
			service.userDetails.push(user);
		};
	}




})();
