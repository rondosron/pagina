<html><head>
	<title>PAGINA YAMIR</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css">

	<!-- LINK FONT AWESOME -->
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous">

	<!-- CSS OVERLAY -->
	<link rel="stylesheet" type="text/css" href="productos/styleprod1.css">

</head>
<body>
	<nav id="navbar">
		<div id="logonav">
			LOGO
		</div>
		<div id="contenedorbotones">
			<div id="hombre" class="botonnav filtro">HOMBRE</div>
			<div id="mujer" class="botonnav filtro">MUJER</div>
			<div id="personalizadas" class="botonnav filtro">PERSONALIZADAS</div>
			<div id="lisas" class="botonnav filtro">LISAS</div>
			<div id="dudas" class="botonnav">DUDAS</div>
			<div id="contacto" class="botonnav">CONTACTO</div>
		</div>
		<div id="contenedortoggle">
			<i id="menutoggle" class="fas fa-bars"></i>
		</div>
	</nav>

	<div id="productos">
		<div id="contenedorseparador1">
		</div>
		<div id="tituloproductos">
			<p>PRODUCTOS</p>
		</div>
		<div id="contenedorseparador2">
		</div>
		<div id="contenedorproducto1" class="contendorproducto">
			<div id="producto1" style="grid-area: prod1 / prod1 / prod1 / prod1;">
				<img class="producto" id="imagen1" src="fotos/1.png" data-filtro="remera hombre lisa" data-nombre="Remera Rolling Stones" data-precio="$500" data-cantidad-cuotas="2" data-precio-cuota="300" data-talles="XS/S/M/L/XL" data-colores="rojo/azul/blanco">
			</div>
		</div>
		<div id="contenedorproducto2" class="contendorproducto">
			<div id="producto2" style="grid-area: prod2 / prod2 / prod2 / prod2;">
				<img class="producto" id="imagen2" src="fotos/2.png" data-filtro="remera mujer personalizada" data-nombre="Remera Beatles" data-precio="$800" data-cantidad-cuotas="3" data-precio-cuota="300" data-talles="S/M/L" data-colores="rojo/verde/amarillo">
			</div>
		</div>
		<div id="contenedorproducto3" class="contendorproducto">
			<div id="producto3" style="grid-area: prod3 / prod3 / prod3 / prod3;">
				<img class="producto" id="imagen3" src="fotos/3.png" data-filtro="gorra hombre personalizada" data-nombre="Remera Coldplay" data-precio="$600" data-cantidad-cuotas="3" data-precio-cuota="250" data-talles="XS/S/L/XL" data-colores="verde/negro/naranja">
			</div>
		</div>
		<div id="contenedorproducto4" class="contendorproducto">
			<div id="producto4" style="grid-area: prod4 / prod4 / prod4 / prod4;">
				<img class="producto" id="imagen4" src="fotos/4.png" data-filtro="gorra mujer personalizada">
			</div>
		</div>
		<div id="contenedorproducto5" class="contendorproducto">
			<div id="producto5" style="grid-area: prod5 / prod5 / prod5 / prod5;">
				<img class="producto" id="imagen5" src="fotos/5.png" data-filtro="vinilo cocina">
			</div>
		</div>
		<div id="contenedorproducto6" class="contendorproducto">
			<div id="producto6" style="grid-area: prod6 / prod6 / prod6 / prod6;">
				<img id="imagen6" src="fotos/6.png">
			</div>
		</div>
			<div id="contenedorproducto7" class="contendorproducto">
				<div id="producto7" style="grid-area: prod7 / prod7 / prod7 / prod7;">
				<img id="imagen7" src="fotos/7.png">
			<p id="content7">$500
			</p>
		</div>
		</div>
			<div id="contenedorproducto8" class="contendorproducto">
				<div id="producto8" style="grid-area: prod8 / prod8 / prod8 / prod8;">
				<img id="imagen8" src="fotos/8.png">
			<p id="content8">$500
			</p>
		</div>
		</div>
			<div id="contenedorproducto9" class="contendorproducto">
				<div id="producto9" style="grid-area: prod9 / prod9 / prod9 / prod9;">
				<img id="imagen9" src="fotos/9.png">
			<p id="content9">$500
			</p>
		</div>
		</div>
			<div id="contenedorproducto10" class="contendorproducto">
				<div id="producto10" style="grid-area: prod10 / prod10 / prod10 / prod10;">
				<img id="imagen10" src="fotos/10.png">
			<p id="content10">$500
			</p>
		</div>
		</div>
		<div id="contenedorproducto11" class="contendorproducto">
			<div id="producto11" style="grid-area: prod11 / prod11 / prod11 / prod11;">
				<img id="imagen11" src="fotos/11.png">
				<p id="content11">$500</p>
			</div>
		</div>
		<div id="contenedorproducto12" class="contendorproducto">
			<div id="producto12" style="grid-area: prod12 / prod12 / prod12 / prod12;">
				<img id="imagen12" src="fotos/12.png">
				<p id="content12">$500</p>
			</div>
		</div>
	</div>
	<div id="presupuestoyformulario">
		<div id="presupuesto">
			<h1>SIMULACION PRESUPUESTO</h1>
			<h2>Presupuesto actual:</h2>
			<div id="contenedoritemspresupuesto"></div>
			<div id="total"></div>
			<h1>ENVIAR PEDIDO (ponerlo tambien como enviar duda/consulta)</h1>
			<form action="envioform.php" method="POST" name="consulta">
				<textarea id="pedidoinput" name="pedidoinput" rows="6"></textarea>
		</div>

		<div id="formulario">
				<label for="nombreapellido">Nombre y apellido</label>
				<input type="text" name="nombreapellido" id="nombreapellido">
				<label for="telefono">Teléfono</label>
				<input type="number" name="telefono" id="telefono">
				<label for="direccion">Dirección</label>
				<input type="text" name="direccion" id="direccion">
				<label for="email">E-mail</label>
				<input type="text" name="email" id="email">
				<input type="submit" name="submit">
			</form>
		</div>
	</div>
	<!-- BACKGROUND OVERLAY -->

	<div id="background"></div>

	<!-- OVERLAY -->
	<div id="contenedorproductooverlay"> <!-- GRID PADRE -->
		<div id="contenedorimagen">
			<img id="imagenoverlay" src="fotos/1.png" data-nombre="Remera Rolling Stones" data-precio="$500" data-cantidad-cuotas="2" data-precio-cuota="300" data-talles="XS/S/M/L/XL" data-colores="rojo/azul/blanco" >
		</div>
		<div id="datos">
			<div id="nombre">
				<!--<h2>Nombre:</h2>-->
			</div>
			<div id="precio">
				<div id="tituloprecio"><i class="fas fa-dollar-sign"></i><h2>Precio</h2></div>
			</div>
			<div id="talles">
				<i class="fas fa-ruler"></i><h2>Talles</h2>
				<div id="contenedorTalles"></div>
			</div>
			<div id="colores">
				<i class="fas fa-palette"></i><h2>Colores</h2>
				<div id="contenedorCirculos"></div>
			</div>
			<div id="botones">
				<div id="contenedorCarrito">
					<i class="fas fa-shopping-cart"></i>
					<input id="cantidad" type="number" name="cantidad" value="0">
				</div>
				<div id="contenedorBoton">
					<div id="alpresupuesto">
						<h3>Agregar al presupuesto</h3>
					</div>
				</div>
			</div>
		</div>
	</div>

	<footer id="footer">
		<div id="contenedorinfo">
			<div id="navegacionfooter">
				<div id="contenedornavegacion">
					<h1>Navegación</h1>
					<div><i class="fas fa-angle-right"></i><p>HOMBRE</p></div>
					<div><i class="fas fa-angle-right"></i><p>MUJER</p></div>
					<div><i class="fas fa-angle-right"></i><p>PERSONALIZADAS</p></div>
					<div><i class="fas fa-angle-right"></i><p>LISAS</p></div>
					<div><i class="fas fa-angle-right"></i><p>CONTACTO</p></div>
				</div>
			</div>
			<div id="mediosdepagofooter">
				<h1>Medios de pago</h1>
				<img src="mastercard.png"><img src="visa.png"><img src="mercadopago.png">
			</div>
			<div id="faqs">
				<h1>FAQ's</h1>
				<div><i class="fas fa-angle-right"></i><p>PREGUNTAS FRECUENTES</p></div>
			</div>
			<div id="contactofooter">
				<h1>Contacto</h1>
				<div><i class="fab fa-whatsapp"></i></i><p>WHATSAPP</p></div>
				<div><i class="fab fa-facebook-square"></i><p>FACEBOOK</p></div>
				<div><i class="fab fa-instagram"></i><p>INSTAGRAM</p></div>
			</div>
		</div>
		<div id="copyright">
			FRASE
		</div>
	</footer>


<script type="text/javascript" src="script.js"></script>

<!-- SCRIPT OVERLAY -->
<script type="text/javascript" src="productos/scriptprod1.js"></script>

</body>
</html>