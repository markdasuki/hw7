<?php
    session_start();
?>

<!DOCTYPE html>
<html>
  <head>
	<meta charset = "utf-8">
	<title>Login</title>
	<link rel="stylesheet" type="test/css" href="Style.css">
  </head>
  
<body id="body3">
    
<form id='login' action='login.php' method="post">
Username:<br>
<input type="text" name="username" id="username">
<br>
Password:<br>
<input type="password" name="password" id="password">
<br>
<br>
<br>
<input type="submit" value="Submit" value="Submit">
</form>
    
<?php 
 
 function login(){
     
        $loginData = simplexml_load_string(file_get_contents('details.xml'));
        
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        if(count($_POST))
        {
            foreach($loginData->children() as $info){
                if($username == $info->user && $password == $info->pass){
                     $_SESSION['user'] = $username;
                     $_SESSION['password'] = $password;
                     header('Location: https://4131-markdasuki.c9.io/restaurants.php');
                    //echo 'it works';
                }
            }
            
            if(empty($username) && empty($password)){
                
                echo "Please enter username and password!";
            }
            else if(empty($username)){
                
                echo "Please enter username!";
            }
            else if(empty($password)){
                
                echo "Plese enter password!";
            }
            else{
                echo "Wrong username and password!";
            }
        }
    }
    
    
    login();
?>  

</body>
</html>