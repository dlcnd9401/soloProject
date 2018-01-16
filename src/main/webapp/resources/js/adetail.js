var app = angular.module("Adetail",[]);
app.controller("adetail", function($rootScope, $scope,$http,$routeParams){
	console.log($routeParams.param);
	$rootScope.titlechk = {
			title:"",
			id:"",
			click:"",
			pref:"",
			introduce:"",
			img:"",
			reg_data:"",
			no:""
	}

	$rootScope.titleparams = {
			no:$routeParams.param
	}
	console.log($rootScope.titleparams);
	$rootScope.actdetail=[];
	
	$rootScope.orderby = function(){
			  $http.post("Adetailparams","",{params:{no:$rootScope.titleparams.no}})
			.then(function(result){
				console.log("성공");
				console.log(result);
				$rootScope.titlechk = result.data;
				console.log($scope.titlechk);
				
				$scope.adetail = function(){
					  $http.post("Adetail","",{params:{title:$rootScope.titlechk.title}})
					.then(function(result){
						console.log("성공");
						console.log(result);
						$rootScope.actdetail = result.data.list;
						console.log($rootScope.actdetail);
					},function(result){
						console.log("실패 :" + result);
					});	
				}
					$scope.adetail();
					$scope.Pref_check();
				
			},function(result){
				console.log("실패 :" + result);
			});	
		}
	
	$rootScope.orderby();
	$scope.webveiw = {
			title:"",
			sort:""
		}
	
	$scope.prefchecked = function(){
		$http.post("Pref_on","",{params:{title:$scope.titlechk.title , id : $rootScope.user.id}})
		.then(function(result){
			console.log("성공 ");	
			console.log(result);
			$rootScope.void = result.data.stat;
			console.log(result.data.stat);
			$scope.Pref_check();
		},function(result){
		});
		
	}
	
	
	$scope.Pref_check = function(){
		$http.post("Pref_check","",{params:{title:$scope.titlechk.title , id : $rootScope.user.id}})
		.then(function(result){
			console.log("성공 ");	
			console.log(result);
			$rootScope.void = result.data.stat;
			console.log("check 값 : " + result.data.stat);
		},function(result){
			
		});
		
	}
	
	
	
	
	$rootScope.viewdetailparam = function(viewdetailno){
		console.log(viewdetailno);
		$rootScope.webview = 
			{title:viewdetailno.title,
			 sort:viewdetailno.sort,
			 stitle:viewdetailno.stitle
			}
		
		
		
		console.log("param 확인 ");
		console.log($rootScope.webview);
		console.log($rootScope.webview.title);
		console.log($rootScope.webview.sort);
	};
	
	
	
	
	
});

















