<?php 
if(isset($_POST['submit'])){
    $to = "itzli2000@msn.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "Contacto desde Digimundo.";
    $subject2 = "Copia del mensaje enviado a Digimundo.";
    $message = "De:" . $name . " < ". $from . " > " . "\n\n" . " Escribio lo siguiente:" . "\n\n" . $_POST['message'];
    $message2 = "Hola " . $name . "\n\n" . "Esta es una copia de tu mensaje " . "\n\n" . $_POST['message'];

    $headers = "";
    $headers2 = "";
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Mensaje enviado. Gracias " . $first_name . ", nos contactaremos a la brevedad.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    header('Location: index.html');
}
?>