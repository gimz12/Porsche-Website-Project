<!DOCTYPE html>
<html>
<head>
	<title>LOGIN System</title>
	<link rel="stylesheet"  href="stylelogs.css">
</head>
<body>
	<img src="logo1.png" alt="">
     <form action="login.php" method="post">
     	<h2>PORSCHE</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>User Name :</label>
     	<input type="text" name="uname" placeholder="User Name"><br>

     	<label>Password :</label>
     	<input type="password" name="password" placeholder="Password"><br>

     	<button type="submit">Login</button>
     </form>
</body>
</html>