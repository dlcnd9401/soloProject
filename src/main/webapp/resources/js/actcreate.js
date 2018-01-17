var app = angular.module("Actcreate",[]);
app.controller("actcreate", function($rootScope, $scope,$http,$q,FileService){
	//$id : $rootScope.user.id auth:$rootScope.user.auth
	$rootScope.catelist = {
			id:$rootScope.user.id,  
			title:"",
			introduce:"",
			auth:$rootScope.user.auth,
			type:"",
			img:""
	}
	
	$scope.catelist_reset= function(){
	$rootScope.catelist = {
			id:$rootScope.user.id,  
			title:"",
			introduce:"",
			auth:$rootScope.user.auth,
			type:"",
			img:""
	}
	}
		
	 $rootScope.cateinsert= function(){
     	 console.log("확인 : ", $rootScope.catelist);
     	 if($rootScope.catelist.img==""||$rootScope.catelist.introduce==""||$rootScope.catelist.type==""||$rootScope.catelist.title==""){
     		 	alert("정보를 전부 입력하세요");
     		 	$scope.catelist_reset();
     	 }else{
     		$http.post("ActCreate","",{params: $rootScope.catelist})
        	   .then(function(result){
        		  console.log(result);
        		  $scope.catechk = result.data.cate_Title_Chk;
        		  if($scope.catechk == 0){
        			  alert("이미 있는 제목입니다. 다시 입력하세요.");
        			  $scope.catelist_reset();
        		  }else{
        			  alert("작품이 등록되었습니다.");
        			  location.href="Charm#!/home";
        			  $scope.catelist_reset();
        		  }
        	   },function(result){
        		   console.log(result);
        	   });
          	 
     	 }
     	 
      }
	
	$rootScope.submit = function(){ 
		console.log("submit()!", $scope.file);
		
		var formData = new FormData();
		
		for( var i=0; i<$scope.file.length; i++){ // 다중 파일 작업을 위해 반복문
			formData.append("file",$scope.file[i]); // 리스트가 아니라 단일객체로 보내야 함.
		}
		formData.append("name", $scope.name);
		FileService.async("fileupload",formData,undefined)
		.then(function(){
			var result = FileService.data();
			$rootScope.catelist.img = result.data.Rows[0].path + result.data.Rows[0].name;
			console.log("img 확인 :" +$rootScope.catelist.img);
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