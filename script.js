/////////////////////////////// MENU BAR/TOGGLE /////////////////////////////////////

	let menutoggle = document.querySelector('#menutoggle');

	let contenedorbotones = document.querySelector('#contenedorbotones')

	menutoggle.addEventListener('click', function() {
		if (contenedorbotones.style.display == "grid"){
			contenedorbotones.style.display = "none";
		} else {
			contenedorbotones.style.display = "grid";
		}
	})

/////////////////////////////// FILTROS DE BUSQUEDA /////////////////////////////////

	function filtrar(filtro) {
		let productos = document.querySelectorAll('.producto')
		let filtrofinal = filtro.toLowerCase()
		productos.forEach(function(producto) {
			let data = producto.getAttribute("data-filtro").toLowerCase()
			if (!data.includes(filtrofinal)) {
				// Remove items out of filter
				producto.parentElement.parentElement.parentElement.style.display = "none"
				producto.parentNode.parentNode.parentNode.classList.remove("filtroVisible")
			} else {
				producto.parentElement.parentElement.parentElement.style.display = "inline-flex"
				producto.parentNode.parentNode.parentNode.classList.add("filtroVisible")
			}
		})

	}

	let botonesfiltro = document.querySelectorAll('.filtro')

	botonesfiltro.forEach(function(boton){
		boton.addEventListener('click', function(){
			let filtro = boton.getAttribute("data-filtro").toLowerCase()
			filtrar(filtro)
			updatePagination()
			printPagesList()
		})
	})

//////////////////////////// BOTONES FILTRO NAV //////////////////////////////////////

	// let busqueda = document.querySelector('#busqueda')
	//let contenedorbotones = document.querySelector('#contenedorbotones')
	let contenedordudas = document.querySelector('#contenedordudas')

	busquedaactivado = false

	// busqueda.addEventListener('click', function(e){
	// 	busquedaactivado = !busquedaactivado
	// 	dudasactivado = false
	// 	if (busquedaactivado) {
	// 		contenedorbotones.style.display = "flex"
	// 	} else {
	// 		contenedorbotones.style.display = "none"
	// 		contenedordudas.style.display = "none"
	// 	}
	// })

	var mediaqueryList = window.matchMedia("(max-width: 700px)")
	console.log(mediaqueryList)

	let dudas = document.querySelector('#dudas')
	let subItemBotonNav = document.querySelectorAll(".subItemBotonNav")

	dudasactivado = false

	dudas.addEventListener('click', function(e){
		e.stopPropagation() // para que no se clickee el padre tambien
		dudasactivado = !dudasactivado
		if (window.matchMedia("(max-width: 700px)").matches) {
			if (dudasactivado) {
				dudas.classList.add("dudasInToggleClicked")

				contenedordudas.classList.add("contenedorDudasInToggleClicked")
			} else {
				dudas.classList.remove("dudasInToggleClicked")

				contenedordudas.classList.remove("contenedorDudasInToggleClicked")
			}
		} else {
			if (dudasactivado) {
				contenedordudas.style.display = "grid";
			} else {
				contenedordudas.style.display = "none";
			}
		}
	})

///////////////////// VERSION BUTTONS /////////////////
	let currentCSS = document.querySelector("#currentCSS")
	let versionInput = document.querySelectorAll(".versionInput")

	versionInput.forEach(function(eachButton){
		eachButton.addEventListener("change", function(e){
			if (eachButton.checked) {
				currentCSS.href = `productos/styleprod${eachButton.value}.css`
			}
		})
	})

