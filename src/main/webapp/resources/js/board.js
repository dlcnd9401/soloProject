var app = angular.module("Board",['angularUtils.directives.dirPagination']);
app.controller("board", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
		$rootScope.list_auth = ""
		
		$rootScope.detailparam = [{
			no:""
	}]
		
		$rootScope.list=[];
	  /*$rootScope.qwrite= function(){
		   	 console.log("로그인 확인 : ", $rootScope.user);
		   	 
		   	 location.href ="#!/qwrite";
	  };*/
	  
	  $rootScope.boardkinds= function(parambody){
			$rootScope.type.type = parambody;
			$rootScope.boardList();
			};
	  
	  
		$rootScope.boardList = function(){
			 $http.post("List","",{params:$rootScope.type})
				.then(function(result){
					$rootScope.list = result.data.list;
					console.log($rootScope.list);
					$rootScope.list_auth = $rootScope.list[0].auth;
					$rootScope.list_type = $rootScope.list[0].type;
					console.log($rootScope.list_auth);
				},function(result){
					console.log(result);
				});	
			}
		$rootScope.boardList();
		
		
		
		$rootScope.movedetail = function(detailno){
			console.log(detailno);
			$rootScope.detailparam.no = detailno;
		}
		
		$rootScope.qwrite = function(listauth){
		   	 location.href ="#!/qwrite";
			console.log(listauth);
		}
		
});