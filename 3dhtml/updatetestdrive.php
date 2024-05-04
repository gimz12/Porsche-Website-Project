<?php 

include "con.php";

$id = $_GET['updateid'];

    if (isset($_POST['update'])) {

        $fname = $_POST['fname'];
        $sname = $_POST['sname'];
        $email = $_POST['email'];
        $phonenumber = $_POST['phonenumber'];
        $model = $_POST['model'];
        $track = $_POST['track'];
        $message = $_POST['message1'];

        $sql = "UPDATE `testdrive` SET `fname`='$fname',`sname`='$sname',`email`='$email',`phonenumber`='$phonenumber',`model`='$model',`track`='$track',`message`='$message' WHERE `id`='$id'"; 

        $result = $conn->query($sql); 

        if ($result == TRUE) {

            echo '<script>alert("Test Drive Details Updated Successfully");</script>';
            echo '<script>window.location.href = "testdriveview.php";</script>';

        }else{

            echo "Error:" . $sql . "<br>" . $conn->error;

        }

    } 

if (isset($_GET['updateid'])) {

    $id = $_GET['updateid']; 

    $sql = "SELECT * FROM `testdrive` WHERE `id`='$id'";

    $result = $conn->query($sql); 

    if ($result->num_rows > 0) {        

        while ($row = $result->fetch_assoc()) {

            $id = $row['id'];

            $fname = $row['fname'];

            $sname = $row['sname'];

            $email = $row['email'];

            $phonenumber = $row['phonenumber'];

            $model = $row['model'];

            $track = $row['track'];

            $message = $row['message'];

        } 

    ?>

        <h2>Test Drive Update Form</h2>

        <form action="" method="post">

          <fieldset>

            <legend>Test Drive Request Infomation:</legend>

            First name:<br>

            <input type="text" name="fname" value="<?php echo $fname; ?>">

            <input type="hidden" name="id" value="<?php echo $id; ?>">

            <br>

            Last name:<br>

            <input type="text" name="sname" value="<?php echo $sname; ?>">

            <br>

            Email :<br>

            <input type="text" name="email" value="<?php echo $email; ?>">

            <br>

            Phone Number:<br>

            <input type="text" name="phonenumber" value="<?php echo $phonenumber; ?>">

            <br>
            Model :<br>

            <select name="model" value="<?php echo $model;?>" >
                <option value="911 Carrera GTS 4"> 911 Carrera GTS 4</option>
                <option value="Carrera GT 2005">Carrera GT 2005</option>
                <option value="911 Turbo S">911 Turbo S</option>
                <option value="Taycan Turbo S">Taycan Turbo S</option>
                <option value="Macan GTS">Macan GTS</option>
            </select>
            
            <br>
            Track : <br>

            <select name="track" value="<?php echo $track;?>" >
                <option value="Nurburging Nordschleife - Germany">Nurburging Nordschleife - Germany</option>
                <option value="Spa-Francorchamps - Belgium">Spa-Francorchamps - Belgium</option>
                <option value="Suzuka - Japan">Suzuka - Japan</option>
                <option value="Circuit de la Sarthe - France">Circuit de la Sarthe - France</option>
                <option value="Mount Panorama - Australia">Mount Panorama - Australia</option>
            </select>
            
            <br>
            Message : <br>

            <textarea name="message1" id="floatingTextarea2" style="height: 100px" value="<?php echo $message;?>"></textarea>

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