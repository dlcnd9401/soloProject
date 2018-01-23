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
	
	/*조회수 이벤트 */
	$rootScope.boardlistclick_up = function(){
		$http.post("BoardList_Click","",{params: {no:$rootScope.detailNo.no}})
		.then(function(result){
			console.log("성공");
		},function(result){
			console.log("실패");
		});	
		
		
	}
	
	/*디테일 화면 데이터 끌어오기 */
	$rootScope.modeldetailcontents= function(){
			$http.post("DetailList","",{params:{no:$rootScope.detailNo.no}})
			.then(function(result){
				console.log("성공");
				console.log(result);
				$rootScope.detailview=result.data.list_data;
				console.log($rootScope.detailview);
				$rootScope.reply_data = result.data.reply;
				$rootScope.boardlistclick_up();
				console.log($scope.reply_data);
			},function(result){
				console.log("실패");
			});
	}
	$rootScope.modeldetailcontents();
	
	/*입력 그릇 */
	$rootScope.replylist_index = {
			   title:"",
			   req_contents:"",
			   type:"",
			   req_id:$rootScope.user.id
	   }

	/*댓글 끌어오기 */
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
	/*댓글 입력 */
	   $rootScope.boardinset= function(){
	      	 $http.post("List_Reply_insert","",{params: $rootScope.replylist_index})
	      	 .then(function(result){
	    		   console.log("성공");
	    		   $rootScope.modeldetailcontents();
	    		  },function(result){
	    		   console.log(result);
	    	   });
	};
	
	
	$scope.boarddel =function(){
	  	 $http.post("Del_Y","",{params: {no:$rootScope.detailview.no}})
      	 .then(function(result){
    		   console.log("성공");
    		   alert("삭제 완료!");
    		   location.href = "#!/board/" + $rootScope.detailview.type;
    		  },function(result){
    		   console.log(result);
    	   });
		
	}
	  
});