var app = angular.module("Adetail",[]);
app.controller("adetail", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
	
	$rootScope.actdetail = [];
	
	$rootScope.adetail = function(){
		console.log("STring" + $rootScope.titlechk.title);
			  $http.post("Adetail","",{params:$rootScope.titlechk.title})
			.then(function(result){
				console.log("actdectail start");
				console.log(result);
				$rootScope.actdetail = result.data.list;
				console.log($rootScope.actdetail);
			},function(result){
				console.log("실패 :" + result);
			});	
		}
	$rootScope.adetail();
	
	
});