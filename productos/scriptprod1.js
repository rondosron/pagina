///////////////////////////////// OVERLAY /////////////////////////////////////

	let imagenes = document.querySelectorAll(".producto")

	imagenes.forEach(function(imagenAOverlay) {
		imagenAOverlay.addEventListener('click', function(){

			/////////////////////////////////// BACKGROUND /////////////////////////////////
				let modalContainer = document.querySelector('#modalContainer')
				modalContainer.style.visibility = "visible"

			/////////////////////////////////// CONTENIDO /////////////////////////////////
			/** IMAGEN **/
				let id = imagenAOverlay.id
				let imagen = document.querySelector(`#${id}`) // id/imagen del producto clickeado

				let imagenoverlay = document.querySelector('#imagenoverlay')
				imagenoverlay.src = imagen.src
				// imagenoverlay.src = "./" + imagen.style.backgroundImage.slice(5,-1) /* Remove url( and ) from de background-image attribute value and add ./ to get to the correct folder from styleprod1.js */

				if (imagenoverlay.naturalHeight > imagenoverlay.naturalWidth) {
					imagenoverlay.classList.add("verticalImageOverlay")
					imagenoverlay.classList.remove("horizontalImageOverlay")
				} else if (imagenoverlay.naturalHeight < imagenoverlay.naturalWidth) {
					imagenoverlay.classList.remove("verticalImageOverlay") /* Remove it in case it was set before */
					imagenoverlay.classList.add("horizontalImageOverlay")
				} else { /* Square */
					imagenoverlay.classList.remove("verticalImageOverlay")
					imagenoverlay.classList.remove("horizontalImageOverlay")
				}

			/** CODIGO **/
				let productCode = document.querySelector('#productCode p')
				if (imagen.getAttribute("data-codigo") == "" || imagen.getAttribute("data-codigo") == null) {
					productCode.innerText = "Sin código"
				} else {
					productCode.innerText = "Cód: " + imagen.getAttribute("data-codigo")
				}
				

			/** NOMBRE **/
				// console.log(imagen.getAttribute("data-nombre"))
				let contenidonombre = document.querySelector('#contenidonombre')
				// console.log(contenidonombre)
				contenidonombre.innerText = imagen.getAttribute("data-nombre")

			/** DESCRIPCION **/
				let productDescription = document.querySelector("#productDescription p")
				productDescription.innerHTML = imagen.getAttribute("data-descripcion")

			/** PRECIO **/
				let contenidoprecio = document.querySelector('#contenidoprecio')
				contenidoprecio.innerText = "$" + imagen.getAttribute("data-precio")

			/** MARCA **/
				let productBrand = document.querySelector('#productBrand p')
				productBrand.innerText = imagen.getAttribute("data-marca")

			/** CUOTAS **/
				// NOTA: falta poner y traer info de la BBDD. Por ahora lo hice con valores dados desde HTML
				// 				let textoCuotas1 = document.querySelector('#textoCuotas1')
				// 				textoCuotas1.innerText = "(" + imagen.getAttribute("data-cantidad-cuotas") + " cuotas de "
				// 
				// 				let contenedorPrecioCuota = document.querySelector('#contenedorPrecioCuota')
				// 				contenedorPrecioCuota.innerText = "$" + imagen.getAttribute("data-precio-cuota")

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

			/** CHANGE OVERLAY DATA **/
				imagenoverlay.setAttribute("data-codigo", imagen.getAttribute('data-codigo'))
				imagenoverlay.setAttribute("data-nombre", imagen.getAttribute('data-nombre'))
				imagenoverlay.setAttribute("data-descripcion", imagen.getAttribute('data-descripcion'))
				imagenoverlay.setAttribute("data-precio", imagen.getAttribute('data-precio'))
				imagenoverlay.setAttribute("data-cantidad-cuotas", imagen.getAttribute('data-cantidad-cuotas'))
				imagenoverlay.setAttribute("data-precio-cuota", imagen.getAttribute('data-precio-cuota'))
				imagenoverlay.setAttribute("data-talles", imagen.getAttribute('data-talles'))
				imagenoverlay.setAttribute("data-colores", imagen.getAttribute('data-colores'))
				imagenoverlay.setAttribute("data-marca", imagen.getAttribute('data-marca'))
				imagenoverlay.setAttribute("data-id", imagen.getAttribute('data-id'))

			/////////////////////////////////// CONTENEDOR /////////////////////////////////////
			let contenedor = document.querySelector('#contenedorproductooverlay')
			contenedor.style.visibility = "visible"
		}) // fin onclick		
	}) // fin for each image



