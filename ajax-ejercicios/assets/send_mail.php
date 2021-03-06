<?php
//El codigo se ejecuta si se a enviado datos por POST
if (isset($_POST)) {
  error_reporting(0);
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "fjsv.cjoseph@gmail.com";
  $subject = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
    <p>
        Datos desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
        <li>Nombe: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Asunto: <b>$subject</b></li>
        <li>Comentarios: <b>$comments</b></li>
    </ul>
  ";
  $header = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envío Automático No Responder <no-reply@$domain>";

  $send_mail = mail($to,  $subject, $message, $header);

  if ($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados"
    ];
  } else {
    $res = [
      "err" => false,
      "message" => "Error al enviar tus datos. Intenta nuevamente."
    ];
  }

  header(`Content-type: application/json`);
  echo json_encode($res);
  exit;

}