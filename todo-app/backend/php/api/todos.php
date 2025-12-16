<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
$servername = "db";
$username = "root";
$password = "rootpassword";
$dbname = "todo_app";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

 header('Content-Type: application/json; charset=utf-8');
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$query="SELECT * FROM ToDo";
$result = $conn->query($query);

echo json_encode($result->fetch_all(MYSQLI_ASSOC));


mysqli_close($conn);
?>