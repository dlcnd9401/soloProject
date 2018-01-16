var app = angular.module("Story",[]);
app.controller("story", function($rootScope, $scope,$http,$routeParams){
	$rootScope.auth = {
			auth : $routeParams.storyauth
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

	
	$rootScope.titleclick = function(param){
		console.log(param);
		location.href="#!/adetail/" + param;
		/*$rootScope.titlechk=param;
		codasdsansole.log($rootScope.titlechk);*/
	}
		
});



