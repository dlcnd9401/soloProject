
var app = angular.module("Login",[]);
app.controller("login", function($rootScope, $scope,$http){

	
	
    $rootScope.login= function(){
   	 console.log("로그인 확인 : ", $rootScope.user);
   	 $http.post("login","",{params: $rootScope.user})
 	   .then(function(result){
 		   console.log(result.data.LoginChecked);
 		   if(result.data.LoginChecked==1){
			   $rootScope.user = result.data;
			   $rootScope.loginCheck();
			   console.log($rootScope.user);
			   location.href="#!/home";
			   
 		   }else if(result.data.LoginChecked==0){
 			   alert("비밀번호 오류입니다. 다시 입력하세요.");
 			   $rootScope.userLogindata_reset();
 		   }else if(result.data.LoginChecked==2){//2
			   alert("회원가입 하세요");
			   location.href="#!/signup";
			   $rootScope.userLogindata_reset();
 		   }
 	   },function(result){
 		   console.log(result);
 	   });
   	
    }
});