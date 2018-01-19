var app = angular.module("Story",[]);
app.controller("story", function($rootScope, $scope,$http,$routeParams){
	$rootScope.auth = {
			auth : $routeParams.storyauth
	}
	$scope.kinds = {
			type : ""
	}
	
	
	$rootScope.boardstory = [];
	
	
	$rootScope.story = function(){
		 $http.post("Serial","",{params:$rootScope.auth})
			.then(function(result){
				$rootScope.boardstory = result.data.list;
			},function(result){
				console.log("story 실패");
			});	
		}
	
	$rootScope.story();

	$scope.fieldTable = [
		{title: "전체"}, {title: "판타지" }, {title: "무협"},{title: "역사"}, {title: "로맨스"},
		  {title: "로맨스 판타지"}, {title: "스릴러"}, {title: "문학"},{title: "기타"}];

	   $scope.selected = $scope.fieldTable[0];

	   $scope.hasChanged = function() {
			  $scope.kinds.type = $scope.selected.title;
			  $scope.kindstory();
	   }
	
	
	
	$scope.kindstory = function(){
		if($scope.kinds.type== "전체"){
			$rootScope.story();
		}else{
		 $http.post("KindList","",{params:{auth:$rootScope.auth.auth,type:$scope.kinds.type}})
			.then(function(result){
				console.log(result);
				$rootScope.boardstory = result.data.list;
			},function(result){
				console.log("실패");
			});
		
	}
}
	
	$rootScope.titleclick = function(param){
		console.log(param);
		location.href="#!/adetail/" + param;
		/*$rootScope.titlechk=param;
		codasdsansole.log($rootScope.titlechk);*/
	}
		
});



