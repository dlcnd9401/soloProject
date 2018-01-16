// 앵귤라 모듈 만들기
var app = angular.module("Textview",['angularUtils.directives.dirPagination']);
app.controller("textview", function($rootScope, $scope,$http){
	
	console.log($rootScope.webview);
	$rootScope.movsort = {
			title:"",
			sort: ""
	}
	$rootScope.tvdata = {
			title:"",
			stitle:"",
			contents:"",
			sort:"",
			id:""
	}
	$rootScope.replyindex = {
			   title:"",
			   req_contents:"",
			   nv_repno:"",
			   req_id:$rootScope.user.id
	   }
	
	
	$rootScope.tvdata_reply=[];
	
	$rootScope.viewpoint = function(){
		  $http.post("SortSearch","",{params:$rootScope.webview})
		.then(function(data){
			console.log("성공");
			$rootScope.tvdata = data.data.sort;
			$rootScope.tvdata_reply = data.data.reply;
			$rootScope.replyindex.title = $rootScope.tvdata.stitle;
			$rootScope.replyindex.nv_repno = $rootScope.tvdata.sort;
			
			
		},function(data){
			console.log("실패 :" + result);
		});	
	}
	$rootScope.viewpoint();
	
	$rootScope.txviewright=function(sortmob){
		console.log(sortmob);
		$rootScope.movsort = {
				title:sortmob.title,
				sort:sortmob.sort+1
		}
		console.log($rootScope.movsort);
		$rootScope.sortpoint();
	}
	
	/**/
	$rootScope.txviewleft= function(sortmob){
		console.log(sortmob);
		$rootScope.movsort = {
				title:sortmob.title,
				sort:sortmob.sort-1
		}
		console.log($rootScope.movsort);
		$rootScope.sortpoint();
	}
	
	/* 편수 넘기기 버튼  */
	$rootScope.sortpoint = function(){
		  $http.post("SortSearch","",{params:$rootScope.movsort})
		.then(function(data){
			console.log("성공");
			console.log(data);
			$rootScope.tvdata = data.data.sort;
			$rootScope.tvdata_reply = data.data.reply;
			$rootScope.replyindex.title = $rootScope.tvdata.stitle;
			$rootScope.replyindex.nv_repno = $rootScope.tvdata.sort;
		},function(data){
			console.log("실패 :" + data);
		});	
	}
	
	   $rootScope.replyinsert= function(){
	      	 console.log("확인 : ", $rootScope.replyindex);
	      	 $http.post("Reply_insert","",{params: $rootScope.replyindex})
	    	   .then(function(result){
	    		  $rootScope.abc = $rootScope.replyindex.nv_repno;
	    		  console.log($rootScope.abc);
	    		  },function(result){
	    		   console.log(result);
	    	   });
	      	$rootScope.viewpoint();
	};
	
});