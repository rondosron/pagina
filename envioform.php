<?php

	if(isset($_POST["submit"])){
		$message = "Nombre y apellido: " + $_POST["nombreapellido"] + "\r\n";
		$message.= "Dirección: " +  $_POST["direccion"] + "\r\n";
		$message.= "Teléfono: " +  $_POST["telefono"] + "\r\n";
		$message.= "E-mail: " +  $_POST["email"] + "\r\n"; 
		$message.= "Pedido/consulta: " +  $_POST["pedidoinput"] + "\r\n"; 
		mail("libroscrimino@gmail.com", "consulta", $message);
		return false;
	}





















?>