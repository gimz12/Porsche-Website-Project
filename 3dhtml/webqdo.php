<?php
include 'con.php';

$fname = $_POST["fname"];
$sname = $_POST["sname"];
$email =$_POST["email"];
$phonenumber =$_POST["phonenumber"];
$message =$_POST["message1"];

$sql = "INSERT INTO webquestions
(fname, sname, email, phonenumber, message) 
VALUES ('$fname', '$sname', '$email', '$phonenumber', '$message')";

if (mysqli_query($conn, $sql)) {
    echo '<script>alert("Thank you. Our Porsche Representative Will Respond To Your Question Via Email As Soon As Possible");</script>';
    echo '<script>window.location.href = "3d.html";</script>';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>