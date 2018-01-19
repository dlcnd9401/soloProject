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
	

/*	select box */

		$scope.fieldTable = [{
		  title: "장르"}, {title: "판타지" }, {title: "무협"},{title: "역사"}, {title: "로맨스"},
		  {title: "로맨스 판타지"}, {title: "스릴러"}, {title: "문학"},{title: "기타"}];

		 $scope.selected = $scope.fieldTable[0];

		$scope.hasChanged = function() {
			  $rootScope.catelist.type = $scope.selected.title;
			  
		}

	
	
	
	$rootScope.submit = function(){ 
		console.log("submit()!", $scope.file);
		
		var formData = new FormData();
		
		if($scope.file !=undefined){
			if($rootScope.catelist.introduce==""||$rootScope.catelist.type==""||$rootScope.catelist.title==""){
     		 	alert("정보를 전부 입력하세요");
     		 	$scope.catelist_reset();
     	 }else{
     		for( var i=0; i<$scope.file.length; i++){ // 다중 파일 작업을 위해 반복문
    			formData.append("file",$scope.file[i]); // 리스트가 아니라 단일객체로 보내야 함.
    		}
    		formData.append("name", $scope.name);
    		
    		
    		console.log($scope.catelist);
    		FileService.async("fileupload",formData,$rootScope.catelist)
    		.then(function(){
    			var result = FileService.data();
    			$rootScope.catelist.img = result.data.Rows[0].path + result.data.Rows[0].name;
    			console.log("img 확인 :" +$rootScope.catelist.img);
    		});
     	 }
			
	}else{
		alert("이미지 파일이 없습니다.");
	}
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