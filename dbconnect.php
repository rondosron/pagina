<?php
	function db_connect() {

		// Definimos la conexión como una variable estática, a fin de evitar que se conecte más de una vez 
		static $connection;

		// Si la conexión aun no se ha establecido, intentamos conectarnos a la base de datos 
		if(!isset($connection)) {
			 // Cargamos la configuraciópn como un array. Utilizamos la ubicación del archivo de configuración
			$config = parse_ini_file('../private/dbcred.ini'); 
			$connection = mysqli_connect($config['servidor'],$config['usuario'],$config['pass'],$config['bbdd']);
		}

		// Si no se conecta correctamente, manejamos el error
		if($connection === false) {
			// Manejo de error - notificamos al administrador, creamos un archivo log, mostramos un error en pantalla, etc.
			return mysqli_connect_error(); 
		}
		return $connection;
	}

	// Conexión a la base de datos
	$conexion = db_connect(); // El nombre de la variable que voy a usar en los demas archivos para conectarme a la BBDD, hacer queries, etc.

	// Revisamos conexión
	if ($conexion->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
?>