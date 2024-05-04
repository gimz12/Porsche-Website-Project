<?php
include 'con.php';

$fname = $_POST["fname"];
$sname = $_POST["sname"];
$email =$_POST["email"];
$phonenumber =$_POST["phonenumber"];
$model =$_POST["model"];
$track =$_POST["track"];
$message =$_POST["message1"];

$sql = "INSERT INTO testdrive
(fname, sname, email, phonenumber, model, track, message) 
VALUES ('$fname', '$sname', '$email', '$phonenumber', '$model', '$track', '$message')";

if (mysqli_query($conn, $sql)) {
    echo '<script>alert("New record created successfully");</script>';
    echo '<script>window.location.href = "3d.html";</script>';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>