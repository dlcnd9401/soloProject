
var app = angular.module("Pref",['angularUtils.directives.dirPagination']);
app.controller("pref", function($rootScope, $scope,$http){
	
	
	$rootScope.userpref = {
			title:"",
			introduce:"",
			id:"",
			click:"",
			pref:"",
			img:""
	}
	
	
	$rootScope.pref_list_user= function(){
		$http.post("Pref_List","",{params:{id:$rootScope.user.id}})
		.then(function(result){
			console.log("성공");
			$rootScope.userpref=result.data.pref;
		},function(result){
			console.log("실패");
		});
}
	$rootScope.pref_list_user();

});