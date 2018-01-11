var app = angular.module("Story",[]);
app.controller("story", function($rootScope, $scope,$http){
	$rootScope.boardstory = [];
	$rootScope.titlechk = [{
			title:"",
			id:"",
			click:"",
			pref:"",
			introduce:"",
			img:"",
			reg_data:""	
	}]
	
/*	$rootScope.serial3 = function(param){
		console.log("params : " + param)
		$rootScope.auth.auth = param;
		console.log($rootScope.auth.auth);
		
	}*/
	
	$rootScope.serial3 = function(param){
		$rootScope.auth.auth = param;
		$rootScope.story();
	}

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
		$rootScope.titlechk.title=param;
	}
		
});



