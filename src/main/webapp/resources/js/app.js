
var app = angular.module("Charm", ["ngRoute","Home","Board","Boarddetail","Login","SignUp","Textview","Actcreate","Story","Adetail","Qwrite","Pref"]);

app.config(function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "resources/views/home.html",
		controller : "home"
	}).when("/board/:boardtype", {
		templateUrl : "resources/views/board.html",
		controller : "board"
	}).when("/boarddetail/:detailparam", {
		templateUrl : "resources/views/detailtoy.html",
		controller : "boarddetail"
	}).when("/actcreate", {
		templateUrl : "resources/views/actcreate.html",
		controller : "actcreate"
	}).when("/signup", {
		templateUrl : "resources/views/SignUp.html",
		controller : "signup"
	}).when("/login", {
		templateUrl : "resources/views/Login.html",
		controller : "login"
	}).when("/textview", {
		templateUrl : "resources/views/textview.html",
		controller : "textview"
	}).when("/story/:storyauth", {
		templateUrl : "resources/views/story.html",
		controller : "story"
	}).when("/adetail/:param", {
		templateUrl : "resources/views/adetail.html",
		controller : "adetail"
	}).when("/qwrite", {
		templateUrl : "resources/views/Qwrite.html",
		controller : "qwrite"
	}).when("/pref", {
		templateUrl : "resources/views/pref.html",
		controller : "pref"
	}).otherwise({redirectTo: "/home"});
});

app.run(function($rootScope,$http){
	$rootScope.header ='resources/views/header.html';
	$rootScope.nav = 'resources/views/nav.html';
	$rootScope.footer = 'resources/views/footer.html';
	$rootScope.navEvnet = function(){
	$rootScope.navDis = location.hash;
};
$rootScope.titlechk ={
		title:""
};
$rootScope.user = {
		no:"",
		id:"",
		name:"",
		pwchk:"",
		pw:"",
		tel:"",
		del_yn: "",
		book:"",
		auto:""
}
$rootScope.promotionCheck=2;

$rootScope.userLogindata_reset = function(){
	$rootScope.user = {
			no:"",
			id:"",
			name:"",
			pwchk:"",
			pw:"",
			tel:"",
			del_yn: "",
			book:""
	}
}





$rootScope.prefmove = function(param_userid){
	console.log(param_userid);
	$rootScope.user.id=param_userid;
	console.log($rootScope.user);
}

	

	$rootScope.fileUpload = (url, formData, param) =>{
		var result = {}

		$http.post(url, formData, { //url, param 데이터
			headers : {"Content-Type": undefined},
			params : param
		}).then(data => {
			result = data;
		}, data => {
			result = data;
		});

		return result;

	};
	
	$rootScope.logout = function(){
		$http.post("Logoff","","").then(function(result){
			$rootScope.LoginStatus = 0;
 			console.log("userdata 초기화");
 			$rootScope.loginCheck();
			location.href="#!/home";
		},function(result){
		})
	}
	
/*	$rootScope.auto = function(){
		console.log("AUTO확인" + $rootScope.user.auto);
		 if($rootScope.user.auto == 1){
		 $rootScope.promotionCheck=1;
	 }
		
	}*/
	
	 $rootScope.loginCheck= function(){
	   	 $http.post("LoginCheck","","")
	 	   .then(function(userdata){
	 		 if(userdata.data.status == 0){
	 			 $rootScope.LoginStatus = 0;
	 			 console.log("비 로그인");
	 			 $rootScope.userLogindata_reset();
	 		 }else {
	 			 $rootScope.user = userdata.data.user;
	 			$rootScope.LoginStatus = 1;
		 		console.log("로그인 정보");
	 			 console.log($rootScope.user);
	 			 $rootScope.promotionCheck=$rootScope.user.auto; 
	 			 console.log($rootScope.promotionCheck);
		 		}
	 	   },function(userdata){
	 	   });
	    }
	 $rootScope.loginCheck();

});




/*FileSErvice*/
app.factory("FileService", function($q,$http){
	var deffered = $q.defer();
	var result = [];
	var fileService = {};
	
	   fileService.async = function(url, formData, param){
		      $http.post(url, formData, {
		         headers : {"Content-Type": undefined},
		         params : param
		      }).then(data => {
		         result = data;
		         deffered.resolve();
		      }, data => {
		         result = data;
		         deffered.resolve();
		      });
		      return deffered.promise;
		      
		   }
		   fileService.data = function(){ return result; }
		   return fileService;
		});
