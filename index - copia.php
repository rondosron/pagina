<!DOCTYPE html>
<html>
	<head>
		<title>PAGINA YAMIR</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">

		<!-- BOOTSTRAP -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

		<!-- CSS PERSONAL -->
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
			<div id="busqueda" class="botonnav">BÚSQUEDA
				<div id="contenedorbotones">
					<div id="hombre" class="botonnav filtro" data-filtro="hombre">HOMBRE</div>
					<div id="mujer" class="botonnav filtro" data-filtro="mujer">MUJER</div>
					<div id="personalizadas" class="botonnav filtro" data-filtro="personalizada">PERSONALIZADAS
					</div>
					<div id="lisas" class="botonnav filtro" data-filtro="lisa">LISAS</div>
					<div id="dudas" class="botonnav">DUDAS
						<div id="contenedordudas">
							<div class="botonnav filtro" data-filtro="vinilo">VINILO</div>
							<div class="botonnav filtro" data-filtro="taza">TAZA</div>
						</div>
					</div>
					<div id="contacto" class="botonnav">CONTACTO</div>
				</div>
			</div>
			<div id="contenedortoggle">
				<i id="menutoggle" class="fas fa-bars"></i>
			</div>
		</nav>

		<!-- CAROUSEL -->
		<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="fotos/1.png" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
					<img src="fotos/2.png" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
					<img src="fotos/3.png" class="d-block w-100" alt="...">
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>

		<!-- PRODUCTOS -->
		<div id="tituloproductos">
			<p>PRODUCTOS</p>
		</div>
		<div id="productos">
			<div id="contenedorseparador1">
			</div>
			
			<div id="contenedorseparador2">
			</div>
			<div id="contenedorproducto1" class="contendorproducto">
				<div id="producto1">
					<img class="producto" id="imagen1" src="fotos/1.png" data-filtro="remera hombre lisa" data-nombre="Remera Rolling Stones" data-precio="$500" data-cantidad-cuotas="2" data-precio-cuota="300" data-talles="XS/S/M/L/XL" data-colores="rojo/azul/blanco">
				</div>
			</div>
			<div id="contenedorproducto2" class="contendorproducto">
				<div id="producto2">
					<img class="producto" id="imagen2" src="fotos/2.png" data-filtro="remera mujer personalizada" data-nombre="Remera Beatles" data-precio="$800" data-cantidad-cuotas="3" data-precio-cuota="300" data-talles="S/M/L" data-colores="rojo/verde/amarillo">
				</div>
			</div>
			<div id="contenedorproducto3" class="contendorproducto">
				<div id="producto3">
					<img class="producto" id="imagen3" src="fotos/3.png" data-filtro="gorra hombre personalizada" data-nombre="Remera Coldplay" data-precio="$600" data-cantidad-cuotas="3" data-precio-cuota="250" data-talles="XS/S/L/XL" data-colores="verde/negro/naranja">
				</div>
			</div>
			<div id="contenedorproducto4" class="contendorproducto">
				<div id="producto4">
					<img class="producto" id="imagen4" src="fotos/4.png" data-filtro="gorra mujer personalizada">
				</div>
			</div>
			<div id="contenedorproducto5" class="contendorproducto">
				<div id="producto5">
					<img class="producto" id="imagen5" src="fotos/5.png" data-filtro="vinilo cocina">
				</div>
			</div>
			<div id="contenedorproducto6" class="contendorproducto">
				<div id="producto6">
					<img class="producto" id="imagen6" src="fotos/6.png" data-filtro="remera hombre lisa">
				</div>
			</div>
			<div id="contenedorproducto7" class="contendorproducto">
				<div id="producto7">
					<img class="producto" id="imagen7" src="fotos/7.png" data-filtro="remera mujer personalizada">
				</div>
			</div>
			<div id="contenedorproducto8" class="contendorproducto">
				<div id="producto8">
					<img class="producto" id="imagen8" src="fotos/8.png" data-filtro="gorra hombre personalizada">
				</div>
			</div>
			<div id="contenedorproducto9" class="contendorproducto">
				<div id="producto9">
					<img class="producto" id="imagen9" src="fotos/9.png" data-filtro="gorra mujer personalizada">
				</div>
			</div>
			<div id="contenedorproducto10" class="contendorproducto">
				<div id="producto10">
					<img class="producto" id="imagen10" src="fotos/10.png" data-filtro="vinilo cocina">
				</div>
			</div>
			<div id="contenedorproducto11" class="contendorproducto">
				<div id="producto11">
					<img class="producto" id="imagen11" src="fotos/11.png" data-filtro="remera mujer personalizada">
				</div>
			</div>
			<div id="contenedorproducto12" class="contendorproducto">
				<div id="producto12">
					<img class="producto" id="imagen12" src="fotos/12.png" data-filtro="gorra hombre personalizada">
				</div>
			</div>
		</div>
		
		<!-- PRESUPUESTO + FORMULARIO -->
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

		<!-- PREGUNTAS FRECUENTES -->
		
		<div id="preguntasfrecuentes">
			<h2 id="preguntasfrecuentestitle">Preguntas Frecuentes</h2>
			<div class="accordion" id="accordionPanelsStayOpenExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
						Accordion Item #1
						</button>
					</h2>
					<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
						<div class="accordion-body">
							<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
						Accordion Item #2
						</button>
					</h2>
					<div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
						<div class="accordion-body">
							<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingThree">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
						Accordion Item #3
						</button>
					</h2>
					<div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
						<div class="accordion-body">
							<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- QUIENES SOMOS -->
		<div id="quienessomos">
			<div id="card1container" class="cardcontainers">
				<div id="card1">
					<div id="profilePicContainerCard1"></div>
					<span id="nameCard1">John</span>
					<span id="surnameCard1">Doe</span>
					<p id="positionCard1">CEO</p>
					<!-- <p id="ageCard1">44</p> -->
					<div class="divisorCard1" id="divisor1Card1"></div>
					<div id="textCard1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ea modi? Impedit quasi asperiores, non id enim ipsam, suscipit minima magnam.</div>
					<div class="divisorCard1" id="divisor2Card1"></div>
					<div id="socialMedia1">
						<span></span>
						<span></span>
						<span class="fab fa-facebook-f"></span>
					</div>
					<div></div>
				</div>
			</div>
			<div id="card2container" class="cardcontainers">
				<div id="card2">
					<div id="borderdetail1card2"></div> <!-- Hacerlo con photoshop -->
					<div id="borderdetail2card2"></div>
				</div>
			</div>
			<div id="card3container" class="cardcontainers">
				<div id="card3">
					<div id="profilePicContainerCard3"></div>
					<div id="dataContainerCard3">
						<div class="buttonCard3"></div>
						<div class="buttonCard3"></div>
						<div class="buttonCard3"></div>
						<div class="buttonCard3"></div>
						<div class="buttonCard3"></div>
						<div class="buttonCard3"></div>
					</div>
				</div>
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

		<!-- SCRIPT BOOTSTRAP -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>