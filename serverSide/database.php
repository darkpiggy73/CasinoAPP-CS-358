<?php
// Secret database details (TODO: Update these to match your database)
abstract class DBDeets {
  const DB_NAME_CASINO = 'casino';
  const DB_USER = 'webUser';
  const DB_PW = 'b402fa3f-2759-4acc-b882-644ee40ba13a';
}

// Function to establish a connection to a named database using the above user and PW
// Only makes localhost connections during PHP processing.
// - returns an active database connection handle (be sure to close it later)
function connectToDatabase($databaseName) {
  $db = new mysqli('localhost', DBDeets::DB_USER, DBDeets::DB_PW, $databaseName);
  if ($db->connect_errno) {
      die('<p>Failed to connect to database: ' . $db->connect_error . '</p></body></html>');
  }
  return $db;
}

// Execute a simple query with no parameters
// - returns a 'statement' object for further use
// - returns null on error and prints details in the HTML comments
function simpleQuery($db, $query) {
  // Prepare the query
  if(!($stmt = $db->prepare($query))) {
    echo "<!-- Query Prepare failed: (" . $db->errno . ") " . $db->error . "-->\n";
    return null;
  }

  // Execute query
  if(!$stmt->execute()) {
    echo "<!-- Query Execute failed: (" . $stmt->errno . ") " . $stmt->error . "-->\n";
    return null;
  }

  // Store the results and return the statement object
  if(strpos($query, 'SELECT') !== false) { $stmt->store_result(); }
  return $stmt;
}

// Execute a simple query with one dynamically bound input parameter
// - returns a 'statement' object for further use
// - returns null on error and prints details in the HTML comments
function simpleQueryParam($db, $query, $ptype, &$param) {
  // Prepare the query
  if(!($stmt = $db->prepare($query))) {
    echo "<!-- Query Prepare failed: (" . $db->errno . ") " . $db->error . "-->\n";
    return null;
  }

  // Bind input param
  if(!($stmt->bind_param($ptype, $param))) {
    echo "<!-- Query Param Binding Failed: (" . $stmt->errno . ") " . $stmt->error . "-->\n";
    return null;
  }

  // Execute query
  if(!$stmt->execute()) {
    echo "<!-- Query Execute failed: (" . $stmt->errno . ") " . $stmt->error . "-->\n";
    return null;
  }

  // Store the results and return the statement object
  if(strpos($query, 'SELECT') !== false) { $stmt->store_result(); }
  return $stmt;
}
?>
