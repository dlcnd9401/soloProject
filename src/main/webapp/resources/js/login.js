
var app = angular.module("Login",[]);
app.controller("login", function($rootScope, $scope,$http){

	$scope.signmove = function(){
		location.href="#!/signup";
	}
	
	
    $rootScope.login= function(){
   	 $http.post("login","",{params: $rootScope.user})
 	   .then(function(result){
 		   if(result.data.LoginChecked==1){
 			   console.log(result.data.auto);
 			  $rootScope.user = result.data;
			   $rootScope.loginCheck();
					if(result.data.auto==1){
			   alert("조회수 1000 달성! '작가'등급이 되셨습니다.");
			   $rootScope.promotionCheck==2;
		   }
				alert($rootScope.user.id + "님 환영합니다!")
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