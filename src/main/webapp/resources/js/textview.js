// 앵귤라 모듈 만들기
var app = angular.module("Textview",[]);
app.controller("textview", function($rootScope, $scope,$http){
	$rootScope.navEvnet();
});