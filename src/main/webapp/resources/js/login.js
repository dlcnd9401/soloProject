
var app = angular.module("Login",[]);
app.controller("login", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
	
	
    $rootScope.login= function(){
   	 console.log("로그인 확인 : ", $rootScope.user);
   	 $http.post("login","",{params: $rootScope.user})
 	   .then(function(result){
 		 if(result.data.no == undefined){
			   alert("회원가입 하세요");
			   location.href="#!/signup";
		   }else{
			   $rootScope.user = result.data;
			   location.href="#!/home";
		   }
 	   },function(result){
 		   console.log(result);
 	   });
    }
});