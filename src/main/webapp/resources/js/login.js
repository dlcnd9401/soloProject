
var app = angular.module("Login",[]);
app.controller("login", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
	
	
    $rootScope.login= function(){
   	 console.log("로그인 확인 : ", $rootScope.user);
   	 $http.post("login","",{params: $rootScope.user})
 	   .then(function(result){
 		 if(result.data.no == undefined){
			   alert("탈퇴 처리된 회원입니다.");
		   }else{
			   $rootScope.user = result.data;
			   location.href="#!/home";
		   }
 	   },function(result){
 		   console.log(result);
 	   });
    }
});