////////////////////// BUSCADOR ////////////////////////////
	let buscador = document.querySelector("#buscador")
	let buscarBoton = document.querySelector("#buscarBoton")
	let productos = document.querySelectorAll(".producto")

	function buscar () {
		productos.forEach(function(producto){
			if (producto.getAttribute("data-descripcion").toLowerCase().includes(buscador.value.toLowerCase()) || producto.getAttribute("data-nombre").toLowerCase().includes(buscador.value.toLowerCase())) {
				producto.parentNode.parentNode.parentNode.style.display = "inline-flex"
				// agregar clase que indique filtro visible (para la paginacion)
				producto.parentNode.parentNode.parentNode.classList.add("filtroVisible")
			} else {
				producto.parentNode.parentNode.parentNode.style.display = "none"
				// agregar clase que indique filtro none (para la paginacion)
				producto.parentNode.parentNode.parentNode.classList.remove("filtroVisible")
			}
		})
		/* Clean content of pagesList */
		pagesList.innerText = ""

		console.log("currentLastItemSpaceAvailable: " + currentLastItemSpaceAvailable)
		console.log("productsPerPage: " + productsPerPage)
		
		/* Restart to page 1 and reset buttons stlyling */
		currentPage = 1
		currentLastItemSpaceAvailable = productsPerPage
		buttonPrev.classList.add("blockedButton")

		/* If it's also the last page */
		let contenedorProductoLista = document.querySelectorAll(".filtroVisible")
		if (contenedorProductoLista.length <= currentLastItemSpaceAvailable && contenedorProductoLista.length > currentLastItemSpaceAvailable - productsPerPage) {
			buttonNext.classList.add("blockedButton")
		} else {
			buttonNext.classList.remove("blockedButton")
		}

		updatePagination()
		printPagesList()
	}

	buscarBoton.addEventListener("click", function(e){
		buscar()
	})

	buscador.addEventListener("keypress", function(e){
		if (e.charCode == "13") {
			buscar()
		}		
	})

/////////////////// PRODUCTS PAGINATION ///////////////////////
	let buttonPrev = document.querySelector("#buttonPrev")
	let buttonNext = document.querySelector("#buttonNext")

	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	let productsPerPage = 3
	let firstItemOfPage = 0
	let lastItemOfPage = firstItemOfPage + productsPerPage

	let currentLastItemSpaceAvailable = productsPerPage

	

	function updatePagination() {
		// Seleccionar elementos despues del filtro (si lo hay)
		let contenedorProductoLista = document.querySelectorAll(".filtroVisible")

		// Order filtered elements (in pages)
		contenedorProductoLista.forEach(function(producto, index){
			if (index < currentLastItemSpaceAvailable - productsPerPage) {
				producto.style.display = "none"
			} else if (index < currentLastItemSpaceAvailable) {
				producto.style.display = "inline-flex"
			} else {
				producto.style.display = "none"
			}
		})

		totalPages = Math.ceil(document.querySelectorAll(".filtroVisible").length / productsPerPage)
		console.log("Total pages: " + totalPages)
	}

	buttonPrev.addEventListener("click", function(){
		/* Check if it's first page */
		if (currentLastItemSpaceAvailable == productsPerPage) {
			return
		}

		currentPage -= 1
		currentLastItemSpaceAvailable -= productsPerPage
		console.log(currentLastItemSpaceAvailable)
		updatePagination()

		/* Check if it's first page -> AFTER UPDATE */
		if (currentLastItemSpaceAvailable == productsPerPage) {
			buttonPrev.classList.add("blockedButton")
			buttonNext.classList.remove("blockedButton")
		} else {
			buttonPrev.classList.remove("blockedButton")
		}
	})

	buttonNext.addEventListener("click", function(){
		let contenedorProductoLista = document.querySelectorAll(".filtroVisible")

		/* Check if it's last page */
		if (contenedorProductoLista.length <= currentLastItemSpaceAvailable && contenedorProductoLista.length > currentLastItemSpaceAvailable - productsPerPage) {
			return
		}

		currentPage += 1
		currentLastItemSpaceAvailable += productsPerPage
		console.log(currentLastItemSpaceAvailable)
		updatePagination()

		/* Check if it's first page -> AFTER UPDATE */
		if (currentLastItemSpaceAvailable == productsPerPage) {
			buttonPrev.classList.add("blockedButton")
		} else {
			buttonPrev.classList.remove("blockedButton")
		}

		/* Check if it's last page -> AFTER UPDATE */
		if (contenedorProductoLista.length <= currentLastItemSpaceAvailable && contenedorProductoLista.length > currentLastItemSpaceAvailable - productsPerPage) {
			buttonNext.classList.add("blockedButton")
		} else {
			buttonNext.classList.remove("blockedButton")
		}
	})

	let totalPages = Math.ceil(document.querySelectorAll(".filtroVisible").length / productsPerPage)
	let currentPage = 1
	let pagesList = document.querySelector("#pagesList")
	let emptyMessage = document.querySelector("#emptyMessage")

	function printPagesList() {
		console.log(totalPages)
		if (totalPages == 0) {
			pagesList.innerText = ""
			buttonPrev.classList.add("blockedButton")
			buttonNext.classList.add("blockedButton")
			// mostrar mensaje
			emptyMessage.style.display = "block"
			return
		} else {
			// ocultar mensaje
			emptyMessage.style.display = "none"
		}
		for (let i = 1; i <= totalPages; i++) {
			let page = document.createElement("p")
			page.innerText = i
			page.addEventListener("click", function(){
				currentPage = i 
				currentLastItemSpaceAvailable = i * productsPerPage
				updatePagination()
				if (currentPage == 1 && currentPage == totalPages) { /* First and last page */
					buttonPrev.classList.add("blockedButton")
					buttonNext.classList.add("blockedButton")
				} else if (currentPage == 1) { /* First page */
					buttonPrev.classList.add("blockedButton")
					buttonNext.classList.remove("blockedButton")
				} else if (currentPage == totalPages) { /* Last page */
					buttonPrev.classList.remove("blockedButton")
					buttonNext.classList.add("blockedButton")
				}
			})
			pagesList.appendChild(page)
		}
	}

	/* Executed at beginning */
	updatePagination()
	printPagesList()


