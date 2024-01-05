<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	


	
	<title>Table Example</title>


</head>
<body>
	


<?php

      // Establish a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$day = $_POST['day'];
$time = $_POST['time'];
$people = $_POST['people'];
$room_type = $_POST['room_type'];


// Create the SQL query to insert the data
$sql = "INSERT INTO reservation (name, email, phone_number, day, time, people, room_type) VALUES ('$name', '$email', '$phone_number', '$day', '$time', '$people', '$room_type')";
// $sql = "INSERT INTO reservation (name, email, phone_number, datetime, people) VALUES ('$name', '$email', '$phone_number', STR_TO_DATE('$day', '%d-%m-%Y') + INTERVAL '$time' HOUR_MINUTE, '$people')";


// Execute the query
if (mysqli_query($conn, $sql)) {
    echo ("<script> alert('Bạn đã đặt bàn thành công!');</script>");
    echo "Bạn đã đặt bàn thành công!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);




?>






</body>
</html>