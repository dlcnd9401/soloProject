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
			no:"",
			category_click:"",
	}

	$rootScope.titleparams = {
			no:$routeParams.param
	}
	console.log($rootScope.titleparams);
	$rootScope.actdetail=[];
	
	/*1. 카테고리 값( 2. list목차 값(3. 실행, 4. 선호작 유무 체크 )) */
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
		$http.post("Pref_on","",{params:{title:$rootScope.titlechk.title , id : $rootScope.user.id}})
		.then(function(result){
			console.log("성공 ");	
			console.log(result);
			$rootScope.void = result.data.stat;
			console.log(result.data.stat);
			$scope.Pref_check();
		},function(result){
		});
		
	}
	$rootScope.click_up = function(){
		$http.post("Textview_click","",{params:{title:$rootScope.titlechk.title ,no:$rootScope.webview.no}})
		.then(function(result){
			console.log("성공 ");	
		},function(result){
			console.log("실패");
		});
		
	}
	
	/*data-ng-if 로 선호작 해제 / 등록 설정하기 */
	$scope.Pref_check = function(){
		$http.post("Pref_check","",{params:{title:$rootScope.titlechk.title , id : $rootScope.user.id}})
		.then(function(result){
			console.log("성공 ");	
			console.log(result);
			$rootScope.void = result.data.stat;
			console.log("check 값 : " + result.data.stat);
			$rootScope.orderbybase();
		},function(result){
			
		});
	}
	/*거미줄 너무한데... 카테고리 값 2*/
	$rootScope.orderbybase = function(){
		  $http.post("Adetailparams","",{params:{no:$rootScope.titleparams.no}})
		.then(function(result){
			$rootScope.titlechk = result.data;
			console.log($scope.titlechk);

		},function(result){
			console.log("실패 :" + result);
		});	
	}
	
	
	
	
	
	
	$rootScope.viewdetailparam = function(viewdetailno){
		console.log(viewdetailno.no);
		
		$rootScope.webview = 
			{title:viewdetailno.title,
			 sort:viewdetailno.sort,
			 stitle:viewdetailno.stitle,
			 no:viewdetailno.no
			}
		
		$rootScope.click_up();
		
		console.log("param 확인 ");
		console.log($rootScope.webview);
		console.log($rootScope.webview.title);
		console.log($rootScope.webview.sort);
	};
	
	
	
	
	
});

















