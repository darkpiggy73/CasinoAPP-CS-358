<?php
	
header("index.php");
if ( isset( $_POST['submit'] ) ) {
        // 1. Connect to the database
        include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        

//$query = "INSERT INTO logins (id, username, password) 
 //       VALUES ('0','$_POST['username']', '$_POST['password']')";

  $username = $_POST['username']; 
  $password = $_POST['password'];
  
        // 2. Run the Query
        $query = "INSERT INTO logins (username, password) VALUES ('$username', '$password')";
     
	$stmt = simpleQuery($db, $query);
        if($stmt == NULL) {
            include 'regFail.html';
        }
      	else{
          include 'regSuc.html';
          
        }

}
?>
