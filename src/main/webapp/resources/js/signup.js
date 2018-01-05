// 앵귤라 모듈 만들기
var app = angular.module("SignUp",[]);
app.controller("signup", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
	


	   $rootScope.signUp= function(){
      	 console.log("확인 : ", $rootScope.user);
      	 $http.post("signup","",{params: $rootScope.user})
    	   .then(function(result){
    		  console.log(result);
    	   },function(result){
    		   console.log(result);
    	   });
       }
});