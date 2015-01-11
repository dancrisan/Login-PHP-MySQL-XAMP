<?php
// show potential errors / feedback (from login object)
if (isset($login)) {
    if ($login->errors) {
        foreach ($login->errors as $error) {
            echo $error;
        }
    }
    if ($login->messages) {
        foreach ($login->messages as $message) {
            echo $message;
        }
    }
}
?>

<!DOCTYPE html>
<head>
	<link type="text/css" rel="stylesheet" href="login.css"></link>
    
    <title>Login</title>
</head>
<body>
<!-- login form box -->
<form class="login" method="post" action="index.php" name="loginform">

    <input type="text" name="user_name" id="user_name" class="login-input" placeholder="What's your username?">
	<input type="password" name="user_password" id="user_password" class="login-input" placeholder="Choose a password">
    <input type="submit"  name="login" value="login" class="login-button"/>

</form>
</body>


