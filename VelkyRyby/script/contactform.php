<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $telefon = $_POST['telefon'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['subject'];

  $mailTo = "adam.tretera@ephi.cz";
  $headers = "From:".$mailFrom;



  mail($mailTo, $telefon, $headers);
  header("Location: index.php?mailsend");
}
