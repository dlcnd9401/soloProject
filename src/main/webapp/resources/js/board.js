var app = angular.module("Board",['angularUtils.directives.dirPagination']);
app.controller("board", function($rootScope, $scope,$http,$routeParams){
	$rootScope.type = {
			type: $routeParams.boardtype
		}
	
	
	$rootScope.list=[];

	  
		$rootScope.boardList = function(){
			console.log($rootScope.type.type);
			
			 $http.post("List","",{params: {type:$rootScope.type.type}})
				.then(function(result){
					console.log(result);
					$rootScope.list = result.data.list;
					$rootScope.list_auth = $rootScope.list[0].auth;
					$rootScope.list_type = $rootScope.list[0].type;
				},function(result){
					console.log(result);
				});	
			}
		$rootScope.boardList();
		
		$rootScope.qwrite = function(listauth){
			$rootScope.loginCheck();
			console.log($rootScope.type.type );
			if($rootScope.type.type == "공지"){
				if(!($rootScope.user.id == "admin")){
					alert("'공지' 게시글은 관리자만 작성할 수 있습니다.");
				}else{
					location.href ="#!/qwrite/";
				}
			}else if($rootScope.type.type=="자유"){
				location.href ="#!/qwrite/";
			}else if($rootScope.type.type=="연재"){
				if(!($rootScope.user.auth == 1)){
					alert("'연재'게시글은 작가만 작성할 수 있습니다.");
				}else{
					location.href ="#!/qwrite/";
				}
			}
		}
		

		
		
		$rootScope.detailclick = function(detailparam){
			console.log("click event start");
			location.href = "#!/boarddetail/" + detailparam; 
		}
		
		
});