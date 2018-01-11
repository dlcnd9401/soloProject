var app = angular.module("Adetail",[]);
app.controller("adetail", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
	
	$rootScope.actdetail = [];
	

	
	$rootScope.adetail = function(){
			  $http.post("Adetail","",{params:$rootScope.titlechk.title})
			.then(function(result){
				console.log("성공");
				$rootScope.actdetail = result.data.list;
				console.log($rootScope.actdetail);
			},function(result){
				console.log("실패 :" + result);
			});	
		}
	$rootScope.adetail();
	
	$rootScope.viewdetailparam = function(viewdetailno){
		console.log(viewdetailno);
		$rootScope.webview = 
			{title:viewdetailno.title,
			 sort:viewdetailno.sort
			}
		
		
		
		console.log("param 확인 ");
		console.log($rootScope.webview);
		console.log($rootScope.webview.title);
		console.log($rootScope.webview.sort);
	};
});