// 앵귤라 모듈 만들기
var app = angular.module("Textview",[]);
app.controller("textview", function($rootScope, $scope,$http){
	
	console.log($rootScope.webview);
	$rootScope.movsort = {
			title:"",
			sort: ""
	}
	$rootScope.tvdata = {
			title:"",
			stitle:"",
			contents:"",
			sort:"",
			id:""
	}
	
	$rootScope.viewpoint = function(){
		  $http.post("SortSearch","",{params:$rootScope.webview})
		.then(function(data){
			console.log("성공");
			$rootScope.tvdata = data.data;
		},function(data){
			console.log("실패 :" + result);
		});	
	}
	$rootScope.viewpoint();
	
	$rootScope.txviewright=function(sortmob){
		console.log(sortmob);
		$rootScope.movsort = {
				title:sortmob.title,
				sort:sortmob.sort+1
		}
		console.log($rootScope.movsort);
		$rootScope.sortpoint();
	}
	
	
	$rootScope.txviewleft= function(sortmob){
		console.log(sortmob);
		$rootScope.movsort = {
				title:sortmob.title,
				sort:sortmob.sort-1
		}
		console.log($rootScope.movsort);
		$rootScope.sortpoint();
	}
	
	$rootScope.sortpoint = function(){
		  $http.post("SortSearch","",{params:$rootScope.movsort})
		.then(function(result){
			console.log("성공");
			console.log(result);
			if(result.data.sort == 0){
				console.log("result null")
			}else{
				$rootScope.tvdata = result.data;	
			}
			
		},function(data){
			console.log("실패 :" + result);
		});	
	}
	
});