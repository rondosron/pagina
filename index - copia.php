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
					<div id="backgroundCard1">
						<!-- <svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
							<rect x="0" y="0" width="600" height="900" fill="#140021"></rect>
							<path d="M0 150L46 150L46 78L92 78L92 126L138 126L138 136L185 136L185 133L231 133L231 149L277 149L277 96L323 96L323 72L369 72L369 88L415 88L415 95L462 95L462 155L508 155L508 150L554 150L554 108L600 108L600 68L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#9900ff"></path><path d="M0 232L46 232L46 203L92 203L92 261L138 261L138 225L185 225L185 205L231 205L231 240L277 240L277 179L323 179L323 227L369 227L369 237L415 237L415 239L462 239L462 205L508 205L508 228L554 228L554 262L600 262L600 254L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#8e00ec"></path><path d="M0 309L46 309L46 318L92 318L92 346L138 346L138 325L185 325L185 312L231 312L231 343L277 343L277 348L323 348L323 315L369 315L369 377L415 377L415 313L462 313L462 324L508 324L508 306L554 306L554 298L600 298L600 307L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#8200d9"></path><path d="M0 466L46 466L46 478L92 478L92 425L138 425L138 487L185 487L185 457L231 457L231 484L277 484L277 448L323 448L323 433L369 433L369 421L415 421L415 471L462 471L462 460L508 460L508 490L554 490L554 423L600 423L600 438L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#7700c6"></path><path d="M0 563L46 563L46 528L92 528L92 532L138 532L138 583L185 583L185 594L231 594L231 586L277 586L277 597L323 597L323 573L369 573L369 547L415 547L415 526L462 526L462 579L508 579L508 540L554 540L554 543L600 543L600 572L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#6c00b4"></path><path d="M0 719L46 719L46 664L92 664L92 701L138 701L138 674L185 674L185 699L231 699L231 662L277 662L277 636L323 636L323 659L369 659L369 672L415 672L415 641L462 641L462 657L508 657L508 718L554 718L554 641L600 641L600 702L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#6100a2"></path><path d="M0 746L46 746L46 797L92 797L92 756L138 756L138 770L185 770L185 759L231 759L231 761L277 761L277 827L323 827L323 770L369 770L369 795L415 795L415 815L462 815L462 744L508 744L508 758L554 758L554 781L600 781L600 775L600 901L600 901L554 901L554 901L508 901L508 901L462 901L462 901L415 901L415 901L369 901L369 901L323 901L323 901L277 901L277 901L231 901L231 901L185 901L185 901L138 901L138 901L92 901L92 901L46 901L46 901L0 901Z" fill="#560090"></path>
						</svg> -->
					</div>
					<div id="gridContainer"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
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
						<span class="fab fa-facebook-f"></span>
					</div>
					<div id="socialMedia2" class="fab fa-linkedin-in">
						<span style="--i:0"></span>
						<span style="--i:1"></span>
						<span style="--i:2"></span>
						<span style="--i:3"></span>
						<span style="--i:4"></span>
						<span style="--i:5"></span>
					</div>
					<div id="socialMedia3">
						<i class="fab fa-twitter" id="icon1SocialMedia3Card1"></i>
						<div id="background1SocialMedia3Card1"></div>
						<!-- <i class="fab fa-twitter" id="icon2SocialMedia3Card1"></i> -->
						<!-- <div id="background2SocialMedia3Card1"></div> -->
					</div>
				</div>
			</div>
			<div id="card2container" class="cardcontainers">
				<div id="card2">
					<div id="profilePicContainerCard2">
						<div id="profilePicBackgroundCard2">
							<div id="profilePicCard2"></div>
							<div id="border1Card2">
								<p>o</p>
							</div>
							<div id="border2Card2">
								<p>o</p>
							</div>
						</div>
						<div id="contentCard2">
							<!-- VER SI AGREGAR UN MARCO AL CONTENT -->
							<!-- VER SI AGREGAR UN MARCO AL CONTENT -->
							<!-- VER SI AGREGAR UN MARCO AL CONTENT -->
							<div id="shape1Card2"></div>
							<div id="shape2Card2"></div>
							<div id="shape3Card2">
								<svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="
									    height: fit-content;
									    width: 100%;
									"><rect x="0" y="0" width="600" height="900" fill="transparent" style="
									    /* overflow: hidden; */
									"></rect><defs><linearGradient id="grad1_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#001220" stop-opacity="1"></stop><stop offset="70%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#001220" stop-opacity="1"></stop><stop offset="70%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(600, 0)" style="
									    /* overflow: hidden; */
									"><path d="M0 486.7C-50.6 450.7 -101.1 414.6 -164.6 397.3C-228 379.9 -304.2 381.2 -344.2 344.2C-384.2 307.1 -387.9 231.8 -405.6 168C-423.3 104.2 -455 52.1 -486.7 0L0 0Z" fill="#FBAE3C" style="
									    fill: transparent;
									    /* outline: 3px solid white; */
									    stroke: white;
									    stroke-width: 3px;
									"></path></g><g transform="translate(0, 900)"><path d="M0 -486.7C44.5 -436.3 88.9 -385.8 153.5 -370.5C218 -355.2 302.6 -375 344.2 -344.2C385.8 -313.4 384.4 -231.9 401 -166.1C417.6 -100.3 452.2 -50.1 486.7 0L0 0Z" fill="#FBAE3C"></path></g>
								</svg>
							</div>
							
							<div id="svgBackground1ContainerCard2">
								<!--  hecho con https://www.blobmaker.app/ valores: el primero en el anteultimo y el segundo en el último -->
								<svg id="svgBackground1Card2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<linearGradient id="gradient1">
											<stop offset="22%" stop-color="#AA076B" />
											<stop offset="81%" stop-color="#61045F" />
										</linearGradient>
									</defs>
									<path fill="url(#gradient1)" d="M40.5,-63.4C53.8,-54.5,66.6,-45.4,59.8,-34.8C53.1,-24.1,26.8,-12,25.7,4.5C24.5,20.9,48.4,41.8,52.7,56.6C56.9,71.3,41.5,80,25.1,84.2C8.8,88.3,-8.5,88,-21.7,80.9C-35,73.9,-44.3,60.1,-44.8,46.2C-45.3,32.3,-37.1,18.2,-37.4,6.3C-37.7,-5.7,-46.5,-15.5,-46,-22.8C-45.4,-30.1,-35.4,-34.8,-26.2,-45.5C-17,-56.2,-8.5,-72.9,2.6,-76.9C13.6,-80.9,27.3,-72.3,40.5,-63.4Z" transform="translate(100 100)" />
								</svg>
							</div>
							<div id="svgBackground2ContainerCard2">
								<!--  hecho con https://www.blobmaker.app/ valores: el primero en el anteultimo y el segundo en el último -->
								<svg id="svgBackground2Card2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									<!-- <defs>
										<linearGradient id="gradient1">
											<stop offset="22%" stop-color="#FFC338" />
											<stop offset="81%" stop-color="#FFEA68" />
										</linearGradient>
									</defs> -->
									<path fill="url(#gradient1)" d="M38.1,-60.8C47.5,-60.5,52.1,-46.6,60.3,-34.2C68.5,-21.8,80.2,-10.9,80.4,0.1C80.7,11.2,69.5,22.4,59.6,31.8C49.6,41.1,41,48.5,31.2,53.8C21.5,59,10.8,62.1,5.2,53.1C-0.4,44.1,-0.7,23,-13.2,19.3C-25.8,15.7,-50.5,29.6,-65.3,29.3C-80,29,-84.9,14.5,-86.7,-1.1C-88.5,-16.6,-87.3,-33.2,-74.6,-36.9C-61.8,-40.7,-37.4,-31.7,-23.1,-29.2C-8.7,-26.7,-4.3,-30.8,5,-39.5C14.3,-48.1,28.6,-61.2,38.1,-60.8Z" transform="translate(137 50)" />
								</svg>
							</div>
							<div id="svgBackground3ContainerCard2">
								<!--  hecho con https://www.blobmaker.app/ valores: el primero en el anteultimo y el segundo en el último -->
								<svg id="svgBackground3Card2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									<!-- <defs>
										<linearGradient id="gradient1">
											<stop offset="22%" stop-color="#FFC338" />
											<stop offset="81%" stop-color="#FFEA68" />
										</linearGradient>
									</defs> -->
									<path fill="url(#gradient1)" d="M22.6,-35.2C33.3,-33.1,48.5,-34.9,47.6,-29.7C46.7,-24.5,29.6,-12.3,21.6,-4.6C13.6,3,14.7,6.1,17.9,15.2C21.1,24.4,26.4,39.6,23.7,51.4C21.1,63.3,10.6,71.7,4.2,64.5C-2.2,57.3,-4.4,34.4,-17.8,28.8C-31.2,23.1,-55.7,34.7,-55.9,32.8C-56.2,30.9,-32.1,15.4,-27.9,2.5C-23.6,-10.5,-39.2,-21.1,-39.1,-23.3C-39.1,-25.6,-23.5,-19.6,-14.4,-22.7C-5.2,-25.7,-2.6,-37.8,1.7,-40.7C6,-43.6,12,-37.4,22.6,-35.2Z" transform="translate(100 100)" />
								</svg>
							</div>
							<!-- <div id="borderTop1"></div> -->
							<!-- <div id="borderTop2"></div> -->
							<div id="nameCard2">
								<p class="letterNameCard2">J</p>
								<p class="letterNameCard2">a</p>
								<p class="letterNameCard2">n</p>
								<p class="letterNameCard2">e</p>
								<p class="letterNameCard2">&nbsp;</p>
								<p class="letterNameCard2">D</p>
								<p class="letterNameCard2">o</p>
								<p class="letterNameCard2">e</p>
							</div>
							<div id="positionCard2"><p>Community Manager</p></div>
							<!-- <div id="descriptionCard2">
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Quis maiores id eum dignissimos consectetur mollitia aperiam asperiores.</p>
							</div> -->
							<div id="ageCard2"><p>28</p></div>
							<div id="locationCard2"><p>London - England</p></div>
							<div id="mailCard2"><p>JaneDoeCM@gmail.com</p></div>
							<div id="socialMedia1Card2">
								<i class="fab fa-linkedin-in"></i>
							</div>
							<div id="socialMedia2Card2">
								<i class="fab fa-linkedin-in"></i>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<path id="blob" d="M411.5,317Q327,384,230,418.5Q133,453,72.5,351.5Q12,250,86.5,173Q161,96,258.5,81.5Q356,67,426,158.5Q496,250,411.5,317Z" fill="none" stroke-width="7px" stroke="red"></path>
								</svg>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<path id="blob" d="M425.5,315Q380,380,315,402Q250,424,190.5,396.5Q131,369,97.5,309.5Q64,250,99.5,192.5Q135,135,192.5,88.5Q250,42,314,82Q378,122,424.5,186Q471,250,425.5,315Z" fill="none" stroke-width="7px" stroke="blue"></path>
								</svg>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<path id="blob" d="M400,338Q352,426,261,407.5Q170,389,101,319.5Q32,250,99.5,178Q167,106,259.5,90Q352,74,400,162Q448,250,400,338Z" fill="none" stroke-width="7px" stroke="green"></path>
								</svg>
							</div>
							<div id="socialMedia3Card2">
								<i class="fab fa-linkedin-in"></i>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<path id="blob" d="M389.5,334Q347,418,248,421.5Q149,425,102.5,337.5Q56,250,94.5,148.5Q133,47,233.5,76Q334,105,383,177.5Q432,250,389.5,334Z" fill="red"></path>
								</svg>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<path id="blob" d="M386.5,340Q354,430,248.5,432.5Q143,435,104.5,342.5Q66,250,115.5,176.5Q165,103,258.5,88Q352,73,385.5,161.5Q419,250,386.5,340Z" fill="blue"></path>
								</svg>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<path id="blob" d="M410,327Q339,404,235.5,429Q132,454,83.5,352Q35,250,94,166Q153,82,252.5,78Q352,74,416.5,162Q481,250,410,327Z" fill="green"></path>
								</svg>
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvgBackground">
									<path d="M382.5,315.5Q326,381,249.5,382Q173,383,104,316.5Q35,250,89.5,158Q144,66,242.5,79Q341,92,390,171Q439,250,382.5,315.5Z" fill="#212529"></path>
								</svg>
							</div>
						</div>
						<div id="shadowProfilePicCard2"></div>
					</div>
				</div>
			</div>
			<div id="card3container" class="cardcontainers">
				<div id="card3" >
					<!-- SOURCE: https://danmarshall.github.io/google-font-to-svg-path/ -->
					<div id="nameCard3">
						<svg viewBox="0 0 327.881 76.709" xmlns="http://www.w3.org/2000/svg">
							<g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" >
								<path d="M 77.599 35.193 A 20.953 20.953 0 0 0 75.342 35.01 A 11.872 11.872 0 0 0 65.993 40.288 A 21.18 21.18 0 0 0 63.623 44.678 Q 61.23 50.538 61.23 57.666 A 35.065 35.065 0 0 0 61.401 61.209 Q 61.722 64.363 62.644 66.881 A 14.045 14.045 0 0 0 68.115 74.024 A 13.516 13.516 0 0 0 70.163 75.108 A 10.035 10.035 0 0 0 74.072 75.928 Q 82.422 75.928 86.084 67.334 Q 88.33 62.061 88.379 54.444 A 35.677 35.677 0 0 0 88.964 54.203 Q 90.988 53.347 92.676 52.332 A 21.14 21.14 0 0 0 95.711 50.145 L 93.018 70.801 L 93.018 71.387 A 9.613 9.613 0 0 0 93.046 72.141 Q 93.113 72.997 93.34 73.676 A 3.503 3.503 0 0 0 95.361 75.928 A 3.469 3.469 0 0 0 95.526 75.992 A 2.97 2.97 0 0 0 96.533 76.172 Q 98.042 76.172 99.173 74.962 A 6.311 6.311 0 0 0 100 73.829 Q 100.83 72.413 100.977 70.655 A 3.64 3.64 0 0 1 100.983 70.452 Q 101.011 69.946 101.172 69.141 A 44.985 44.985 0 0 1 102.228 64.683 Q 102.914 62.29 103.918 59.568 A 110.771 110.771 0 0 1 106.006 54.346 A 90.162 90.162 0 0 1 107.279 51.547 Q 109.773 46.317 111.698 44.395 A 4.197 4.197 0 0 1 113.086 43.409 A 2.412 2.412 0 0 1 113.122 43.397 Q 113.249 43.357 113.367 43.335 A 1.434 1.434 0 0 1 113.623 43.311 A 0.536 0.536 0 0 1 113.978 43.503 Q 114.893 44.501 114.893 50.635 A 52.086 52.086 0 0 1 114.885 51.511 Q 114.867 52.558 114.81 53.968 A 196.317 196.317 0 0 1 114.746 55.42 A 282.222 282.222 0 0 0 114.739 55.612 Q 114.672 57.42 114.655 58.533 A 45.048 45.048 0 0 0 114.648 59.229 A 48.951 48.951 0 0 0 114.659 60.242 Q 114.938 73.719 122.754 76.026 A 11.261 11.261 0 0 0 123.497 76.208 A 12.559 12.559 0 0 0 126.074 76.465 A 14.237 14.237 0 0 0 131.385 75.398 A 20.045 20.045 0 0 0 133.508 74.386 A 3.686 3.686 0 0 0 134.912 75.538 A 3.469 3.469 0 0 0 135.077 75.601 A 2.97 2.97 0 0 0 136.084 75.782 Q 138.184 75.782 139.6 73.438 A 7.761 7.761 0 0 0 140.576 70.215 L 140.674 68.799 A 33.602 33.602 0 0 1 140.723 68.538 Q 141.478 64.596 143.443 59.335 A 114.726 114.726 0 0 1 145.557 54.102 Q 148.884 46.401 151.295 43.995 A 4.049 4.049 0 0 1 152.686 43.018 Q 152.878 42.954 153.028 42.932 A 1.009 1.009 0 0 1 153.174 42.92 A 0.535 0.535 0 0 1 153.33 42.965 Q 154.158 43.342 154.311 46.646 A 35.815 35.815 0 0 1 154.346 48.291 Q 154.346 49.5 154.291 51.148 A 153.868 153.868 0 0 1 154.248 52.295 Q 154.211 54.017 154.202 55.024 A 66.025 66.025 0 0 0 154.199 55.616 Q 154.199 65.166 156.559 70.194 A 10.557 10.557 0 0 0 159.424 74.024 A 8.994 8.994 0 0 0 162.537 75.615 A 11.129 11.129 0 0 0 165.625 76.026 A 14.348 14.348 0 0 0 170.753 75.055 A 19.22 19.22 0 0 0 174.658 72.999 A 22.686 22.686 0 0 0 175.725 72.142 Q 177.435 70.679 178.189 69.348 A 4.388 4.388 0 0 0 178.76 67.725 A 4.483 4.483 0 0 0 178.696 66.951 A 2.897 2.897 0 0 0 177.246 64.844 A 2.824 2.824 0 0 0 177.168 64.8 A 2.369 2.369 0 0 0 176.025 64.502 Q 174.817 64.502 173.004 65.574 A 18.421 18.421 0 0 0 171.729 66.407 A 29.144 29.144 0 0 1 170.484 67.272 Q 169.286 68.057 168.397 68.425 A 4.716 4.716 0 0 1 167.529 68.702 A 7.496 7.496 0 0 1 167.513 68.705 Q 167.253 68.751 167.017 68.775 A 4.67 4.67 0 0 1 166.553 68.799 A 3.122 3.122 0 0 1 164.268 67.797 Q 163.784 67.308 163.372 66.579 A 10.211 10.211 0 0 1 162.695 65.088 A 26.51 26.51 0 0 0 162.604 64.818 A 22.685 22.685 0 0 0 162.402 64.258 A 2.843 2.843 0 0 1 162.351 64.083 Q 161.816 62.051 161.816 52.54 Q 161.816 50.342 161.844 46.991 A 1473.23 1473.23 0 0 1 161.865 44.629 Q 161.914 42.432 161.914 41.846 Q 161.914 39.757 160.919 38.142 A 7.551 7.551 0 0 0 158.936 36.036 A 7.446 7.446 0 0 0 154.541 34.62 A 10.749 10.749 0 0 0 146.923 37.524 A 14.452 14.452 0 0 0 144.238 41.016 A 2.886 2.886 0 0 0 144.151 41.138 A 2.434 2.434 0 0 0 143.994 41.407 Q 143.994 41.04 144.022 40.455 A 48.132 48.132 0 0 1 144.043 40.04 A 81.958 81.958 0 0 0 144.058 39.836 Q 144.118 38.993 144.135 38.501 A 9.7 9.7 0 0 0 144.141 38.184 A 9.369 9.369 0 0 0 144.046 36.795 Q 143.68 34.363 141.895 33.936 Q 141.357 33.838 140.82 33.838 A 3.132 3.132 0 0 0 138.287 35.022 Q 137.424 36.068 137.012 38.038 Q 136.865 38.77 136.768 39.6 L 133.262 66.08 A 18.38 18.38 0 0 0 132.129 66.846 Q 130.121 68.28 128.824 68.846 A 5.213 5.213 0 0 1 127.979 69.141 Q 127.441 69.239 126.953 69.239 Q 125.046 69.239 123.734 66.884 A 11.443 11.443 0 0 1 123.047 65.381 A 11.018 11.018 0 0 1 122.928 65.049 A 8.673 8.673 0 0 1 122.803 64.649 A 3.129 3.129 0 0 1 122.714 64.306 Q 122.358 62.603 122.285 56.422 A 296.846 296.846 0 0 1 122.266 52.93 A 447.155 447.155 0 0 1 122.268 51.442 Q 122.274 49.677 122.293 47.355 A 1513.527 1513.527 0 0 1 122.314 44.971 L 122.314 42.237 A 8.559 8.559 0 0 0 122.313 42.077 Q 122.276 40.114 121.335 38.589 A 7.369 7.369 0 0 0 119.385 36.524 A 8.988 8.988 0 0 0 119.188 36.382 A 7.281 7.281 0 0 0 114.941 35.01 A 10.897 10.897 0 0 0 107.341 37.919 A 14.437 14.437 0 0 0 104.639 41.407 A 3074.867 3074.867 0 0 0 105.756 32.63 Q 108.691 9.287 108.691 5.713 A 11.834 11.834 0 0 0 108.686 5.369 Q 108.596 2.26 106.836 1.612 A 4.846 4.846 0 0 0 106.421 1.513 A 5.542 5.542 0 0 0 105.371 1.416 Q 102.722 1.455 101.72 5.069 A 14.9 14.9 0 0 0 101.318 7.129 L 96.587 43.42 A 3.125 3.125 0 0 0 96.47 43.357 A 2.499 2.499 0 0 0 95.313 43.067 A 2.316 2.316 0 0 0 95.299 43.067 Q 94.142 43.074 92.165 44.24 A 23.269 23.269 0 0 0 90.869 45.069 A 159.793 159.793 0 0 1 90.537 45.295 Q 88.647 46.576 87.793 47.071 A 27.595 27.595 0 0 0 87.572 45.912 Q 87.05 43.465 86.151 41.569 A 10.552 10.552 0 0 0 78.564 35.352 A 17.968 17.968 0 0 0 77.599 35.193 Z M 48.047 10.45 L 21.094 10.45 A 8.931 8.931 0 0 1 19.824 10.157 A 6.141 6.141 0 0 1 18.469 9.487 Q 16.846 8.392 16.846 6.446 Q 16.846 5.372 17.383 4.444 A 4.038 4.038 0 0 1 20.312 2.484 A 6.568 6.568 0 0 1 21.436 2.393 Q 22.559 2.295 34.766 2.295 A 2250.355 2250.355 0 0 1 40.161 2.301 Q 45.398 2.314 49.285 2.353 A 598.885 598.885 0 0 1 52.539 2.393 A 3.496 3.496 0 0 1 54.367 2.913 A 4.144 4.144 0 0 1 54.395 2.93 A 4.382 4.382 0 0 1 55.633 3.988 Q 56.312 4.852 56.432 6.042 A 4.969 4.969 0 0 1 56.445 6.202 A 73.753 73.753 0 0 0 56.073 8.912 Q 55.565 13.105 55.014 20.287 A 602.646 602.646 0 0 0 54.883 22.022 A 999.3 999.3 0 0 1 54.672 25.025 Q 54.465 27.92 54.296 29.985 A 222.511 222.511 0 0 1 54.15 31.69 A 156.403 156.403 0 0 1 52.899 41.767 Q 51.327 51.606 48.697 58.023 A 39.32 39.32 0 0 1 48.047 59.522 Q 40.527 75.928 22.51 76.026 Q 19.115 76.026 14.857 74.437 A 40.235 40.235 0 0 1 12.012 73.243 A 32.341 32.341 0 0 1 6.695 70.169 Q 3.789 68.069 1.899 65.509 A 17.847 17.847 0 0 1 0.391 63.086 Q 0.049 62.403 0 61.377 A 4.403 4.403 0 0 1 0.439 59.473 A 4.53 4.53 0 0 1 1.308 58.268 Q 2.332 57.276 3.906 57.276 A 3.553 3.553 0 0 1 6.299 58.295 A 5.209 5.209 0 0 1 6.836 58.887 Q 14.16 68.409 23.633 68.457 A 18.696 18.696 0 0 0 27.921 67.981 A 16.174 16.174 0 0 0 30.273 67.237 A 17.316 17.316 0 0 0 37.887 61.132 Q 42.342 55.077 44.58 43.946 A 89.822 89.822 0 0 0 45.358 39.405 Q 46.484 31.788 47.363 19.336 A 1153.391 1153.391 0 0 1 47.571 16.456 Q 47.833 12.885 48.007 10.897 A 136.551 136.551 0 0 1 48.047 10.45 Z M 280.187 35.193 A 20.953 20.953 0 0 0 277.93 35.01 A 11.872 11.872 0 0 0 268.581 40.288 A 21.18 21.18 0 0 0 266.211 44.678 Q 263.818 50.538 263.818 57.666 A 35.065 35.065 0 0 0 263.989 61.209 Q 264.31 64.363 265.232 66.881 A 14.045 14.045 0 0 0 270.703 74.024 A 13.516 13.516 0 0 0 272.751 75.108 A 10.035 10.035 0 0 0 276.66 75.928 Q 285.01 75.928 288.672 67.334 Q 290.918 62.061 290.967 54.444 A 35.677 35.677 0 0 0 291.552 54.203 Q 293.576 53.347 295.264 52.332 A 21.14 21.14 0 0 0 298.591 49.887 A 35.938 35.938 0 0 0 296.826 57.569 A 37.537 37.537 0 0 0 296.707 58.933 A 31.509 31.509 0 0 0 296.631 61.084 A 33.239 33.239 0 0 0 296.812 64.662 Q 297.115 67.45 297.921 69.593 A 10.095 10.095 0 0 0 305.713 76.416 A 15.272 15.272 0 0 0 306.908 76.598 A 18.583 18.583 0 0 0 308.984 76.709 Q 311.956 76.709 315.529 75.627 A 39.49 39.49 0 0 0 319.727 74.073 Q 324.258 72.126 326.298 70.017 A 6.346 6.346 0 0 0 327.637 68.067 Q 327.751 67.746 327.812 67.447 A 3.263 3.263 0 0 0 327.881 66.797 A 3.82 3.82 0 0 0 327.877 66.623 Q 327.803 64.993 326.318 64.112 Q 325.635 63.721 325 63.721 Q 324.123 63.721 322.262 64.824 A 27.163 27.163 0 0 0 321.143 65.528 A 38.405 38.405 0 0 1 318.508 67.107 Q 315.934 68.503 313.867 68.995 Q 312.109 69.385 310.303 69.385 A 16.97 16.97 0 0 1 309.827 69.339 Q 307.723 69.104 306.413 68.394 A 4.152 4.152 0 0 1 304.883 67.041 Q 303.906 65.479 303.906 62.647 Q 303.906 61.735 303.953 61.104 A 8.762 8.762 0 0 1 304.004 60.596 Q 305.273 60.84 306.592 60.84 A 18.571 18.571 0 0 0 318.848 56.446 A 20.135 20.135 0 0 0 319.26 56.095 A 15.19 15.19 0 0 0 324.707 45.459 A 14.988 14.988 0 0 0 324.728 45.17 A 13.087 13.087 0 0 0 324.756 44.336 Q 324.756 37.11 318.311 35.254 A 14.347 14.347 0 0 0 314.551 34.766 A 12.238 12.238 0 0 0 310.155 35.564 Q 305.637 37.286 302.1 42.725 A 32.37 32.37 0 0 0 300.669 45.133 A 2.881 2.881 0 0 0 300.194 44.277 A 3.667 3.667 0 0 0 299.316 43.506 A 3.125 3.125 0 0 0 299.058 43.357 A 2.499 2.499 0 0 0 297.9 43.067 A 2.316 2.316 0 0 0 297.887 43.067 Q 296.73 43.074 294.753 44.24 A 23.269 23.269 0 0 0 293.457 45.069 A 159.793 159.793 0 0 1 293.125 45.295 Q 291.235 46.576 290.381 47.071 A 27.595 27.595 0 0 0 290.16 45.912 Q 289.638 43.465 288.738 41.569 A 10.552 10.552 0 0 0 281.152 35.352 A 17.968 17.968 0 0 0 280.187 35.193 Z M 229.346 0 A 79.758 79.758 0 0 0 228.735 0.003 Q 225.948 0.024 224.316 0.245 A 5.273 5.273 0 0 0 223.689 0.305 Q 222.506 0.494 221.709 1.229 A 4.181 4.181 0 0 0 220.752 2.588 A 4.384 4.384 0 0 0 220.41 4.053 Q 211.523 70.313 211.523 71.29 Q 211.523 74.17 213.477 75.44 A 3.433 3.433 0 0 0 214.14 75.785 A 3.666 3.666 0 0 0 215.479 76.026 A 52.786 52.786 0 0 0 221.25 75.717 A 41.574 41.574 0 0 0 239.99 69.092 A 37.062 37.062 0 0 0 244.8 65.295 Q 251.752 58.795 255.115 48.797 A 60.869 60.869 0 0 0 257.91 35.01 A 83.038 83.038 0 0 0 258.252 27.393 A 36.923 36.923 0 0 0 257.193 18.219 A 21.935 21.935 0 0 0 244.092 2.784 A 31.891 31.891 0 0 0 236.769 0.612 A 42.955 42.955 0 0 0 229.346 0 Z M 227.637 7.959 L 220.068 67.627 A 182.92 182.92 0 0 1 220.825 67.579 A 220.503 220.503 0 0 1 221.631 67.53 Q 230.664 66.651 237.646 61.036 Q 250.586 50.635 250.586 27.735 A 30.59 30.59 0 0 0 250.16 22.489 Q 249.451 18.415 247.559 15.332 Q 242.822 7.618 231.934 7.618 A 26.141 26.141 0 0 0 229.748 7.714 A 34.912 34.912 0 0 0 227.637 7.959 Z M 78.699 55.475 A 21.897 21.897 0 0 0 81.445 55.713 Q 80.957 64.991 77.393 67.725 Q 76.172 68.653 74.658 68.653 A 4.875 4.875 0 0 1 70.65 66.713 Q 69.951 65.832 69.445 64.549 A 15.566 15.566 0 0 1 68.701 61.963 A 23.102 23.102 0 0 1 68.262 57.422 A 34.477 34.477 0 0 1 68.374 54.617 A 28.525 28.525 0 0 1 69.531 48.487 Q 71.387 53.956 77.832 55.323 A 19.219 19.219 0 0 0 78.699 55.475 Z M 281.287 55.475 A 21.897 21.897 0 0 0 284.033 55.713 Q 283.545 64.991 279.98 67.725 Q 278.76 68.653 277.246 68.653 A 4.875 4.875 0 0 1 273.238 66.713 Q 272.539 65.832 272.033 64.549 A 15.566 15.566 0 0 1 271.289 61.963 A 23.102 23.102 0 0 1 270.85 57.422 A 34.477 34.477 0 0 1 270.961 54.617 A 28.525 28.525 0 0 1 272.119 48.487 Q 273.975 53.956 280.42 55.323 A 19.219 19.219 0 0 0 281.287 55.475 Z M 305.42 53.442 A 44.325 44.325 0 0 0 305.322 53.76 Q 306.543 54.053 307.666 54.053 A 10.808 10.808 0 0 0 314.746 51.563 Q 318.115 48.829 318.115 45.069 Q 318.115 42.351 316.865 41.572 A 2.205 2.205 0 0 0 315.723 41.26 A 5.904 5.904 0 0 0 313.586 41.741 A 7.987 7.987 0 0 0 312.305 42.432 Q 307.946 45.354 305.42 53.442 Z M 80.713 49.073 L 81.396 49.073 A 24.871 24.871 0 0 0 81.052 46.808 Q 80.298 43.123 78.606 42.473 A 2.112 2.112 0 0 0 77.881 42.334 A 2.484 2.484 0 0 0 77.393 42.383 Q 76.318 42.774 76.318 43.995 A 6.598 6.598 0 0 0 76.66 46.094 A 5.435 5.435 0 0 0 77.434 47.559 Q 78.59 49.073 80.713 49.073 Z M 283.301 49.073 L 283.984 49.073 A 24.871 24.871 0 0 0 283.64 46.808 Q 282.886 43.123 281.194 42.473 A 2.112 2.112 0 0 0 280.469 42.334 A 2.484 2.484 0 0 0 279.98 42.383 Q 278.906 42.774 278.906 43.995 A 6.598 6.598 0 0 0 279.248 46.094 A 5.435 5.435 0 0 0 280.022 47.559 Q 281.177 49.073 283.301 49.073 Z" vector-effect="non-scaling-stroke"/>
							</g>
						</svg>
					</div>
					<div id="profilePicContainerCard3">
						<div id="profilePicCard3"></div>
					</div>
					<div id="positionCard3">
						<p>Designer</p>
					</div>
					<div id="textCard3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, quis, eaque? Vitae cum pariatur.</div>
					<div id="socialMediaContainerCard3">	
						<div id="socialMedia1Card3">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<i class="fab fa-linkedin-in"></i>
						</div>
						<div id="socialMedia2Card3">
							<span class="fab fa-facebook-f"></span>
						</div>
						<div id="socialMedia3Card3">
							<span class="fab fa-twitter"></span>
						</div>
					</div>
					<div id="lightLine1"></div>
					<div id="lightLine2"></div>
				</div>
			</div>
			<div id="card4container" class="cardcontainers">
				<div id="card4">
					<div id="littleRibbonContainerCard4">
						<div id="littleRibbonCard4">
							<div id="leftBackRibbonCard4"></div>
							<div id="leftEndRibbonCard4"></div>

							<div id="rightBackRibbonCard4"></div>
							<div id="rightEndRibbonCard4"></div>
						</div>
						
						<div>
							<div></div>
						</div>
					</div>
					<div id="nameContainerCard4">
						<p id="nameCard4">George Doe</p>
					</div>
					<iframe src="card4.html">
					</iframe>
					<div id="overBackground"></div>
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

		<!-- Tilt.js -->
		<script src="vanilla-tilt.js"></script>

	</body>
</html>