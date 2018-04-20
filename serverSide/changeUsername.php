 <?php
		include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        if ($db->connect_error) {
            http_response_code(500);
            die('{ "errMessage": "Failed to Connect to DB." }');
        }

  $oUsername = $_POST['oUsername']; 
  $nUsername = $_POST['nUsername'];   

 
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
?>