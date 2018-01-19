var app = angular.module("Qwrite",[]);
app.controller("qwrite", function($rootScope, $scope,$http,$routeParams){
	$scope.Tywrite = {
			id:$rootScope.user.id,
			contents:"",
			title:"",
			auth:$scope.auth,
			type:""
		
	}
	
	$scope.auth = $routeParams.insertauth;
	$scope.typecounting = function(){
		if($scope.auth == 3){
			$scope.Tywrite.type ="공지";
			$scope.Tywrite.auth = $scope.auth;
		}else if($scope.auth == 1){
			$scope.Tywrite.type="연재";
			$scope.Tywrite.auth = $scope.auth;
		}else if($scope.auth == 2){
			$scope.Tywrite.type ="자유";
			$scope.Tywrite.auth = $scope.auth;
	}
		$scope.admincheck();
}
	
	
	$scope.admincheck = function(){
		if($rootScope.LoginStatus==0){
			alert("잘못된 경로입니다.");
			location.href="#!/home";
		}else{
		if($scope.Tywrite.auth == 3){
			if(!($rootScope.user.id =="admin")){
				alert("잘못된 경로입니다. 공지 게시판은 관리자만 작성할 수 있습니다!");
				location.href="#!/home";
			}
		}else if($scope.Tywrite.auth==1){
			if(!($rootScope.user.auth == $scope.Tywrite.auth)){
				alert("잘못된 경로입니다. 작가분들만 작성하실 수 있습니다!");
				location.href="#!/home";
			}
		}
	}
}
	$scope.typecounting();
	

	
	console.log($scope.Tywrite);

	
	   $rootScope.writeType= function(){
     	 console.log("확인 : ", $scope.Tywrite);
     	 $http.post("Authwrite","",{params: $scope.Tywrite})
   	   .then(function(result){
   		  location.href = "#!/board";
   	   },function(result){
   		   console.log(result);
   	   });
      }
	
}); 