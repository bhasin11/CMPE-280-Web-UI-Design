<!DOCTYPE html>
<html>
<head>
<title>PHP</title>
</head>
<body>

<?php
$userid = $_GET['userid'];
$password = $_GET['password'];
$email = $_GET['email'];
$mobile = intval($_GET['mobile']);
$address = $_GET['address'];
$q1 = $_GET['q1'];
$q2 = $_GET['q2'];
$a1 = $_GET['a1'];
$a2 = $_GET['a2'];


$con = mysqli_connect('sidharthbhasin.com','admin280','abc123','CMPE280DB');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="INSERT INTO user (userid, password, email, mobile, address, question1, answer1, question2, answer2) VALUES ('".$userid."', '".$password."', '".$email."', ".$mobile.", '".$address."', '".$q1."', '".$a1."', '".$q2."', '".$a2."')";
$result = mysqli_query($con,$sql);
if(!$result){
    echo "Problem in Registration. Please try again.";
}
else{
    echo "Registration Successful.";
}
mysqli_close($con);
?>
</body>
</html>