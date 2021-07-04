<?php

require 'database.php';

$studenti = [];
$sql = "SELECT id, nume, prenume, an FROM studenti ORDER BY id DESC";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $studenti[$i]['id']    = $row['id'];
    $studenti[$i]['nume'] = $row['nume'];
    $studenti[$i]['prenume'] = $row['prenume'];
    $studenti[$i]['an'] = $row['an'];
    $i++;
  }

  echo json_encode($studenti);
}
else
{
  http_response_code(404);
}