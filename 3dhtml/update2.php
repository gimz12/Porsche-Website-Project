<?php 

include "con.php";

$id = $_GET['updateid'];

    if (isset($_POST['update'])) {

        $cust_name = $_POST['cust_name'];
        $des = $_POST['des'];
        $indate = $_POST['indate'];
        $outdate = $_POST['outdate'];
        $cost = $_POST['cost'];

        $sql = "UPDATE `Cust_info` SET `cust_name`='$cust_name',`des`='$des',`indate`='$indate',`outdate`='$outdate',`cost`='$cost' WHERE `id`='$id'"; 

        $result = $conn->query($sql); 

        if ($result == TRUE) {

            echo "Record updated successfully.";

        }else{

            echo "Error:" . $sql . "<br>" . $conn->error;

        }

    } 

if (isset($_GET['updateid'])) {

    $id = $_GET['updateid']; 

    $sql = "SELECT * FROM `Cust_info` WHERE `id`='$id'";

    $result = $conn->query($sql); 

    if ($result->num_rows > 0) {        

        while ($row = $result->fetch_assoc()) {

            $id = $row['id'];

            $cust_name = $row['cust_name'];

            $des = $row['des'];

            $indate = $row['indate'];

            $outdate = $row['outdate'];

            $cost = $row['cost'];

        } 

    ?>

        <h2>User Update Form</h2>

        <form action="" method="post">

          <fieldset>

            <legend>Personal information:</legend>

            Customer name:<br>

            <input type="text" name="cust_name" value="<?php echo $cust_name; ?>">

            <input type="hidden" name="id" value="<?php echo $id; ?>">

            <br>

            Description :<br>

            <input type="text" name="des" value="<?php echo $des; ?>">

            <br>

            Check in Date:<br>

            <input type="date" name="indate" value="<?php echo $indate; ?>">

            <br>

            Check out Date:<br>

            <input type="date" name="outdate" value="<?php echo $outdate; ?>">

            <br>
            Cost :<br>

            <input type="text" name="cost" value="<?php echo $cost; ?>">
            
            <br>

            <input type="submit" value="Update" name="update">

          </fieldset>

        </form> 

        </body>

        </html> 

    <?php

    } else{ 

        header('Location: view.php');

    } 

}

?> 