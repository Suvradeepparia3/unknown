<?php 
use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['name']) && isset($_POST['phnNumber']) && isset($_POST['email']) && isset($_POST['body'])){
    $name = $_POST['name'];
    $phnNumber = $_POST['phnNumber'];
    $email = $_POST['email'];
    $body = $_POST['body'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "suvad481@gmail.com";
    $mail->Password = 'suv@08021999';
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("suvad481@gmail.com");
    $mail->Subject = ("$email ($phnNumber)");
    $mail->Body = $body;

    if($mail->send()){
        $status = "Success";
        $response ="Email is sent! ";
    }
    else
    {
        $status = "failed";
        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}

?>
                           