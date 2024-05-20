<?php 
var_dump($_POST);

// variable
$hname = $_POST["hrfinput_hn"];
$hloc = $_POST["hrfinput_loc"];
$datein = $_POST["hrfdate_in"];
$dateout = $_POST["hrfdate_out"];
$bookwhere = $_POST["hrfbookwhere"];
if (!empty ( $_POST['hrfinput_comment']) && trim($_POST['hrfinput_comment'])=='')  {
    $a = TRUE;
} else {
    $a = FALSE;
    $_SESSION['hrfinput_comment'] = '*not-filled'; }

//$_POST["hrfinput_comment"];



echo "Record successfully saved in database! Thank you.";

?>




