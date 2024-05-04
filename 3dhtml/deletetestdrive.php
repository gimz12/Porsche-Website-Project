<?php 

include "con.php"; 

if (isset($_GET['deleteid'])) {

    $user_id = $_GET['deleteid'];

    $sql = "DELETE FROM `testdrive` WHERE `id`='$user_id'";

     $result = $conn->query($sql);

     if ($result == TRUE) {

        echo '<script>alert("Test Drive Request is Deleted Successfully");</script>';
        echo '<script>window.location.href = "testdriveview.php";</script>';

    }else{

        echo "Error:" . $sql . "<br>" . $conn->error;

    }

} 

?>