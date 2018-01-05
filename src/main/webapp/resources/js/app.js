
var app = angular.module("Charm", ["ngRoute","Home","Board","Boarddetail","Login","SignUp","Textview","Actcreate","Story","Adetail","Qwrite"]);

app.config(function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "resources/views/home.html",
		controller : "home"
	}).when("/board", {
		templateUrl : "resources/views/board.html",
		controller : "board"
	}).when("/boarddetail", {
		templateUrl : "resources/views/boarddetail.html",
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

$rootScope.user = {
		no:"",
		id:"",
		name:"",
		pw:"",
		tel:"",
		del_yn: ""
}

	

});

