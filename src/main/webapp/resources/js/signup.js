// 앵귤라 모듈 만들기
var app = angular.module("SignUp",[]);
app.controller("signup", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
	
	$scope.usersignup = {
			id:"",
			name:"",
			pwchk:"",
			pw:"",
			tel:"",
			book:""
	}

	/*회원가입 user scope 초기화*/
	$scope.user_reset=function(){
		$scope.usersignup = {
					id:"",
					name:"",
					pwchk:"",
					pw:"",
					tel:"",
					book:""
		  }
	}

	   $rootScope.signUp= function(){
      	 
      	 if($scope.usersignup.pw==""||$scope.usersignup.pwchk==""||$scope.usersignup.name==""||$scope.usersignup.id==""||$scope.usersignup.tel==""){
      		 alert("정보를 모두 입력해주세요!");
      		$scope.user_reset();
      	 }else{
      	 if(!($scope.usersignup.pw == $scope.usersignup.pwchk)){
      		alert("비밀번호와 비밀번호 확인이 다릅니다. 다시 확인해주세요.");
      		$scope.user_reset();
      	 }else{   

      		$http.post("signup","",{params: $scope.usersignup})
      	   .then(function(result){
     		  $scope.check = result.data.idcheck;
     		  
     		  if($scope.check == 0 ){
     			  alert("중복된 id 입니다. id를 다시 입력하세요.");
     			 $scope.user_reset();
     		  }else {
     			  alert("회원 가입 완료");
     			 $scope.user_reset();
     			  location.href = "#!/home";  
     		  }
     		  
     	   },function(result){
     		   console.log(result);
     	   });
      	 }

       }
	  }
});