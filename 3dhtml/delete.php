<?php 

include "con.php"; 

if (isset($_GET['deleteid'])) {

    $user_id = $_GET['deleteid'];

    $sql = "DELETE FROM `webquestions` WHERE `id`='$user_id'";

     $result = $conn->query($sql);

     if ($result == TRUE) {

        echo '<script>alert("Web Question is Deleted Successfully");</script>';
        echo '<script>window.location.href = "index.php";</script>';

    }else{

        echo "Error:" . $sql . "<br>" . $conn->error;

    }

} 

?>