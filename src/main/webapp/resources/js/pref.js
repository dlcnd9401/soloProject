
var app = angular.module("Pref",['angularUtils.directives.dirPagination']);
app.controller("pref", function($rootScope, $scope,$http,$routeParams){
	
	
	
	$rootScope.userpref = {
			title:"",
			introduce:"",
			id:"",
			click:"",
			pref:"",
			img:"",
			no:"",
			type:""
	}
	$scope.prefdeleted = function(prefno){
		console.log(prefno);
		$http.post("Pref_Up","",{params:{id:$routeParams.userid,title:prefno}})
		.then(function(result){
			console.log(result);
			$rootScope.pref_list_user();
		},function(result){
			console.log("실패");
		});
		
	}
	
	
	$rootScope.pref_list_user= function(){
		$http.post("Pref_List","",{params:{id:$routeParams.userid}})
		.then(function(result){
			console.log(result);
			$rootScope.loginCheck();
			if($rootScope.user.id == $routeParams.userid){
				$rootScope.userpref=result.data.pref;
			}else{
				alert("잘못된 접근 입니다.");	
				location.href="#!/home";
			}
			
		},function(result){
			console.log("실패");
		});
}
	$rootScope.pref_list_user();

});