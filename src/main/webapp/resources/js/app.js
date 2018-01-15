
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
		pw:"",
		tel:"",
		del_yn: ""
}



$rootScope.prefmove = function(param_userid){
	console.log(param_userid);
	$rootScope.user.id=param_userid;
	console.log($rootScope.user);
}

/*$rootScope.boardkinds= function(parambody){
	$rootScope.type.type = parambody;
	};*/
	
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
	
	 $rootScope.loginCheck= function(){
	   	 $http.post("LoginCheck","","")
	 	   .then(function(userdata){
	 		 console.log(userdata);
	 		 if(userdata == null){
	 			 console.log("비 로그인"); 
	 		 }else {
	 			 $rootScope.user = userdata.data.user;
		 		console.log("로그인 정보");
	 			 console.log($rootScope.user);
		 		}
	 	   },function(userdata){
	 		   console.log(userdata);
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
