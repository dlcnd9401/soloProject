var app = angular.module("Boarddetail",[]);
app.controller("boarddetail", function($rootScope, $scope,$http){
	
	$rootScope.detailview= [
		{
			contents:"",
				id:"",
				title:""
			
			
		}
	];
	console.log($rootScope.detailparam.no);
	
	$rootScope.modeldetailcontents= function(){
			$http.post("DetailList","",{params:$rootScope.detailparam})
			.then(function(result){
				console.log("성공");
				console.log(result.data);
				$rootScope.detailview=result.data;
				console.log($rootScope.detailview);
			},function(result){
				console.log("실패");
			});
	}
	$rootScope.modeldetailcontents();
	
	
});