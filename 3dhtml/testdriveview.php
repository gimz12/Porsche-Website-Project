<?php 

/*require_once('con.php');
$query = "select * from Cust_info";
$result = mysqli_query($con,$query);
*/

require_once 'con.php';
require_once 'testdriveviewfunction.php';

$result = dispaly_data();


?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="bootstrap.min.css">
  <title>Customer Test Drive Requests</title>
</head>
<body class="bg-dark">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <div class="card mt-5">
            <div class="card-header">
              <h2 class="display-6 text-center">Customer Test Drive Requests</h2>
            </div>
            <div class="card-body">
              <table class="table table-bordered text-center">
                <tr class="bg-dark text-white">
                  <td> ID </td>
                  <td> First Name </td>
                  <td> Last Name </td>
                  <td> Email</td>
                  <td> Phone Number </td>
                  <td> Model </td>
                  <td> Track </td>
                  <td> Message </td>
                  <td> Edit </td>
                  <td> Delete </td>
                </tr>
                <tr>
                <?php 

                  while($row = mysqli_fetch_assoc($result))
                  {
                    $id = $row['id'];
                ?>
                  <td><?php echo $id?></td>
                  <td><?php echo $row['fname']; ?></td>
                  <td><?php echo $row['sname']; ?></td>
                  <td><?php echo $row['email']; ?></td>
                  <td><?php echo $row['phonenumber']; ?></td>
                  <td><?php echo $row['model']; ?></td>
                  <td><?php echo $row['track']; ?></td>
                  <td><?php echo $row['message']; ?></td> 
                  <td><a href="updatetestdrive.php?updateid=<?php echo $id ?>" class="btn btn-primary">Edit</a></td>
                  <td><a href="deletetestdrive.php?deleteid=<?php echo $id ?>" class="btn btn-danger">Delete</a></td>
                </tr>
                <?php    
                  }
                
                ?>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
</html>