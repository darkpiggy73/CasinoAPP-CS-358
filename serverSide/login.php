<?php
header("index.php");
if ( isset( $_POST['submit']) && (strlen( $_POST['usernameL'])!=0) && (strlen( $_POST['passwordL'])!=0)  ) {//first par
        // 1. Connect to the database
        include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        if ($db->connect_error) {
            http_response_code(500);
            die('{ "errMessage": "Failed to Connect to DB." }');
        }



  $name = $_POST['usernameL']; 
  $pass = $_POST['passwordL'];
  
        // 2. Run the Query
  //SELECT username, password, money FROM logins WHERE username = '$username';
        $query = "SELECT username, password, money FROM logins WHERE username = '$name';";
        $stmt = simpleQuery($db, $query);
  
        if($stmt == NULL) {
            include "regFail.html";
        				  }
 		 else{
      		$stmt->bind_result($username, $password, $money);
    		$stmt->fetch();
  			if(strcmp($pass,$password)==0){
  		    include "index.html";
   			 }
           else{
             include "regFail.html";
           }
         }
  }
  else {
    include "regFail.html";
  }
?>
