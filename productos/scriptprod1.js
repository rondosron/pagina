	/*
		let imagen = document.querySelector('#imagenoverlay')

		let nombre = document.querySelector('#nombre')
		let nombreData = document.createElement('h1')
		nombreData.id = "contenidonombre"
		nombreData.innerText = imagen.getAttribute("data-nombre")
		nombre.appendChild(nombreData)

		let precio = document.querySelector('#precio')
		let precioData = document.createElement('p')
		precioData.id = "contenidoprecio"
		precioData.innerText = imagen.getAttribute("data-precio")
		precio.appendChild(precioData)
	
		/* CUOTAS */
	/*	let iconoCuotas = document.createElement('i') // icono
		iconoCuotas.classList.add("fas")
		iconoCuotas.classList.add("fa-credit-card")
		precio.appendChild(iconoCuotas)
		
		let textoCuotas1 = document.createElement('p') // texto (x cuotas de $
		textoCuotas1.id = "textoCuotas1"
		textoCuotas1.innerText = "(" + imagen.getAttribute("data-cantidad-cuotas") + " cuotas de " // 3 cuotas
		precio.appendChild(textoCuotas1)

		let contenedorPrecioCuota = document.createElement('span')
		contenedorPrecioCuota.id = "contenedorPrecioCuota"
		contenedorPrecioCuota.innerText = "$" + imagen.getAttribute("data-precio-cuota")
		precio.appendChild(contenedorPrecioCuota)

		let textoCuotas2 = document.createElement('p') // parentesis final
		textoCuotas2.id = "textoCuotas2"
		textoCuotas2.innerText = ")"
		precio.appendChild(textoCuotas2)

		let contenedorCuotas = document.createElement('div')
		contenedorCuotas.id = "contenedorcuotas"
		precio.appendChild(contenedorCuotas)
		contenedorCuotas.appendChild(iconoCuotas)
		contenedorCuotas.appendChild(textoCuotas1)
		contenedorCuotas.appendChild(contenedorPrecioCuota)
		contenedorCuotas.appendChild(textoCuotas2)


		/*
		let contenedorPrecioCuota = document.createElement('span')
		precioCuota = imagen.getAttribute("data-precio-cuota")
		contenedorPrecioCuota.id = "contenedorPrecioCuota"
		contenedorPrecioCuota.innerText = precioCuota
		textoCuotas1.innerText = "(" + imagen.getAttribute("data-cantidad-cuotas") + " cuotas de $" // 3 cuotas
		textoCuotas1.appendChild(contenedorPrecioCuota)
		textoCuotas.innerText = textoCuotas + ")"
		precio.appendChild(iconoCuotas)
		precio.appendChild(textoCuotas)
	*/
	/*<i class="fas fa-credit-card"></i>
		let talles = document.querySelector('#talles')
	*/	
	/*	let contenedorTalles = document.querySelector('#contenedorTalles')
		stringTalles = imagen.getAttribute("data-talles")
		arregloTalles = stringTalles.split("/")
		console.log(arregloTalles)
		for (let i = 0; i < arregloTalles.length; i++) {
			console.log(i)
			let botonTalle = document.createElement('div')
			if (i == 0) { // el primer boton tiene border radius a la izquierda
				botonTalle.classList.add("botontalle")
				botonTalle.classList.add("primerbotontalle")
				botonTalle.innerText = arregloTalles[i]
			} else if (i == arregloTalles.length - 1) { // el ultimo boton tiene border radius a la derecha
				botonTalle.classList.add("botontalle")
				botonTalle.classList.add("ultimobotontalle")
				botonTalle.innerText = arregloTalles[i]
			} else { // todos los botones del medio
				botonTalle.classList.add("botontalle")
				botonTalle.innerText = arregloTalles[i]
			}
			contenedorTalles.appendChild(botonTalle)
		}
	/*
		let tallesData = document.createElement('')



		
		tallesData.id = "contenidotalles"
		
		talles.appendChild(tallesData)
	*/

	/*
		let colores = document.querySelector('#colores')
		let coloresData = document.createElement('p')
		coloresData.id = "contenidocolores"
		coloresData.innerText = imagen.getAttribute("data-colores")
		colores.appendChild(coloresData)
	*/
	/*	let diccionarioColores = {rojo:"#f30e0e", azul:"#0a1be8", amarillo:"#fbff0f", verde:"#06d616", naranja:"#f58817", violeta:"#6410ea", blanco:"white", negro:"black"};
		// en vez de traducirlos, poner el codigo hexadecimal de un color mas agradable, porque esos son feos.

		let contenedorCirculos = document.querySelector('#contenedorCirculos')

		stringColores = imagen.getAttribute("data-colores")
		arregloColores = stringColores.split("/")
		for (let i = 0; i < arregloColores.length; i++) {
			let color = arregloColores[i]
			let englishColor = diccionarioColores[color];
			let circuloColor = document.createElement('div')
			circuloColor.style.background = englishColor
			circuloColor.classList.add("circulo")
			contenedorCirculos.appendChild(circuloColor)
		}

		///////////////////////////////// BOTONES FINALES ///////////////////////////////

		let alpresupuesto = document.querySelector('#alpresupuesto')

		alpresupuesto.addEventListener('mousedown', function(){ // clickear en el boton
			alpresupuesto.style.top = "3px"
			alpresupuesto.style.boxShadow = "none"
		})

		document.body.addEventListener('mouseup', function(){ // terminar el click donde sea
			alpresupuesto.style.top = "0px"
			alpresupuesto.style.boxShadow = "0px 3px 0"
		})
	*/

	///////////////////////////////// OVERLAY /////////////////////////////////////

	let imagenes = document.querySelectorAll(".producto")

	imagenes.forEach(function(imagenAOverlay) {
		imagenAOverlay.addEventListener('click', function(){
			console.log(imagenes)
			/////////////////////////////////// BACKGROUND /////////////////////////////////
			let background = document.querySelector('#background')
			background.style.visibility = "visible"
			
			/////////////////////////////////// CONTENIDO /////////////////////////////////
			/** IMAGEN **/
			let id = imagenAOverlay.id
			let imagen = document.querySelector(`#${id}`) // id/imagen del producto clickeado

			let imagenoverlay = document.querySelector('#imagenoverlay')
			imagenoverlay.src = imagen.src

			/** NOMBRE **/
			let nombre = document.querySelector('#nombre')
			let nombreData = document.createElement('h1')
			nombreData.id = "contenidonombre"
			nombreData.innerText = imagen.getAttribute("data-nombre")
			imagenoverlay.setAttribute("data-nombre", imagen.getAttribute("data-nombre"))
			nombre.appendChild(nombreData)

			/** PRECIO **/
			let precio = document.querySelector('#precio')
			let precioData = document.createElement('p')
			precioData.id = "contenidoprecio"
			precioData.innerText = imagen.getAttribute("data-precio")
			imagenoverlay.setAttribute("data-precio", imagen.getAttribute("data-precio"))
			precio.appendChild(precioData)

			/* CUOTAS */
			let iconoCuotas = document.createElement('i') // icono
			iconoCuotas.classList.add("fas")
			iconoCuotas.classList.add("fa-credit-card")
			precio.appendChild(iconoCuotas)
			
			let textoCuotas1 = document.createElement('p') // texto (x cuotas de $
			textoCuotas1.id = "textoCuotas1"
			textoCuotas1.innerText = "(" + imagen.getAttribute("data-cantidad-cuotas") + " cuotas de " // 3 cuotas
			imagenoverlay.setAttribute("data-cantidad-cuotas", imagen.getAttribute("data-cantidad-cuotas"))
			precio.appendChild(textoCuotas1)

			let contenedorPrecioCuota = document.createElement('span')
			contenedorPrecioCuota.id = "contenedorPrecioCuota"
			contenedorPrecioCuota.innerText = "$" + imagen.getAttribute("data-precio-cuota")
			imagenoverlay.setAttribute("data-precio-cuota", imagen.getAttribute("data-precio-cuota"))
			precio.appendChild(contenedorPrecioCuota)

			let textoCuotas2 = document.createElement('p') // parentesis final
			textoCuotas2.id = "textoCuotas2"
			textoCuotas2.innerText = ")"
			precio.appendChild(textoCuotas2)			

			let contenedorCuotas = document.createElement('div')
			contenedorCuotas.id = "contenedorcuotas"
			precio.appendChild(contenedorCuotas)
			contenedorCuotas.appendChild(iconoCuotas)
			contenedorCuotas.appendChild(textoCuotas1)
			contenedorCuotas.appendChild(contenedorPrecioCuota)
			contenedorCuotas.appendChild(textoCuotas2)
			/** FIN CUOTAS **/
			/** FIN PRECIO **/

			/** TALLES **/
			let contenedorTalles = document.querySelector('#contenedorTalles')

			stringTalles = imagen.getAttribute("data-talles")
			arregloTalles = stringTalles.split("/")
			for (let i = 0; i < arregloTalles.length; i++) {
				let botonTalle = document.createElement('div')
				if (i == 0) { // el primer boton tiene border radius a la izquierda
					botonTalle.classList.add("botontalle")
					botonTalle.classList.add("primerbotontalle")
					botonTalle.innerText = arregloTalles[i]
				} else if (i == arregloTalles.length - 1) { // el ultimo boton tiene border radius a la derecha
					botonTalle.classList.add("botontalle")
					botonTalle.classList.add("ultimobotontalle")
					botonTalle.innerText = arregloTalles[i]
				} else { // todos los botones del medio
					botonTalle.classList.add("botontalle")
					botonTalle.innerText = arregloTalles[i]
				}
				contenedorTalles.appendChild(botonTalle)
			}
			imagenoverlay.setAttribute("data-talles", imagen.getAttribute("data-talles"))
			/** FIN TALLES **/

			/** COLORES **/
			let diccionarioColores = {rojo:"#cd0000", azul:"#0a1be8", amarillo:"#ffeb00", verde:"#16cd00", naranja:"#f58817", violeta:"#6410ea", blanco:"white", negro:"black"};
			// en vez de traducirlos, poner el codigo hexadecimal de un color mas agradable, porque esos son feos.

			let contenedorCirculos = document.querySelector('#contenedorCirculos')

			stringColores = imagen.getAttribute("data-colores")
			arregloColores = stringColores.split("/")
			for (let i = 0; i < arregloColores.length; i++) {
				let color = arregloColores[i]
				let englishColor = diccionarioColores[color];
				let circuloColor = document.createElement('div')
				circuloColor.style.background = englishColor
				circuloColor.classList.add("circulo")
				contenedorCirculos.appendChild(circuloColor)
			}
			imagenoverlay.getAttribute("data-colores", imagen.getAttribute("data-colores"))
			/** FIN COLORES **/

			/////////////////////////////////// CONTENEDOR /////////////////////////////////////
			let contenedor = document.querySelector('#contenedorproductooverlay')
			contenedor.style.visibility = "visible"
			console.log("clickeado")
		}) // fin onclick
		
		let contenedorimagen = imagenAOverlay.parentNode

		// console.log(contenedorimagen)
		// console.log(imagenAOverlay.parentNode)

		// contenedorimagen.innerHTML = `${contenedorimagen.innerHTML} `

		const subtitle = document.createElement("p")
		subtitle.classList.add("subtitle", "nombreyprecio")
		subtitle.innerHTML = imagenAOverlay.getAttribute("data-nombre") + " - " + imagenAOverlay.getAttribute("data-precio")

		contenedorimagen.appendChild(subtitle)

		// contenedorimagen.innerHTML += "<p class='nombreyprecio'>" + imagenAOverlay.getAttribute("data-nombre") + " - " + imagenAOverlay.getAttribute("data-precio") + "</p>"
		
	}) // fin for each image

	///////////////////////////////// BOTONES FINALES ///////////////////////////////

	let alpresupuesto = document.querySelector('#alpresupuesto')

	let totalDiv = document.querySelector('#total')
	let totalValor = 0
	alpresupuesto.addEventListener('mousedown', function(){ // clickear en el boton
		/* PRESUPUESTO */
		let cantidadInput = document.querySelector("#cantidad")
		let cantidadPedida = cantidadInput.value
		let imagenoverlay = document.querySelector("#imagenoverlay")
		let nombre = imagenoverlay.getAttribute("data-nombre")
		let precio = imagenoverlay.getAttribute("data-precio").replace("$", "") // saco el signo $ para poder sumar
		let pedido = ""
		
		if (cantidadPedida != 0){
			if (cantidadPedida >= 2) {
				pedido = nombre + " - " + cantidadPedida + " unidades - $" + (precio * cantidadPedida) 
			} else {
				pedido = nombre + " - " + cantidadPedida + " unidad - $" + (precio * cantidadPedida) 
			}
			totalValor += (precio * cantidadPedida)
			const contenedoritemspresupuesto = document.querySelector('#contenedoritemspresupuesto')
			
			const contenedoritem = document.createElement('div')

			const contenedorlinea = document.createElement('div')
			contenedorlinea.innerHTML = pedido
			
			const deleteitem = document.createElement('i')
			deleteitem.classList.add('fas') // clase de FontAwesome
			deleteitem.classList.add('fa-times') // clase de FontAwesome
			contenedorlinea.appendChild(deleteitem)
			contenedoritem.appendChild(contenedorlinea)

			contenedoritemspresupuesto.appendChild(contenedoritem)

			deleteitem.addEventListener('click', function(){ 
				contenedoritemspresupuesto.removeChild(contenedoritem)
				let pedidoinput = document.querySelector("#pedidoinput") // se actualiza el text area y el total tambien al clickearlos
				pedidoinput.value = contenedoritemspresupuesto.innerText
				/* TOTAL */
				totalValor -= (precio * cantidadPedida)
				totalDiv.innerHTML = "----------------------------- <br/> Total: $" + totalValor
			})
			/* TOTAL */
			totalDiv.innerHTML = "----------------------------- <br/> Total: $" + totalValor
		}
		alpresupuesto.style.top = "3px"
		alpresupuesto.style.boxShadow = "none"
		
		/* PEDIDO */
		let pedidoinput = document.querySelector("#pedidoinput")
		pedidoinput.value = contenedoritemspresupuesto.innerText
	})

	document.body.addEventListener('mouseup', function(){ // terminar el click donde sea
		alpresupuesto.style.top = "0px"
		alpresupuesto.style.boxShadow = "0px 3px 0"
	})

	background.addEventListener('click', function() {
		background.style.visibility = "hidden" // creo que solo detecta background (de las variables declaradas dentro de la otra funcion) porque es la que esta en el evento, las otras las tengo que volver a llamar
		let contenedor = document.querySelector('#contenedorproductooverlay')
		contenedor.style.visibility = "hidden"

		/***** ELIMINO LOS ELEMENTOS QUE SE CREAN CON EL JS DE ARRIBA PARA QUE NO SE SUMEN CON CADA CLICK ****/
		let imagenoverlay = document.querySelector('#imagenoverlay')
		imagenoverlay.src = ""
		let nombreData = document.querySelector('#contenidonombre')
		nombreData.remove()
		let precioData = document.querySelector('#contenidoprecio')
		precioData.remove()
		let contenedorCuotas = document.querySelector('#contenedorcuotas')
		contenedorCuotas.remove()
		let botonTalle = document.querySelectorAll('.botontalle')
		botonTalle.forEach(function(boton) {
			boton.remove()
		})
		let circuloColor = document.querySelectorAll('.circulo')
		circuloColor.forEach(function(circulo) {
			circulo.remove()
		})
	})

	let contenedoroverlay = document.querySelector('#contenedorproductooverlay')
	/*	
		window.scrollY + window.innerHeight) // lo scrolleado verticalmente + la altura de la pantalla (scroll acumulado)
		contenedoroverlay.offsetTop // distancia desde arriba del elemento hasta arriba de todo el documento. Tambien podria llamar la propiedad top, porque esta posicionado con absolute
		contenedoroverlay.offsetHeight) // altura del elemento
	*/

	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv
	// FALTA RESPONSIVE DEL CONTENEDOR vvvv

	// comparo siempre con la posicion (top) inicial del contenedor, que es la que marca el limite sumado a la altura del elemento
	let topInicial = contenedoroverlay.offsetTop // 
	// tambien la linea limite debe incluir el espacio del bottom a agregar, si no da un salto desde el fin del elemento + bottom
	let bottomInicial = 20 // bottom auto, igual al top inicial

	// POSICION INICIAL (segun ancho), porque si no la primera vez que se abre desde un producto que no es el primero, queda muy arriba, fuera de la pantalla.
	if (window.innerWidth <= 660) {
		contenedoroverlay.style.position = "absolute"
		contenedoroverlay.style.top = "60px"
		contenedoroverlay.style.bottom = "auto"
		contenedoroverlay.style.height = "auto"
	} else { // >660 se usa el contenedor a lo ancho, ubicado en el centro
		contenedoroverlay.style.top = "50%"
		contenedoroverlay.style.left = "50%"
		contenedoroverlay.style.bottom = "auto"
		contenedoroverlay.style.right = "auto"
		contenedoroverlay.style.transform = "translate(-50%, -50%)"
	}
	// VER EL <660 NO FUNCIONA
	// VER EL <660 NO FUNCIONA
	// VER EL <660 NO FUNCIONA
	// VER EL <660 NO FUNCIONA
	window.addEventListener("scroll", function(){
		if (window.innerWidth <= 660){ // como un media query
			if (contenedoroverlay.style.visibility == "visible"){ // cuando este activo... // VER SI SACAR ESTA CONDICION (creo que si)
				if((window.scrollY + window.innerHeight) >= (topInicial + contenedoroverlay.offsetHeight/* + bottomInicial*/)){ // se le agrega el tamañoNav a esa distancia para que no pegue un salto desde el final del contenedor
					contenedoroverlay.style.position = "fixed"
					contenedoroverlay.style.top = "auto"
					contenedoroverlay.style.bottom = "20px"
					contenedoroverlay.style.height = "auto"
				} else {
					contenedoroverlay.style.position = "absolute"
					contenedoroverlay.style.top = "60px"
					contenedoroverlay.style.bottom = "auto"
					contenedoroverlay.style.height = "auto"
				}
			}
		} else {
			contenedoroverlay.style.top = "50%"
			contenedoroverlay.style.left = "50%"
			contenedoroverlay.style.bottom = "auto"
			contenedoroverlay.style.right = "auto"
			contenedoroverlay.style.transform = "translate(-50%, -50%)"
		}
	})
