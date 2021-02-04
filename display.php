<?php
$q = $_POST['q'];

$con = mysqli_connect('localhost','hu323','hkr123','hu323');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"hu323");

$sql="Select * from Movie_details where movie_name like '".$q."%'";
$result = mysqli_query($con,$sql);

$allRows = array();
while($row = mysqli_fetch_row($result))
{
	$allRows[] = $row;
}
$json = json_encode($allRows);
echo $json;
mysqli_close($con);
?>
