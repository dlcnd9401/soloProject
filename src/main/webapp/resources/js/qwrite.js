var app = angular.module("Qwrite",[]);
app.controller("qwrite", function($rootScope, $scope,$http){
	$rootScope.Tywrite = {
			id:"",
			contents:"",
			title:"",
			auth:$rootScope.list_auth,
			type:$rootScope.list_type
		
	}
	
	console.log($rootScope.Tywrite);
	
	   $rootScope.writeType= function(){
     	 console.log("확인 : ", $rootScope.Tywrite);
     	 $http.post("Authwrite","",{params: $rootScope.Tywrite})
   	   .then(function(result){
   		  console.log(result);
   	   },function(result){
   		   console.log(result);
   	   });
      }
	
}); 