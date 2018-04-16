 <?php
		include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        if ($db->connect_error) {
            http_response_code(500);
            die('{ "errMessage": "Failed to Connect to DB." }');
        }

  $username = $_POST['username']; 
  
 $query = "SELECT username, password, money FROM logins WHERE username = '$username';";
        $stmt = simpleQuery($db, $query);
  
      	$stmt->bind_result($username1, $password, $money);
    $stmt->fetch();

echo json_encode($money);
?>