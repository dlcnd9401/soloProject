
var app = angular.module("Charm", ["ngRoute","Home","Board","Boarddetail","Login","SignUp","Textview","Actcreate","Story","Adetail","Qwrite"]);

app.config(function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "resources/views/home.html",
		controller : "home"
	}).when("/board", {
		templateUrl : "resources/views/board.html",
		controller : "board"
	}).when("/boarddetail", {
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
	}).when("/story", {
		templateUrl : "resources/views/story.html",
		controller : "story"
	}).when("/adetail", {
		templateUrl : "resources/views/adetail.html",
		controller : "adetail"
	}).when("/qwrite", {
		templateUrl : "resources/views/Qwrite.html",
		controller : "qwrite"
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

$rootScope.webveiw = {
		title:"",
		sort:""
	}

$rootScope.auth= [
	{
		auth : ""
	}
]
$rootScope.type = [
	{
		type: ""
	}
]

$rootScope.serial3 = function(param){
	$rootScope.auth.auth = param;
}

$rootScope.boardkinds= function(parambody){
	$rootScope.type.type = parambody;
	};
	
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
