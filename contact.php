<?php 
if(isset($_POST['submit'])){
    $encoding = "utf-8";
// Preferences for Subject field
    $subject_preferences = array(
        "input-charset" => $encoding,
        "output-charset" => $encoding,
        "line-length" => 76,
        "line-break-chars" => "\r\n"

// Multiple recipients
        $to = 'itzli2000@msn.com';
        $from_name = $_POST['name'];
        $from_lastname = $_POST['lastname'];
        $from_phone = $_POST['phone'];
        $from_mail = $_POST['email'];
        $from_message = $_POST['message'];

// Subject
        $subject = 'Contacto desde mi página';

// Message
        $message = '
        <html>
        <head>
              <title>Mensaje prueba para envio de contenido.</title>
          </head>
          <body>
              <p> Teléfono:'. $from_phone .' <br></p>
              <p>'. $from_message .'</p>
          </body>
          </html>
      ';

// To send HTML mail, the Content-type header must be set
// Mail header
      $header = "Content-type: text/html; charset=".$encoding." \r\n";
      $header .= "From: ".$from_name.$from_lastname." <".$from_mail."> \r\n";
      $header .= "MIME-Version: 1.0 \r\n";
      $header .= "Content-Transfer-Encoding: 8bit \r\n";
      $header .= "Date: ".date("r (T)")." \r\n";
      $header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);

// Mail it
      mail($to, $subject, $message, $header);

// Redirect
      header('Location: index.html');
  }
  ?>