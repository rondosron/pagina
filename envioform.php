<?php
	session_start();
	// Pasar valor del presupuesto tambien y del comentario
	// buscar si es necesario el exit despues del location

	// IMPORTANTE: SAQUE EL 'required' DE LOS INPUT PARA CHEQUEAR ESTE CODIGO. DESPUES PONERLO DE NUEVO PARA DOBLE CHEQUEO

	// NOTA: no agrego las clases validInput o invalidInput porque es demasiado con el mensaje de error y queda mal cambiar el estilo del input.

	$name = stripslashes($_POST['nameSurname']);
	$address = stripslashes($_POST['address']);
	$phone = stripslashes($_POST['phone']);
	$email = stripslashes($_POST['email']);
	$pedidoinput = stripslashes($_POST['pedidoinput']);
	$errors = [];

	// $docHTML = new DOMDocument();
	// @$docHTML->loadHTMLFile("C:\wamp\www\Pagina Yamir Github\pagina\index.php"); // con arroba?
	// $contenedoritemspresupuesto = $docHTML->getElementById("contenedoritemspresupuesto");
	// // $contenedoritemspresupuesto->ownerDocument->saveHTML($contenedoritemspresupuesto);

	// function get_inner_html( $node ) {
	// 	$innerHTML= '';
	// 	$children = $node->childNodes;
	// 	foreach ($children as $child) {
	// 	    $innerHTML .= $child->ownerDocument->saveXML( $child );
	// 	}

	// 	return $innerHTML;
	// }

	// var_dump(get_inner_html($contenedoritemspresupuesto));


	echo $_POST['presupuestoResult'];

	$presupuesto = $_POST['presupuestoResult'];
	$_SESSION['presupuesto'] = $presupuesto;

	header("Location: index.php");
	exit();

	// $contenedoritemspresupuesto->saveHTML($presupuestoValue);
	// $_SESSION["presupuestoValue"] = $contenedoritemspresupuesto->nodeValue;












	// if(isset($_POST["submit"])){
	// 	// if(($name !== "") && ($phone !== "" && $email !== "")) { // Everything ok
			
	// 	// Name validation
	// 		if ($name == "") { // No name
	// 			$errors["nameSurname"] = "El campo 'Nombre y apellido' es obligatorio";
	// 		} else if (strlen($_POST["nameSurname"]) > 30) { // Invalid name
	// 			$errors["nameSurname"] = "El nombre no debe superar los 30 caracteres";
	// 		}

	// 	// Phone and email validation (only ONE required)
	// 		$phone = preg_replace("/[^0-9]/", '', $phone); // Remove everything that's not a number

	// 		if ($phone == "" &&  $email == "") { // No phone nor email
	// 			$errors["phoneOrEmail"] = "Por favor, ingrese un número de teléfono o una dirección de correo electrónico";
	// 		// Then, at least one of them was submitted...	
	// 		} else if (!preg_match('/^[0-9]{7,}$/', $phone) && !filter_var($email, FILTER_VALIDATE_EMAIL)) { // Phone (7 or more numbers) AND email validation: if NONE of them is valid, throw an error message. But only one of them is required.
	// 			// Check if any of them is empty
	// 			if ($phone == "") { // Empty phone. Then an email was submitted
	// 				$errors["email"] = "La dirección de correo ingresada es inválida";
	// 			}
	// 			if ($email == "") { // Empty email. Then a phone number was submitted.
	// 				$errors["phone"] = "El número de teléfono es inválido";
	// 			}
	// 		}

	// 		// Adress validation
	// 			//code........................

	// 		// Back to form	if there's an error
	// 		if (count($errors) !== 0) {
	// 			$_SESSION['nameForm'] = $name; // To mantain value in form
	// 			$_SESSION['phoneForm'] = $phone; // To mantain value in form
	// 			$_SESSION['emailForm'] = $email; // To mantain value in form
	// 			$_SESSION['addressForm'] = $address; // To mantain value in form
	// 			$_SESSION['errorsForm'] = $errors; // To throw messages

	// 			header("Location: index.php#presupuestoyformulario");
	// 			exit();
	// 		} else { // Everything is ok
	// 			// Reset variables/sessions to not display previous messages or values
	// 			unset($_SESSION['nameForm']);
	// 			unset($_SESSION['phoneForm']);
	// 			unset($_SESSION['emailForm']);
	// 			unset($_SESSION['addressForm']);
	// 			$errors = [];
	// 			unset($_SESSION['errorsForm']);

	// 			echo "Successful";
	// 		}

	// } else {
	// 	header("Location: index.php");
	// 	exit();
	// }


















?>