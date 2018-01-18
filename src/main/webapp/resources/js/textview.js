// 앵귤라 모듈 만들기
/*var app = angular.module("Textview",['angularUtils.directives.dirPagination']);*/
var app = angular.module("Textview",[]);
app.controller("textview", function($rootScope,$scope,$http,$routeParams){
	console.log($routeParams.sortparam); // Novel의 NO 값;
	$scope.NovelNo = $routeParams.sortparam;
	
	
	
	$scope.viewpoint = function(){
		  $http.post("textview","",{params:{no:$scope.NovelNo}})
		.then(function(result){
			console.log("성공");
			console.log(result);
			
			$scope.tvdata = result.data.Novel; // Novel data
			console.log($scope.tvdata);
			$scope.tvdata_reply = result.data.NovelReply; // reply data
			$scope.insertRow.title = result.data.Novel.stitle; 
			$scope.insertRow.nv_repno = result.data.Novel.sort;
			console.log($scope.insertRow.nv_repno);
			console.log($scope.insertRow.title);
		},function(data){
			console.log("실패");
		});	
	}
	
	$scope.viewpoint();
	
	$scope.txviewleft=function(leftno){
		console.log(leftno);
		if(leftno.sort == 1){
			alert("첫 편 입니다.");
		}else{
			$scope.moveparam = {
					title:leftno.title,
					sort:leftno.sort-1
			}
			$scope.datamove();
		}
	}
	$scope.txviewright=function(rightno){
		$scope.moveparam = {
				title:rightno.title,
				sort:rightno.sort+1
		}
		$scope.datamove();
	}
	
	/*Move 이동 */
	$scope.datamove = function(){
		  $http.post("TextMove","",{params:{title:$scope.moveparam.title,sort:$scope.moveparam.sort}})
		.then(function(result){
			console.log("성공");
			if(result.data.stat==1){
				location.href = "#!/textview/" + result.data.no;
			}else if(result.data.stat==2){
				alert("마지막 편입니다!");
			}
		},function(result){
			console.log("실패");
		});	
	}
	$scope.insertRow = {
			rep_contents:"",
			rep_id:$rootScope.user.id,
			nv_repno:"",
			title:""
	}
	
	
	   $scope.replyinsert= function(){
		console.log($scope.insertRow);
	      	 $http.post("Reply_insert","",{params:$scope.insertRow})
	    	   .then(function(result){
	    		   $scope.viewpoint();
	    		   $scope.insertRow = {
	    				   rep_contents:"",
	    					rep_id:$rootScope.user.id,
	    					nv_repno:"",
	    					title:""
	    		   }
	    	   },function(result){
	    		   console.log(result);
	    	   });
	      	
	};

});	



	

	
