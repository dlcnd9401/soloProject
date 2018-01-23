var app = angular.module("Awrite",[]);
app.controller("awrite", function($rootScope, $scope,$http,$routeParams){
	console.log($rootScope.LoginStatus);
	$scope.title=$routeParams.awriteparams
	console.log($scope.title);
	
	$scope.insertBowl ={
			title:$scope.title,
			contents:"",
			id:$rootScope.user.id,
			auth:$rootScope.user.auth,
			stitle:""
			}


	$('#contents').val().replace(/\n/g, "<br />");
	
	
	$scope.NovelIDCHECK = function(){
		console.log($rootScope.LoginStatus);
		if($rootScope.LoginStatus==0){
			alert("잘못된 경로입니다.");
			location.href="#!/home";
		}else{
		$http.post("Insert_IDCheck","",{params: {title:$scope.insertBowl.title}})
		.then(function(result){
			console.log("성공");
			if(result.data.Name == $rootScope.user.id){
			console.log("작가 본인");
			}else{
				alert("잘못된 경로입니다!");
				location.href="#!/home";
			}
		},function(result){
			console.log("실패");
		});
	}
}	
	$scope.NovelIDCHECK();
	
	/*
	$scope.con =function(){
		var cons =  $scope.insertBowl.contents;
		var newstr = cons.toString().replace(/\n/g, "<br>");
		$scope.insertBowl.contents = newstr;
		console.log($scope.insertBowl.contents);
	}
	
	*/
	
	$scope.Novelinsert = function(){
	/*	$scope.con();*/
		$http.post("Novel_insert","",{params: $scope.insertBowl})
		.then(function(result){
			console.log("성공");
			console.log(result);
			console.log(result.data.sort);
			alert($scope.title + "의" + result.data.sort +"편이 등록되었습니다!");
			location.href ="#!/story/" + $rootScope.user.auth;
		},function(result){
			console.log("실패");
		});

	}
	
});