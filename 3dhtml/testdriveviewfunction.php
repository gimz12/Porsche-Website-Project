<?php 

  require_once 'con.php';

  function dispaly_data(){
    global $conn;
    $query = "select * from testdrive";
    $result = mysqli_query($conn,$query);
    return $result;
  }

?>