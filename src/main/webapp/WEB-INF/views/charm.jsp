<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="Charm">
<head>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/latest/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="http://fonts.googleapis.com/earlyaccess/nanumpenscript.css" rel ="stylesheet">

  	
	<script type="text/javascript" src="resources/angular/angular.min.js"></script>
	<script type="text/javascript" src="resources/angular/angular-route.min.js"></script>
	<script type="text/javascript" src="resources/angular/dirPagination.js"></script>
	
	<script type="text/javascript" src="resources/js/app.js"></script>
	<script type="text/javascript" src="resources/js/home.js"></script>
	<script type="text/javascript" src="resources/js/login.js"></script>
	<script type="text/javascript" src="resources/js/board.js"></script>
	<script type="text/javascript" src="resources/js/boarddetail.js"></script>
	<script type="text/javascript" src="resources/js/home.js"></script>
	<script type="text/javascript" src="resources/js/signup.js"></script>
	<script type="text/javascript" src="resources/js/textview.js"></script>
	<script type="text/javascript" src="resources/js/actcreate.js"></script>
	<script type="text/javascript" src="resources/js/story.js"></script>	 
	<script type="text/javascript" src="resources/js/adetail.js"></script>
	<script type="text/javascript" src="resources/js/qwrite.js"></script>
	<script type="text/javascript" src="resources/js/pref.js"></script>
	
	<link rel="stylesheet" href="resources/css/home.css">
	<link rel="stylesheet" href="resources/css/media.css">
	<link rel="stylesheet" href="resources/css/nav2.css">
</head>
<body>
<div data-ng-include="header"></div>
	<div data-ng-include="nav"></div>
	<div data-ng-view></div>	
	<div data-ng-include="footer"></div>
</body>
</html>