let initialTop = 0
let initialBottom = 0

///////////////////////////////// BOTONES FINALES ///////////////////////////////

	const contenedoritemspresupuesto = document.querySelector('#contenedoritemspresupuesto')
	// let pedidoinput = document.querySelector("#pedidoinput")
	let totalDiv = document.querySelector('#total')
	

	/* NOTE: declare/initialize variable outside functions or code so it's accessible from any of them ("global") */
	let totalValor = 0
	let nombre = ""
	let pedido = ""
	let precio = 0
	let cantidadPedida = 0

	function checkIfItemInListAndUpdate () {
		/* Check if element is already in list and update it */
		Array.from(contenedoritemspresupuesto.children).forEach(function(item){
			console.log(item.innerText.includes(nombre))
			if (item.innerText.includes(nombre)) {
				// Substract previous subtotal (item) from total
				let subtotalToDelete = item.innerText.substring(item.innerText.indexOf("$") + 1)
				totalValor -= subtotalToDelete
				contenedoritemspresupuesto.removeChild(item)
			} else {
				console.log("No hay un item con el nombre " + nombre + " ya agregado")
			}
		})
	}

	// Display message if budget is empty
		let emptyBudgetMessage = document.querySelector("#emptyBudgetMessage")
		let totalResultForm = document.querySelector("#totalResultForm")
		
		function isBudgetEmptyMessage() {
			if (totalResultForm.value == 0) {
				console.log("uno")
				emptyBudgetMessage.style.display = "flex"
			} else {
				console.log("dos")
				emptyBudgetMessage.style.display = "none"
			}
		}

		isBudgetEmptyMessage() // Execute it at the beginning in case there's a budget already (after form submission error)
			
	
	/* FOR SCREENS WITH HOVER */
		let cantidadInput = document.querySelector("#cantidad")
		let imagenoverlay = document.querySelector("#imagenoverlay")
		let alpresupuesto = document.querySelector('#alpresupuesto')
		let errorMessageQuantityModal = document.querySelector("#errorMessageQuantityModal")
		let successMessageAddedItem = document.querySelector("#successMessageAddedItem")

		let successMessageOpacity = 0
		let successMessageDisplay = 0
		let errorMessageQuantityModalOpacity = 0
		let errorMessageQuantityModalDisplay = 0

		alpresupuesto.addEventListener('mousedown', function(){ // clickear en el boton
			/* NOTE: cant define a function for both kinds of devices because they're different and both need to be active at the same time in some cases */

			/* PRESUPUESTO */

				/* Not allowed quantity */
				if (cantidadInput.value <= 0) {
					successMessageAddedItem.style.display = "none" // Delete previous success message in case it exists

					errorMessageQuantityModal.style.opacity = "1"
					errorMessageQuantityModal.style.display = "flex"

					// Reset all Timeouts
					clearTimeout(errorMessageQuantityModalOpacity)
					clearTimeout(errorMessageQuantityModalDisplay)

					errorMessageQuantityModalOpacity = setTimeout(function(){
						errorMessageQuantityModal.style.opacity = "0"
					}, 3000)
					errorMessageQuantityModalDisplay = setTimeout(function(){
						errorMessageQuantityModal.style.display = "none"
					}, 3800) // 3800 = 3000 from the other Timeout + 0.8s from transition to opacity 0

					return
				} else { // Allowed quantity
					cantidadPedida = cantidadInput.value
				
					nombre = imagenoverlay.getAttribute("data-nombre")
					console.log(imagenoverlay)
					console.log("Marca: " + imagenoverlay.getAttribute("data-marca"))
					if (imagenoverlay.getAttribute("data-marca") != null) { /* If product has a brand, use it to distinguish those with the same name */
						nombre = nombre + " (Cód: " + imagenoverlay.getAttribute("data-id") + ")"
					}

					checkIfItemInListAndUpdate()

					precio = parseFloat(imagenoverlay.getAttribute("data-precio")).toFixed(2)
					
					if (cantidadPedida >= 2) {
						pedido = nombre + " - " + cantidadPedida + " unidades - $" + parseFloat(precio * cantidadPedida).toFixed(2)
					} else {
						pedido = nombre + " - " + cantidadPedida + " unidad - $" + parseFloat(precio * cantidadPedida).toFixed(2)
					}
					totalValor += (precio * cantidadPedida)
					
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

						let subtotalToDelete = contenedoritem.innerText.substring(contenedoritem.innerText.indexOf("$") + 1)
						totalValor -= subtotalToDelete

						// totalDiv.innerHTML = "----------------------------- <br/> Total: $" + parseFloat(totalValor).toFixed(2)
						// totalResultForm.value = parseFloat(totalValor).toFixed(2) // Changes displayed value
						totalResultForm.setAttribute("value", parseFloat(totalValor).toFixed(2)) // Also need to change attribute of input
						isBudgetEmptyMessage()
					})
					/* TOTAL */
					// totalDiv.innerHTML = "----------------------------- <br/> Total: $" + parseFloat(totalValor).toFixed(2)
					// totalResultForm.value = parseFloat(totalValor).toFixed(2) // Changes displayed value
					totalResultForm.setAttribute("value", parseFloat(totalValor).toFixed(2)) // Also need to change attribute of input
					isBudgetEmptyMessage()

					/* PEDIDO */
					// pedidoinput.value = contenedoritemspresupuesto.innerText

					/* Sucess message */
					errorMessageQuantityModal.style.display = "none" // Delete previous error message in case it exists
					successMessageAddedItem.style.opacity = "1"
					successMessageAddedItem.style.display = "flex"

					// Reset all Timeouts
					clearTimeout(successMessageOpacity)
					clearTimeout(successMessageDisplay)

					successMessageOpacity = setTimeout(function(){
						successMessageAddedItem.style.opacity = "0"
					}, 3000)
					successMessageDisplay = setTimeout(function(){
						successMessageAddedItem.style.display = "none"
					}, 3800) // 3800 = 3000 from the other Timeout + 0.8s from transition to opacity 0
				}

			alpresupuesto.style.top = "3px"
			alpresupuesto.style.boxShadow = "none"
		})

		document.body.addEventListener('mouseup', function(){ // terminar el click donde sea
			alpresupuesto.style.top = "0px"
			alpresupuesto.style.boxShadow = "0px 3px 0px #081e50"
		})

	/* FOR MOBILES */
		let alpresupuestoMobile = document.querySelectorAll('.alpresupuestoMobile')

		alpresupuestoMobile.forEach(function(button){
			button.addEventListener('mousedown', function(){
				// console.log(button.parentNode.parentNode.parentNode.querySelector(".botones .contenedorCarrito input").value + " unidades a ")
				// console.log(button.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("data-precio"))

				/* PRESUPUESTO */
				cantidadPedida = button.parentNode.parentNode.parentNode.querySelector(".botones .contenedorCarrito input").value

					/* Not allowed quantity */
					if (cantidadPedida <= 0) {
						successMessageAddedItem.style.display = "none" // Delete previous success message in case it exists
						
						errorMessageQuantityModal.style.opacity = "1"
						errorMessageQuantityModal.style.display = "flex"

						// Reset Timeouts
						clearTimeout(errorMessageQuantityModalOpacity)
						clearTimeout(errorMessageQuantityModalDisplay)

						errorMessageQuantityModalOpacity = setTimeout(function(){
							errorMessageQuantityModal.style.opacity = "0"
						}, 3000)
						errorMessageQuantityModalDisplay = setTimeout(function(){
							errorMessageQuantityModal.style.display = "none"
						}, 3800) // 3800 = 3000 from the other Timeout + 0.8s from transition to opacity 0

						return
					} else { // Allowed quantity
						nombre = button.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("data-nombre") + " (Cód: " + button.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("data-id") + ")"
						// if (button.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("data-marca") != null) { /* If product has a brand, use it to distinguish those with the same name */
						// 	nombre = nombre + " (" + button.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("data-marca") + ")"
						// }

						precio = parseFloat(button.parentNode.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("data-precio")).toFixed(2)

						checkIfItemInListAndUpdate()

						if (cantidadPedida >= 2) {
							pedido = nombre + " - " + cantidadPedida + " unidades - $" + parseFloat(precio * cantidadPedida).toFixed(2)
						} else {
							pedido = nombre + " - " + cantidadPedida + " unidad - $" + parseFloat(precio * cantidadPedida).toFixed(2)
						}
						totalValor += (precio * cantidadPedida)
						// console.log(typeof totalValor)
					
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
							
							let subtotalToDelete = contenedoritem.innerText.substring(contenedoritem.innerText.indexOf("$") + 1)
							totalValor -= subtotalToDelete

							// totalDiv.innerHTML = "----------------------------- <br/> Total: $" + parseFloat(totalValor).toFixed(2)
							// totalResultForm.value = parseFloat(totalValor).toFixed(2) // Changes displayed value
							totalResultForm.setAttribute("value", parseFloat(totalValor).toFixed(2)) // Also need to change attribute of input
							isBudgetEmptyMessage()
						})
						/* TOTAL */
						// totalDiv.innerHTML = "----------------------------- <br/> Total: $" + parseFloat(totalValor).toFixed(2)
						// totalResultForm.value = parseFloat(totalValor).toFixed(2) // Changes displayed value
						totalResultForm.setAttribute("value", parseFloat(totalValor).toFixed(2)) // Also need to change attribute of input
						isBudgetEmptyMessage()

					
						/* Sucess message */
						errorMessageQuantityModal.style.display = "none" // Delete previous error message in case it exists

						// Reset all Timeouts
						clearTimeout(successMessageOpacity)
						clearTimeout(successMessageDisplay)
						
						successMessageAddedItem.style.opacity = "1"
						successMessageAddedItem.style.display = "flex"

						successMessageOpacity = setTimeout(function(){
							successMessageAddedItem.style.opacity = "0"
						}, 3000)
						successMessageDisplay = setTimeout(function(){
							successMessageAddedItem.style.display = "none"
						}, 3800) // 3800 = 3000 from the other Timeout + 0.8s from transition to opacity 0
					}

				/* PEDIDO */
				// pedidoinput.value = contenedoritemspresupuesto.innerText
			})
		})
		

/******** CLOSE MODAL or CLICK BACKGROUND ************/
	/* Main function */
	function closeModal () {
		modalContainer.style.visibility = "hidden" // creo que solo detecta background (de las variables declaradas dentro de la otra funcion) porque es la que esta en el evento, las otras las tengo que volver a llamar
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

		// window.removeEventListener("scroll", limitScroll)
	}

	modalContainer.addEventListener('click', function(e) {
		if(e.target !== this) {
			return;
		} // Prevent click on children. e.stopPropagation didn't work
		closeModal()
	})

	let quitModalIcon = document.querySelector("#quitModalIcon")

	quitModalIcon.addEventListener('click', function() {
		console.log("clickeado")
		closeModal()
	})

//////////////////////// ZOOM ON MOUSE OVER ///////////////////////////
	let contenedorOverflow = document.querySelector("#contenedorOverflow")
	// let imagenoverlay = document.querySelector("#imagenoverlay")

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