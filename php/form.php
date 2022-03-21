<?php
    $name = $_POST ['name'];
    $surname = $_POST ['surname'];
    $email = $_POST ['email'];
    $phone = $_POST ['phone'];
    $text = $_POST ['text'];
    $correo = "juanpablocivardi435@gmail.com";
    // The email
    $subject = "Formulario: Tiene un nuevo mensaje de contacto.";
    $menssage = "Saludos doctora, alguien le envió información de contacto a traves de su página web. Quien le escribe es " . $name . " " . $surname . ". Proporciona el telefono/celular: " . $phone . ". " . $name . " y le escribe el siguiente texto: " . $text . ".   // Esta información fué enviada el " . date('d/m/Y', time()) . ". (Considere que esta fecha puede ser errónea ya que es obtenida del dispositivo desde el que se completa el formulario)";

    // To and from
    $to = "juanpablo.c@live.com.ar";
    $from = 'From:' . $correo . "";
    // Send mail
 
    if(mail($to, $subject, $menssage, $from)){
        header('Location: /send.html');
    }else{
        echo "Ocurrió un error.";
    };
?>