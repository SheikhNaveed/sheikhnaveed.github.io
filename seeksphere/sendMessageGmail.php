<?PHP

	require_once('phpmailer/class.phpmailer.php');
	require_once("phpmailer/class.smtp.php");
	
	//Set var's
	$name = $_POST['userName'];
	$from_email = $_POST['email'];
	$website = $_POST['website'];
	$message = $_POST['message'];

	//Email info
	$to = "naeemattari7@gmail.com";//naveedamar@gmail.com";
	$subject = "Message By " . $name;

	//The email body
	$body = 
	'Name: ' . $name . '<br>' .
	'Email: ' . $from_email . '<br>' .
	'Website: ' . $website . '<br>' .
	'Message: ' . $message;

	$mail = new PHPMailer();

	$mail->IsHTML(true);
    $mail->AddAddress($to); // recipients email
    $mail->setFrom($from_email, $name);
	$mail->addReplyTo($from_email, $name);
    $mail->Subject = $subject;
    $mail->Body    = $body; 


    $mail->Username = "seekspheremail@gmail.com"; // your GMail user name
    $mail->Password = "sphere1590";
    $mail->Host = "smtp.gmail.com"; // GMail
    
	$mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->IsSMTP(); // use SMTP
    $mail->SMTPAuth = true; // turn on SMTP authentication
    
    if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
    else {
    	echo "Message has been sent";
    }

    exit;
	
?>