 <?php
		include "database.php";
        $db = connectToDatabase(DBDeets::DB_NAME_CASINO);
        if ($db->connect_error) {
            http_response_code(500);
            die('{ "errMessage": "Failed to Connect to DB." }');
        }

  $username = $_POST['username']; 
  
 $query = "SELECT username, password, money FROM logins WHERE username = '$username';";
        $stmt1 = simpleQuery($db, $query);
  
      	$stmt1->bind_result($username1, $password, $money);
    $stmt1->fetch();
$money=$money+10;
$moneyFinal=$money;
        // 2. Run the Query
  //UPDATE logins SET money = '10' WHERE username = '$username';
        $query = "UPDATE logins SET money = '$money' WHERE username = '$username';";
        $stmt = simpleQuery($db, $query);
  
echo json_encode($moneyFinal);
?>