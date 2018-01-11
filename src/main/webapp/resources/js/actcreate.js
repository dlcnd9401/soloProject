var app = angular.module("Actcreate",[]);
app.controller("actcreate", function($rootScope, $scope,$http,$q,FileService){
	//$id : $rootScope.user.id auth:$rootScope.user.auth
	$rootScope.catelist = {
			id:"admin",  
			title:"",
			introduce:"",
			auth:1,
			type:""
	}

		
	 $rootScope.cateinsert= function(){
     	 console.log("확인 : ", $rootScope.catelist);
     	 $http.post("ActCreate","",{params: $rootScope.catelist})
   	   .then(function(result){
   		  console.log(result);
   	   },function(result){
   		   console.log(result);
   	   });
      }
	
	/*fileupload*/
	$scope.submit = function(){ 
		console.log("submit()!", $scope.file);
		
		var formData = new FormData();
		
		for( var i=0; i<$scope.file.length; i++){ // 다중 파일 작업을 위해 반복문
			formData.append("file",$scope.file[i]); // 리스트가 아니라 단일객체로 보내야 함.
		}
		formData.append("name", $scope.name);
		
		FileService.async("fileupload",formData,undefined)
		.then(function(){
			var result = FileService.data();
			console.log(result);
		});	
	}
});

app.directive("file", () => {
		var config = {};
		config.scope={file:"="};
		config.link =(scope, elements) =>{ // input file 태그 
			elements.bind("change",function(event){ //이벤트가 들어올 때 전달.
				var file = event.target.files;
				scope.file = file ? file : undefined
			});
		};
		console.log(config);
		return config;
});

