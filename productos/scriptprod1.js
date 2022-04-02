///////////////////////////////// OVERLAY /////////////////////////////////////

	let imagenes = document.querySelectorAll(".producto")

	imagenes.forEach(function(imagenAOverlay) {
		imagenAOverlay.addEventListener('click', function(){

			/////////////////////////////////// BACKGROUND /////////////////////////////////
				let background = document.querySelector('#background')
				background.style.visibility = "visible"
				
				console.log(imagenAOverlay.id)

			/////////////////////////////////// CONTENIDO /////////////////////////////////
			/** IMAGEN **/
				let id = imagenAOverlay.id
				let imagen = document.querySelector(`#${id}`) // id/imagen del producto clickeado

				let imagenoverlay = document.querySelector('#imagenoverlay')
				imagenoverlay.src = imagen.src
				// imagenoverlay.src = "./" + imagen.style.backgroundImage.slice(5,-1) /* Remove url( and ) from de background-image attribute value and add ./ to get to the correct folder from styleprod1.js */

				if (imagenoverlay.naturalHeight > imagenoverlay.naturalWidth) {
					imagenoverlay.classList.add("verticalImageOverlay")
				} else {
					imagenoverlay.classList.remove("verticalImageOverlay") /* Remove it in case it was set before */
				}

			/** CODIGO **/
				let productCode = document.querySelector('#productCode')
				productCode.innerText = imagen.getAttribute("data-codigo")

			/** NOMBRE **/
				console.log(imagen.getAttribute("data-nombre"))
				let contenidonombre = document.querySelector('#contenidonombre')
				console.log(contenidonombre)
				contenidonombre.innerText = imagen.getAttribute("data-nombre")

			/** DESCRIPCION **/
				let productDescription = document.querySelector("#productDescription")
				productDescription.innerText = imagen.getAttribute("data-descripcion")

			/** PRECIO **/
				let contenidoprecio = document.querySelector('#contenidoprecio')
				contenidoprecio.innerText = "$" + imagen.getAttribute("data-precio")

			/** CUOTAS **/
				// NOTA: falta poner y traer info de la BBDD. Por ahora lo hice con valores dados desde HTML
				let textoCuotas1 = document.querySelector('#textoCuotas1')
				textoCuotas1.innerText = "(" + imagen.getAttribute("data-cantidad-cuotas") + " cuotas de "

				let contenedorPrecioCuota = document.querySelector('#contenedorPrecioCuota')
				contenedorPrecioCuota.innerText = "$" + imagen.getAttribute("data-precio-cuota")

			/** TALLES **/
				let contenedorTalles = document.querySelector('#contenedorTalles')

				let stringTalles = imagen.getAttribute("data-talles")
				let arregloTalles = stringTalles.split("/")
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

			/** COLORES **/
				let diccionarioColores = {rojo:"#cd0000", azul:"#0a1be8", amarillo:"#ffeb00", verde:"#16cd00", naranja:"#f58817", violeta:"#6410ea", blanco:"white", negro:"black"};
				// en vez de traducirlos, poner el codigo hexadecimal de un color mas agradable, porque esos son feos.
				let contenedorCirculos = document.querySelector('#contenedorCirculos')

				let stringColores = imagen.getAttribute("data-colores")
				let arregloColores = stringColores.split("/")
				for (let i = 0; i < arregloColores.length; i++) {
					let color = arregloColores[i]
					let englishColor = diccionarioColores[color];
					let circuloColor = document.createElement('div')
					circuloColor.style.background = englishColor
					circuloColor.classList.add("circulo")
					contenedorCirculos.appendChild(circuloColor)
				}

			/////////////////////////////////// CONTENEDOR /////////////////////////////////////
			let contenedor = document.querySelector('#contenedorproductooverlay')
			contenedor.style.visibility = "visible"
			// console.log("clickeado")
		}) // fin onclick
		
		// 		let contenedorimagen = imagenAOverlay.parentNode
		// 
		// 		// console.log(contenedorimagen)
		// 		// console.log(imagenAOverlay.parentNode)
		// 
		// 		// contenedorimagen.innerHTML = `${contenedorimagen.innerHTML} `
		// 
		// 		const subtitle = document.createElement("p")
		// 		subtitle.classList.add("subtitle", "nombreyprecio")
		// 		subtitle.innerHTML = imagenAOverlay.getAttribute("data-nombre") + " - " + imagenAOverlay.getAttribute("data-precio")
		// 
		// 		contenedorimagen.appendChild(subtitle)
		// 
		// 		// contenedorimagen.innerHTML += "<p class='nombreyprecio'>" + imagenAOverlay.getAttribute("data-nombre") + " - " + imagenAOverlay.getAttribute("data-precio") + "</p>"
		
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
		alpresupuesto.style.boxShadow = "0px 3px 0px #081e50"
	})

/******** CLOSE MODAL or CLICK BACKGROUND ************/

	/* Main function */
	function closeModal () {
		background.style.visibility = "hidden" // creo que solo detecta background (de las variables declaradas dentro de la otra funcion) porque es la que esta en el evento, las otras las tengo que volver a llamar
		let contenedor = document.querySelector('#contenedorproductooverlay')
		contenedor.style.visibility = "hidden"

		/***** ELIMINO LOS ELEMENTOS QUE SE CREAN CON EL JS DE ARRIBA PARA QUE NO SE SUMEN CON CADA CLICK ****/
		let botonTalle = document.querySelectorAll('.botontalle')
		botonTalle.forEach(function(boton) {
			boton.remove()
		})
		let circuloColor = document.querySelectorAll('.circulo')
		circuloColor.forEach(function(circulo) {
			circulo.remove()
		})
	}

	background.addEventListener('click', function() {
		closeModal()
	})

	let quitModalIcon = document.querySelector("#quitModalIcon")

	quitModalIcon.addEventListener('click', function() {
		console.log("clickeado")
		closeModal()
	})

//////////////////////// ZOOM ON MOUSE OVER ///////////////////////////
	let contenedorOverflow = document.querySelector("#contenedorOverflow")
	let imagenoverlay = document.querySelector("#imagenoverlay")

	contenedorOverflow.addEventListener("mousemove", function(event){
		// transform-origin (x, y) >>> 
		// el maximo x = 777px >>> desde 833
		// El maximo Y = 380px >>> desde 272?
		// El minimo x = -143px >>> desde 393?
		//  el minimo Y = 0px >>> desde 568?

		// (483, 568) a (1, 380)

		// console.log("event.ClientX: " + event.clientX)
		// console.log("event.ClientY: " + event.clientY)

		// clientX = event.clientX - event.target.offsetLeft
		// clientY = event.clientY - event.target.offsetTop

		// console.log("ClientX: " + clientX)
		// console.log("ClientY: " + clientY)
		// console.log("----------------------")

		let mWidth = imagenoverlay.offsetWidth
		let mHeight = imagenoverlay.offsetHeight
		let mouseX = event.offsetX
		let mouseY = event.offsetY

		let imgPosX = (mouseX / mWidth * 100)
		let imgPosY = (mouseY / mHeight * 100)

		// clientX = clientX / mWidth * 20
		// clientY = clientY / mHeight * 20

		// imagenoverlay.style.transform = "translate(-"+clientX+"%, -"+clientY+"%) scale(2)"
		imagenoverlay.style.transformOrigin = `${imgPosX}% ${imgPosY}%`
		imagenoverlay.style.transform = "scale(2)"
	})

	contenedorOverflow.addEventListener("mouseleave", function(event){
		imagenoverlay.style.transform = "scale(1)"
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
