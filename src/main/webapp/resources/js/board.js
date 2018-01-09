var app = angular.module("Board",['angularUtils.directives.dirPagination']);
app.controller("board", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
		$rootScope.list_data= {
				no:"",
				title:"",
				contents:"",
				click:"",
				id:"",
				reg_date:""
		};
		
		$rootScope.detailparam = [{
			no:""
	}]
		
		$rootScope.list=[];
	  $rootScope.qwrite= function(){
		   	 console.log("로그인 확인 : ", $rootScope.user);
		   	 location.href ="#!/qwrite";
	  };
	  
	  $rootScope.boardkinds= function(parambody){
			console.log("parambody : "+ parambody);
			$rootScope.type.type = parambody;
			console.log($rootScope.type);
			$rootScope.boardList();
			};
	  
	  
		$rootScope.boardList = function(){
			 $http.post("List","",{params:$rootScope.type})
				.then(function(result){
					$rootScope.list = result.data.list;
					console.log($rootScope.list);
				},function(result){
					console.log(result);
				});	
			}
		$rootScope.boardList();
		
		
		
		$rootScope.movedetail = function(detailno){
			console.log(detailno);
			$rootScope.detailparam.no = detailno;

			
		}
});