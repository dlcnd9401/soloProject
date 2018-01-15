var app = angular.module("Boarddetail",[]);
app.controller("boarddetail", function($rootScope, $scope,$http,$routeParams){
	$rootScope.detailNo = {
		no:$routeParams.detailparam
}
	
	$rootScope.detailview= 
		{
			contents:"",
				id:"",
				title:""
			
			
		};
	
	$rootScope.modeldetailcontents= function(){
			$http.post("DetailList","",{params:{no:$rootScope.detailNo.no}})
			.then(function(result){
				console.log("성공");
				$rootScope.detailview=result.data;
			},function(result){
				console.log("실패");
			});
	}
	$rootScope.modeldetailcontents();
	
	
});