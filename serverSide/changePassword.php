 <?php
		include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        if ($db->connect_error) {
            http_response_code(500);
            die('{ "errMessage": "Failed to Connect to DB." }');
        }
  $oPassword = $_POST['oPassword']; 
  $nPassword = $_POST['nPassword'];
  $username = $_POST['username'];   

 

$query = "SELECT username, password, money FROM logins WHERE username = '$username';";
        $stmt = simpleQuery($db, $query);
  
        if($stmt == NULL) {
            include "startpage.html";
        				  }
 		 else{
      		$stmt->bind_result($username, $password, $money);
    		$stmt->fetch();
  			if(strcmp($oPassword,$password)==0){
  		    
                      // 2. Run the Query
  //UPDATE logins SET money = '10' WHERE username = '$username';
        $query = "UPDATE logins SET password = '$nPassword' WHERE username = '$username';";
        $stmt = simpleQuery($db, $query);
	if($stmt == NULL) {
            include 'account.html';
        }
      	else{
          include 'startpage.html';
          //die('{ "Message": "Inserted Data." }');
        }

              
              
   			 }
           else{
             include "account.html";
           }
         }




?>