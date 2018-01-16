var app = angular.module("Boarddetail",['angularUtils.directives.dirPagination']);
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
	
	$rootScope.reply_data =	{};
	
	$rootScope.modeldetailcontents= function(){
			$http.post("DetailList","",{params:{no:$rootScope.detailNo.no}})
			.then(function(result){
				console.log("성공");
				console.log(result);
				$rootScope.detailview=result.data.list_data;
				$rootScope.reply_data = result.data.reply;
				console.log($scope.reply_data);
			},function(result){
				console.log("실패");
			});
	}
	$rootScope.modeldetailcontents();
	
	$rootScope.replylist_index = {
			   title:"",
			   req_contents:"",
			   type:"",
			   req_id:$rootScope.user.id
	   }

	$rootScope.boardset= function(paramstype){
		console.log(paramstype);
		$rootScope.replylist_index = {
				   title:paramstype,
				   req_contents:$rootScope.replylist_index.req_contents,
				   type:$rootScope.detailview.type,
				   req_id:$rootScope.user.id
		   }
		
		$rootScope.boardinset();
		
	}
	
	   $rootScope.boardinset= function(){
	      	 $http.post("List_Reply_insert","",{params: $rootScope.replylist_index})
	      	 .then(function(result){
	    		   console.log("성공");
	    		   $rootScope.modeldetailcontents();
	    		  },function(result){
	    		   console.log(result);
	    	   });
	};
	  
});