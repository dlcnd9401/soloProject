var app = angular.module("Home",[]);
app.controller("home", function($rootScope, $scope,$http,$routeParams){


	$rootScope.ListData = function(){
		$http.post("NewListData","","").then(function(result){
			console.log(result);
			console.log(result.data.notice);

			$rootScope.noticeList = result.data.notice
			$rootScope.novelList = result.data.novel
			$rootScope.freeList = result.data.free
			$rootScope.PrefList = result.data.pref
			$rootScope.ClickList = result.data.click
				
		},function(result){
		})
	}
	
	$rootScope.ListActData = function(){
		$http.post("NewListAct_Data","","").then(function(result){
			console.log(result);
			$rootScope.actList = result.data.actor
			$rootScope.amaList = result.data.amature
			$rootScope.ListData();
		},function(result){
		})
	}
	
	$rootScope.ListActData();
	$scope.detailclick1 = function(detailparam){
		console.log("click event start");
		location.href = "#!/boarddetail/" + detailparam; 
	}
	
	$scope.titleclick1 = function(param){
		console.log(param);
		location.href="#!/adetail/" + param;
	}
});


