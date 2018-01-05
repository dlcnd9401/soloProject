var app = angular.module("Board",[]);
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
		
		$rootScope.list=[];
	  
	  $rootScope.qwrite= function(){
		   	 console.log("로그인 확인 : ", $rootScope.user);
		   	 location.href ="#!/qwrite";
	
	  };
		
	  $rootScope.boardList = function(){
		  console.log("이벤트시작");
			$http({
				method: 'POST',
				url: 'List'
			})
			.then(function(result){
				console.log(result);
				console.log(result.data.list);
				$rootScope.list = result.data.list;
			},function(result){
				console.log(result);
			});	
		}
	  
	  
	  $rootScope.boardList();
	  
	  
	  
	  
});