/////////////////////// FORM VALIDATION ///////////////////////
	let patternAddress = new RegExp(/^([a-zA-Z]+[a-zA-Z\s]\s[0-9]+)$/) // Words + number === word + word(s)/whitespace(s) + number 

	let addressInput = document.querySelector("#addressInput")
	let addressBarValid = document.querySelector("#addressBarValid")

	addressInput.addEventListener("input", function(e){
		// console.log(addressInput.value)
		console.log(patternAddress.test(addressInput.value))
		if (patternAddress.test(addressInput.value)) {
			addressBarValid.style.width = "100%"
		} 
	})

	let phoneInput = document.querySelector("#phoneInput")
	let phoneLabel = document.querySelector("#phoneLabel")
	let phoneLabelPar = document.querySelector("#phoneLabel p")
	let phoneLabelIcon = document.querySelector("#phoneLabel i")

	phoneInput.addEventListener("input", function(e){
		if (phoneInput.value != "") {
			phoneInput.style.width = "100%"
			phoneInput.style.paddingLeft = "6px"

			phoneLabel.style.width = "20%"
			phoneLabel.style.borderRadius = "5px 0px 0px 5px"

			phoneLabelPar.style.opacity = "0"

			phoneLabelIcon.style.opacity = "1"
		} else {
			phoneInput.style.width = "0%"

			phoneLabel.style.width = "100%"
			phoneLabel.style.borderRadius = "5px"

			phoneLabelPar.style.opacity = "1"

			phoneLabelIcon.style.opacity = "0"
		}
	})

