<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->nume) === '' || (int)$request->an <= 0)
  {
    return http_response_code(400);
  }

  // Sanitize.
  $nume = mysqli_real_escape_string($con, trim($request->nume));
  $prenume = mysqli_real_escape_string($con, trim($request->prenume));
  $an = mysqli_real_escape_string($con, (int)$request->an);


  // Create.
  $sql = "INSERT INTO `studenti` (`nume`,`prenume`,an) VALUES ('{$nume}','{$prenume}','{$an}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $student = [
      'nume' => $nume,
      'prenume' => $nume,
      'an' => $an,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($student);
  }
  else
  {
    http_response_code(422);
  }
}