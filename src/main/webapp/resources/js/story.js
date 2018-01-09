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
		console.log("params : " + param)
		$rootScope.auth.auth = param;
		console.log($rootScope.auth.auth);
		$rootScope.story();
	}

	$rootScope.story = function(){
		  console.log("연재 리스트 출력 시작");	
		  console.log("auth 값" + $rootScope.auth);
		 $http.post("Serial","",{params:$rootScope.auth})
			.then(function(result){
				console.log(result);
				console.log(result.data.list);
				$rootScope.boardstory = result.data.list;
			},function(result){
				console.log(result);
			});	
		}
	
	$rootScope.story();

	
	$rootScope.titleclick = function(param){
		console.log("params:"+param);
		$rootScope.titlechk.title=param;
		console.log($rootScope.titlechk.title);
	}
		
});