////////////////////////// CARDS ////////////////////////
	
	//////////////////// CARD 1 ///////////////////////
		/////// Social media 3 ///////
			// let icon1SocialMedia3Card1 = document.querySelector("#icon1SocialMedia3Card1")
			let background1SocialMedia3Card1 = document.querySelector("#background1SocialMedia3Card1")

			let originLeft = false

			background1SocialMedia3Card1.addEventListener("mouseover", function(e) {
				background1SocialMedia3Card1.style.backgroundPosition = "0px 0px"
				originLeft = !originLeft
			})

			background1SocialMedia3Card1.addEventListener("mouseout", function(e) {
				originLeft ? (
					background1SocialMedia3Card1.style.backgroundPosition = "35px 0px"
				) : (
					background1SocialMedia3Card1.style.backgroundPosition = "-35px 0px"
				)
			})


	//////////////////// CARD 2 ///////////////////////
		let profilePicContainerCard2 = document.querySelector("#profilePicContainerCard2")
		let profilePicCard2 = document.querySelector("#profilePicCard2")
		let shadowProfilePicCard2 = document.querySelector("#shadowProfilePicCard2")
		let profilePicBackgroundCard2 = document.querySelector("#profilePicBackgroundCard2")

		profilePicBackgroundCard2.addEventListener("mouseover", function(e) {
			profilePicBackgroundCard2.style.animation = "scaleCard 1s 1 normal forwards"

			profilePicBackgroundCard2.style.transition = "0.3157894737s 0.4s linear"
			profilePicBackgroundCard2.style.height = "52px"
		})

		profilePicBackgroundCard2.addEventListener("mouseout", function(e) {
			profilePicBackgroundCard2.style.transform = "scale(1)" // Value of 100% of ScaleCard cause otherwise during of ScaleCardReverse the delay it would go back to the original value (scale(2)) 
			profilePicBackgroundCard2.style.top = "-36px" // Value of 100% of ScaleCard cause otherwise during the delay of ScaleCardReverse it would go back to the original value (scale(2))
			profilePicBackgroundCard2.style.animation = "scaleCardReverse 1s 1s 1 normal forwards"

			profilePicBackgroundCard2.style.transition = "0.3157894737s 1s linear"
			profilePicBackgroundCard2.style.height = "40px"
		})

		// 		profilePicCard2.addEventListener("mouseover", function(e) {
		// 			profilePicCard2.style.animation = "scaleCard 1s 1 normal forwards"
		// 			// profilePicCard2.classList.add("scaleCard")
		// 			// profilePicCard2.classList.remove("scaleCard")
		// 		})
		// 
		// 		profilePicCard2.addEventListener("mouseout", function(e) {
		// 			profilePicCard2.style.transform = "scale(1)" // Value of 100% of ScaleCard cause otherwise during of ScaleCardReverse the delay it would go back to the original value (scale(2)) 
		// 			profilePicCard2.style.top = "-15px" // Value of 100% of ScaleCard cause otherwise during the delay of ScaleCardReverse it would go back to the original value (scale(2))
		// 			profilePicCard2.style.animation = "scaleCardReverse 1s 1s 1 normal forwards"
		// 			// profilePicCard2.classList.add("scaleCardReverse")
		// 			// profilePicCard2.classList.remove("scaleCardReverse")
		// 		})

		let contentCard2 = document.querySelector("#contentCard2")
		let border1Card2 = document.querySelector("#border1Card2")
		let border2Card2 = document.querySelector("#border2Card2")

		profilePicCard2.addEventListener("mouseover", function(e) {
			contentCard2.style.animation = "displayCardContent 1s 0.5s 1 normal forwards"

			profilePicCard2.style.transition = "1s"
			profilePicCard2.style.outline = "1px solid transparent"

			border1Card2.style.transition = "0.5s 0.4s linear"
			border2Card2.style.transition = "0.5s 0.4s linear"
			border1Card2.style.height = "19px"
			border2Card2.style.height = "19px"
		})

		profilePicCard2.addEventListener("mouseout", function(e) {
			contentCard2.style.animation = "displayCardContentReverse 1s 1 normal forwards"

			profilePicCard2.style.transition = "1s 1s"
			profilePicCard2.style.outline = "1px solid #2f2828"

			border1Card2.style.transition = "0.5s 1s linear"
			border2Card2.style.transition = "0.5s 1s linear"
			border1Card2.style.height = "0px"
			border2Card2.style.height = "0px"
		})

		profilePicContainerCard2.addEventListener("mouseover", function(e) {
			shadowProfilePicCard2.style.transition = "1s ease"; // No delay on mouseover/hover
		})

		profilePicContainerCard2.addEventListener("mouseout", function(e) {
			shadowProfilePicCard2.style.transition = "1s ease 1.2s"; // Add delay only on mouseout
			console.log("Aaaaa")
		}) 

		contentCard2.addEventListener("mouseover", function(e) {
			contentCard2.style.animation = "displayCardContent 1s 0.5s 1 normal forwards"
			console.log("displayCardContent")
		})
		
		contentCard2.addEventListener("mouseout", function(e) {
			contentCard2.style.animation = "displayCardContentReverse 1s 1 normal forwards"
			console.log("displayCardContentReverse")
		})


/********************** ON LOAD **********************/
	/* At the end so it doesn't get overwritten */
	window.onload = function () {

		/********** DETECT VERTICAL OR HORIZONTAL ORIENTATION ***********/
		let productos = document.querySelectorAll('.producto')
		
		productos.forEach(function(imagen){
			if (imagen.naturalHeight > imagen.naturalWidth) {
				imagen.classList.add("verticalPicture")
			} else {
				imagen.classList.remove("verticalPicture") /* Remove it in case it was set before */
			}
		})
	}
