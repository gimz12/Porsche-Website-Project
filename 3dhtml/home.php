<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="stylelogs.css">
</head>
<body>
     <img src="logo1.png" alt="">
     <h1>Hello, ADMIN! Welcome to Admin Dashboard</h1>
     <div class="navbar">
     <a href="loginface.php">Logout</a>
     <a href="testdriveview.php">View Customer Test Drive Requests</a>
     <a href="index.php">View Customer Web Qustions</a></li>
     </div>
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>