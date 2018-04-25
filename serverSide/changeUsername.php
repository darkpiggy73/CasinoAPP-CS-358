 <?php
		include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        if ($db->connect_error) {
            http_response_code(500);
            die('{ "errMessage": "Failed to Connect to DB." }');
        }

  $oUsername = $_POST['oUsername']; 
  $sPassword=$_POST['password'];
  $nUsername = $_POST['nUsername'];   

$query = "SELECT username, password, money FROM logins WHERE username = '$oUsername';";
        $stmt = simpleQuery($db, $query);
  
        if($stmt == NULL) {
            include "account.html";
        				  }
 		 else{
      		$stmt->bind_result($username, $password, $money);
    		$stmt->fetch();
  			if(strcmp($sPassword,$password)==0){
              
              
                      // 2. Run the Query
  //UPDATE logins SET money = '10' WHERE username = '$username';
        $query = "UPDATE logins SET username = '$nUsername' WHERE username = '$oUsername';";
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