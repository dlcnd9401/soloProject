<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="Charm">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  	
	<script type="text/javascript" src="resources/angular/angular.min.js"></script>
	<script type="text/javascript" src="resources/angular/angular-route.min.js"></script>
	
	<script type="text/javascript" src="resources/js/app.js"></script>
	<script type="text/javascript" src="resources/js/login.js"></script>
	<script type="text/javascript" src="resources/js/board.js"></script>
	<script type="text/javascript" src="resources/js/boarddetail.js"></script>
	<script type="text/javascript" src="resources/js/home.js"></script>
	<script type="text/javascript" src="resources/js/signup.js"></script>
	<script type="text/javascript" src="resources/js/textview.js"></script>
	<script type="text/javascript" src="resources/js/actcreate.js"></script>	
	<link rel="stylesheet" href="resources/css/home.css">
	<link rel="stylesheet" href="resources/css/media.css">
	<link rel="stylesheet" href="resources/css/nav2.css">
</head>
<body>
	<dir data-ng-include="nav" id = "navid"></dir>
	<div data-ng-view></div>	
	<dir data-ng-include="footer"></dir>
</footer>
</body>
</html>
