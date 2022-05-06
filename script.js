// IMPORTANT: save a copy of the list of ALL products so you don't lose them when you dont add them to the container (after applying some filters). Rearranging this list is ok.
let originalListOfProducts = document.querySelectorAll(".contenedorProducto")

/******************* ON WINDOW RESIZE ********************/
	let productsPerPage = 0

	let lastMediaQuery = 0

	function defineProductsPerPage() {
		if (window.matchMedia("(min-width: 1130px)").matches) { // Window width bigger than 1130px
			productsPerPage = 15
			lastMediaQuery = 1
		} else if (window.matchMedia("(min-width: 920px)").matches) { // Window width bigger than 920px
			productsPerPage = 12
			lastMediaQuery = 2
		} else if (window.matchMedia("(min-width: 720px)").matches) { // Window width smaller than 700px
			productsPerPage = 9
			lastMediaQuery = 3
		} else if (window.matchMedia("(min-width: 500px)").matches) { // Window width bigger than 1130px
			productsPerPage = 8
			lastMediaQuery = 4
		} else if (window.matchMedia("(max-width: 499px)").matches) {
			productsPerPage = 6
			lastMediaQuery = 5
		}

		// productsPerPage
		// + 1130 > 15
		// 920 - 1130 > 12
		// 720 - 920 > 9
		// 500-720 > 8 
		// 0-499 > 6
	}

	defineProductsPerPage()

	window.addEventListener('resize', function(){
		// defineProductsPerPage()

		if (window.matchMedia("(min-width: 1130px)").matches) { // Window width bigger than 1130px
			productsPerPage = 15
			currentLastItemSpaceAvailable = productsPerPage
			// CAMBIAR ACA TAMBIEN LAS VARIABLES (totalPages y currentPage? lineas 728 y 731) segun la nueva paginacion
			// CREO QUE TOTAL PAGES SE ACTUALIZA SOLA DENTRO DE UPDATE PAGINATION

			if (lastMediaQuery != 1) {
				// viene de otra media query
				console.log("CAMBIO DE QUERY - ENTRO EN LA 1")
				updatePagination()
				checkButtonPrevNextStyles()
				printPagesList()
				updateActivePage()

				lastMediaQuery = 1
			} else { // viene de la misma media query
				return
			}
		} else if (window.matchMedia("(min-width: 920px)").matches) { // Window width bigger than 920px
			productsPerPage = 12
			currentLastItemSpaceAvailable = productsPerPage

			if (lastMediaQuery != 2) {
				// viene de otra media query
				console.log("CAMBIO DE QUERY - ENTRO EN LA 2")
				updatePagination()
				checkButtonPrevNextStyles()
				printPagesList()
				updateActivePage()

				lastMediaQuery = 2
			} else { // viene de la misma media query
				return
			}
		} else if (window.matchMedia("(min-width: 720px)").matches) { // Window width smaller than 700px
			productsPerPage = 9
			if (lastMediaQuery != 3) {
				// viene de otra media query
				console.log("CAMBIO DE QUERY - ENTRO EN LA 3")


				lastMediaQuery = 3
			} else { // viene de la misma media query
				return
			}
		} else if (window.matchMedia("(min-width: 500px)").matches) { // Window width bigger than 1130px
			productsPerPage = 8
			if (lastMediaQuery != 4) {
				// viene de otra media query
				console.log("CAMBIO DE QUERY - ENTRO EN LA 4")


				lastMediaQuery = 4
			} else { // viene de la misma media query
				return
			}
		} else if (window.matchMedia("(max-width: 499px)").matches) {
			productsPerPage = 6
			if (lastMediaQuery != 5) {
				// viene de otra media query
				console.log("CAMBIO DE QUERY - ENTRO EN LA 5")


				lastMediaQuery = 5
			} else { // viene de la misma media query
				return
			}
		}
	});

/////////////////////////////// MENU BAR/TOGGLE /////////////////////////////////////

	let menutoggle = document.querySelector('#menutoggle');

	let contenedorbotones = document.querySelector('#contenedorbotones')

	menutoggle.addEventListener('click', function() {
		/* Appear and disappear */
		// if (contenedorbotones.style.display == "flex"){
		// 	contenedorbotones.style.display = "none";
		// } else {
		// 	contenedorbotones.style.display = "flex";
		// }
		/* Slide */
		contenedorbotones.classList.toggle("slide")
	})

/////////////////////////////// FILTROS DE BUSQUEDA /////////////////////////////////

	let resultFilterProduct = document.querySelector("#resultFilterProduct")
	let lastFilter = ""

	function filtrar(filtro) {
		let filtrofinal = filtro.toLowerCase()
		lastFilter = filtrofinal
		originalListOfProducts.forEach(function(producto) {
			let data = producto.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-marca").toLowerCase()
			if (!data.includes(filtrofinal)) {
				// Remove items out of filter
				// producto.parentElement.parentElement.parentElement.style.display = "none"
				// producto.parentNode.parentNode.parentNode.classList.remove("filtroVisible")
				/* If menu disappears */
				producto.style.display = "none"
				producto.classList.remove("filtroVisible")
			} else {
				// producto.parentElement.parentElement.parentElement.style.display = "inline-flex"
				// producto.parentNode.parentNode.parentNode.classList.add("filtroVisible")
				producto.style.display = "inline-flex"
				producto.classList.add("filtroVisible")
			}
		})

		if (filtrofinal == "") {
			resultFilterProduct.innerHTML = ` <span id='resultFilterProductValue'> todos los productos</span>`
		} else {
			resultFilterProduct.innerHTML = ` todos los productos <span id='resultFilterProductValue'>${filtrofinal.toUpperCase()}</span>`
		}		
	}

	let botonesfiltro = document.querySelectorAll('.filtro')

	botonesfiltro.forEach(function(boton){
		boton.addEventListener('click', function(){
			let filtro = boton.getAttribute("data-filtro").toLowerCase()
			filtrar(filtro)
			
			/* Restart to page 1 and reset buttons stlyling */
			currentPage = 1
			currentLastItemSpaceAvailable = productsPerPage

			updatePagination()
			printPagesList()

			checkButtonPrevNextStyles()
			updateActivePage()

			/* Restart search value and result message */
			buscador.value = ""
			resultSearch.innerText = ""

			/* If Menu disappears */
			// contenedorbotones.style.display = "none"
			/* If Menu slides */
			contenedorbotones.classList.remove("slide")
		})
	})

//////////////////////////// SUB ITEMS NAV //////////////////////////////////////

	// let busqueda = document.querySelector('#busqueda')
	//let contenedorbotones = document.querySelector('#contenedorbotones')
	let contenedorSubItems = document.querySelector('#contenedorSubItems')

	let superItem = document.querySelector('#superItem')
	let subItemBotonNav = document.querySelectorAll(".subItemBotonNav")

	contenedorSubItemsActivado = false

	superItem.addEventListener('click', function(e){
		console.log(this)
		e.stopPropagation() // para que no se clickee el padre tambien
		contenedorSubItemsActivado = !contenedorSubItemsActivado
		if (window.matchMedia("(max-width: 700px)").matches) {
			if (contenedorSubItemsActivado) {
				console.log(this)
				this.classList.add("dudasInToggleClicked")

				contenedorSubItems.classList.add("contenedorDudasInToggleClicked")
			} else {
				console.log(this)
				this.classList.remove("dudasInToggleClicked")

				contenedorSubItems.classList.remove("contenedorDudasInToggleClicked")
			}
		} else {
			if (contenedorSubItemsActivado) {
				contenedorSubItems.style.display = "flex";
			} else {
				contenedorSubItems.style.display = "none";
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

//////////////////// CAROUSEL NOVEDADES ////////////////////
	let carouselNovedades = document.querySelector("#carouselNovedades")
	let carouselItems = document.querySelectorAll(".carouselItem")
	let carouselCurrentLastItem = carouselItems[carouselItems.length - 1]
	let carouselButtonPrevious = document.querySelector("#carouselButtonPrevious")
	let carouselButtonNext = document.querySelector("#carouselButtonNext")

	carouselNovedades.insertAdjacentElement("afterbegin", carouselCurrentLastItem) // 'afterbegin' positions the selected element (carouselCurrentLastItem) right at the beginning of the container/element

	let carouselActiveItem = 1 /* The SECOND (starting from 0) carousel item is the first element on screen */

	function CarouselNextItem() {
		let carouselCurrentFirstItem = document.querySelectorAll(".carouselItem")[0]
		carouselNovedades.style.marginLeft = "-200%"
		carouselNovedades.style.transition = "0.5s"
		setTimeout(function(){
			carouselNovedades.style.transition = "none"
			carouselNovedades.insertAdjacentElement("beforeend", carouselCurrentFirstItem)
			carouselNovedades.style.marginLeft = "-100%"
		}, 500) // Same value as transition duration (0.5s = 500)

		carouselActiveItem += 1
		if (carouselActiveItem > carouselItems.length - 1) { /* If it's the last item, restart the counter */
			carouselActiveItem = 0
		}
		// console.log(carouselActiveItem)
	}

	function CarouselPreviousItem() {
		let carouselCurrentLastItem = document.querySelectorAll(".carouselItem")[document.querySelectorAll(".carouselItem").length - 1]
		carouselNovedades.style.marginLeft = "0%"
		carouselNovedades.style.transition = "0.5s"
		setTimeout(function(){
			carouselNovedades.style.transition = "none"
			carouselNovedades.insertAdjacentElement("afterbegin", carouselCurrentLastItem)
			carouselNovedades.style.marginLeft = "-100%"
		}, 500) // Same value as transition duration (0.5s = 500)

		carouselActiveItem -= 1
		if (carouselActiveItem < 0) { /* If it's the first item, restart the counter */
			carouselActiveItem = carouselItems.length - 1
		}
		console.log(carouselActiveItem)
	}

	carouselButtonNext.addEventListener("click", function(){
		CarouselNextItem()

		/* Reset timer */
		clearInterval(carouselTimer)
		carouselTimer = setInterval(function(){
			CarouselNextItem()
		}, 5000)
	})

	carouselButtonPrevious.addEventListener("click", function(){
		CarouselPreviousItem()

		/* Reset timer */
		clearInterval(carouselTimer)
		carouselTimer = setInterval(function(){
			CarouselNextItem()
		}, 5000)
	})

	/* Automatic sliding */
	let carouselTimer = setInterval(function(){
		CarouselNextItem()
	}, 5000)

	/****** INDICATORS *******/
		let carouselItemIndicatorsContainer = document.querySelector("#carouselItemIndicatorsContainer")

		carouselItems.forEach(function(item){
			let indicator = document.createElement("div")
			indicator.classList.add("carouselIndicator")
			carouselItemIndicatorsContainer.appendChild(indicator)
		})

		let carouselIndicators = document.querySelectorAll(".carouselIndicator")

		carouselIndicators.forEach(function(indicator){
			indicator.addEventListener("click", function(){
				console.log("Posicion del indicador: " + Array.from(indicator.parentNode.children).indexOf(indicator)) // Indicator position (starting from 0)
				console.log("ActiveItem " + carouselActiveItem)
				if (Array.from(indicator.parentNode.children).indexOf(indicator) < carouselActiveItem) {
					let movesToDo = carouselActiveItem - Array.from(indicator.parentNode.children).indexOf(indicator)
					for (i = 0; i < movesToDo; i++) {
						CarouselPreviousItem()
						console.log("se movio 1 vez")

						/* Reset timer */
						clearInterval(carouselTimer)
						carouselTimer = setInterval(function(){
							CarouselNextItem()
						}, 5000)
					}
				} else if (Array.from(indicator.parentNode.children).indexOf(indicator) > carouselActiveItem) {
					let movesToDo = Array.from(indicator.parentNode.children).indexOf(indicator) - carouselActiveItem
					for (i = 0; i < movesToDo; i++) {
						CarouselNextItem()
						console.log("se movio 1 vez")

						/* Reset timer */
						clearInterval(carouselTimer)
						carouselTimer = setInterval(function(){
							CarouselNextItem()
						}, 5000)
					}
				} else { // Same item
					/* Reset timer */
					clearInterval(carouselTimer)
					carouselTimer = setInterval(function(){
						CarouselNextItem()
					}, 5000)
				}
			})
		})

////////////////////// BUSCADOR ////////////////////////////
	let buscador = document.querySelector("#buscador")
	let buscarBoton = document.querySelector("#buscarBoton")
	let xButton = document.querySelector("#barAndIconContainer i")
	let resultSearch = document.querySelector("#resultSearch")
	// let productos = document.querySelectorAll(".producto")

	function buscar () {
		/* Antes de la función buscar aplico el ultimo filtro, para que la busqueda se aplique dentro del mismo y no en TODOS los productos. Si no, se reinicia el catalogo en cada busqueda. */
		filtrar(lastFilter)

		let filtroVisibleList = document.querySelectorAll(".filtroVisible")
		filtroVisibleList.forEach(function(producto){
			if (producto.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-descripcion").toLowerCase().includes(buscador.value.toLowerCase()) || producto.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-nombre").toLowerCase().includes(buscador.value.toLowerCase())) {
				// producto.parentNode.parentNode.parentNode.style.display = "inline-flex"
				// agregar clase que indique filtro visible (para la paginacion)
				// producto.parentNode.parentNode.parentNode.classList.add("filtroVisible")

				producto.style.display = "inline-flex"
				producto.classList.add("filtroVisible")
			} else {
				// producto.parentNode.parentNode.parentNode.style.display = "none"
				// agregar clase que indique filtro none (para la paginacion)
				// producto.parentNode.parentNode.parentNode.classList.remove("filtroVisible")

				producto.style.display = "none"
				producto.classList.remove("filtroVisible")
			}
		})

		if (buscador.value == "") {
			resultSearch.innerText = ""
		} else {
			resultSearch.innerHTML = ` que contengan el término "<span id="resultSearchValue">${buscador.value.toLowerCase()}</span>"`
		}

		/* Clean content of pagesListContainer */
		pagesListContainer.innerText = ""

		console.log("currentLastItemSpaceAvailable: " + currentLastItemSpaceAvailable)
		console.log("productsPerPage: " + productsPerPage)
		
		/* Restart to page 1 and reset buttons stlyling */
		currentPage = 1
		currentLastItemSpaceAvailable = productsPerPage
		// buttonPrev.classList.add("blockedButton")

		/* If it's also the last page */
		// let contenedorProductoLista = document.querySelectorAll(".filtroVisible")
		// Create a copy of NodeList as array
		// originalListOfProductsArray = Array.prototype.slice.call(originalListOfProducts, 0) // Array
		contenedorProductoLista = originalListOfProductsArray.filter(item => item.classList.contains("filtroVisible"))

		// if (contenedorProductoLista.length <= currentLastItemSpaceAvailable && contenedorProductoLista.length > currentLastItemSpaceAvailable - productsPerPage) {
		// 	buttonNext.classList.add("blockedButton")
		// } else {
		// 	buttonNext.classList.remove("blockedButton")
		// }

		updatePagination()
		printPagesList()
		checkButtonPrevNextStyles()
		updateActivePage()
	}

	buscarBoton.addEventListener("click", function(e){
		buscar()
	})

	buscador.addEventListener("keypress", function(e){
		if (e.charCode == "13") {
			buscar()
		}		
	})

	xButton.addEventListener("click", function(e){
		buscador.value = ""
		buscar() /* Limpia los resultados de la busqueda */
	})

///////////////////// ORDERNAR ///////////////////////////////
	let orderBy = document.querySelector("#orderBy")

	orderBy.addEventListener("change", function() {
		
		// Restart to page 1
		currentPage = 1
		currentLastItemSpaceAvailable = productsPerPage

		updatePagination()
		checkButtonPrevNextStyles()
		updateActivePage()
		
		// contenedorProductoLista.forEach(function(item){
		// 	console.log(item.childNodes[1].childNodes[1].childNodes[1])
		// })
	})

	function orderByFunction() {
		// Seleccionar elementos despues del filtro (si lo hay)
		// let contenedorProductoLista = document.querySelectorAll(".filtroVisible") // NodeList
		// let productosArray = Array.prototype.slice.call(contenedorProductoLista, 0) // Array

		// Create a copy of NodeList as array to apply filter
		// originalListOfProductsArray = Array.prototype.slice.call(originalListOfProducts, 0) // Array
		contenedorProductoLista = originalListOfProductsArray.filter(item => item.classList.contains("filtroVisible"))

		

		// value 1 = precio ascendente
		// value 2 = precio descendente
		// value 3 = nombre ascendente
		// value 4 = nombre descendente

		switch (orderBy.value) {
			case "1":
				console.log("entró en case 1")
				contenedorProductoLista.sort(function(a,b) {
					var aCat = parseFloat(a.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-precio"))
					var bCat = parseFloat(b.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-precio"))
					return aCat - bCat
				})
				break;
			case "2":
				console.log("entró en case 2")
				contenedorProductoLista.sort(function(a,b) {
					var aCat = parseFloat(a.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-precio"))
					var bCat = parseFloat(b.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-precio"))
					return bCat - aCat
				})
				break;
			case "3":
				console.log("entró en case 3")
				contenedorProductoLista.sort(function(a,b) {
					var aCat = a.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-nombre")
					var bCat = b.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-nombre")
					return aCat.localeCompare(bCat) // Ascending order
				})
				break;
			case "4":
				console.log("entró en case 4")
				contenedorProductoLista.sort(function(a,b) {
					var aCat = a.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-nombre")
					var bCat = b.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute("data-nombre")
					return aCat.localeCompare(bCat) // Ascending order (can't sort strings by descending order with the sort function, I have to use reverse)
				}).reverse();
				break;
		}

		// switch (orderBy.value) {
		// 	case "nombreAsc":
		// 		contenedorProductoLista = orderByFunction("data-nombre", "asc")
		// 		break;
		// 	case "nombreDesc":
		// 		contenedorProductoLista = orderByFunction("data-nombre", "desc")
		// 		break;
		// 	case "precioAsc":
		// 		let contenedorProductoLista = orderByFunction("data-precio", "asc")
		// 		break;
		// 	case "precioDesc":
		// 		contenedorProductoLista = orderByFunction("data-precio", "desc")
		// 		break;
		// }

		// if (criteria == "data-precio") {
		// 	productosArray.sort(function(a,b) {
		// 		var aCat = parseFloat(a.childNodes[1].childNodes[1].childNodes[1].getAttribute(criteria))
		// 		var bCat = parseFloat(b.childNodes[1].childNodes[1].childNodes[1].getAttribute(criteria))
		// 		if (ascOrDesc == "asc") {
		// 			return aCat - bCat // Ascending order
		// 		} else if (ascOrDesc == "desc") {
		// 			return bCat - aCat // Descending order
		// 		}			
		// 	});
		// } else if (criteria == "data-nombre") {
		// 	if (ascOrDesc == "asc") {
		// 		productosArray.sort(function(a,b) {
		// 			var aCat = a.childNodes[1].childNodes[1].childNodes[1].getAttribute(criteria)
		// 			var bCat = b.childNodes[1].childNodes[1].childNodes[1].getAttribute(criteria)
		// 			return aCat - bCat // Ascending order
		// 		});
		// 	} else if (ascOrDesc == "desc") {
		// 		productosArray.sort(function(a,b) {
		// 			var aCat = a.childNodes[1].childNodes[1].childNodes[1].getAttribute(criteria)
		// 			var bCat = b.childNodes[1].childNodes[1].childNodes[1].getAttribute(criteria)
		// 			return bCat - aCat // Ascending order (can't sort strings by descending order with the sort function, I have to use reverse)
		// 		}).reverse(); // Reverse -> Descending order
		// 	}
		// }

		// currentPage = 1
		
		return contenedorProductoLista
	}



/////////////////// PRODUCTS PAGINATION ///////////////////////
	let buttonPrev = document.querySelector("#buttonPrev")
	let buttonNext = document.querySelector("#buttonNext")

	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	////////// IMPORTANTE: cambiar el valor de productsPerPage segun el mediaQuery que se esté ejecutanto
	
	let currentLastItemSpaceAvailable = productsPerPage

	let productsContainer = document.querySelector("#productsContainer")

	function updatePagination() {
		// Seleccionar elementos despues del filtro (si lo hay)
		// let contenedorProductoLista = document.querySelectorAll(".filtroVisible")

		// switch (orderBy.value) {
		// 	case "nombreAsc":
		// 		contenedorProductoLista = orderByFunction("data-nombre", "asc")
		// 		break;
		// 	case "nombreDesc":
		// 		contenedorProductoLista = orderByFunction("data-nombre", "desc")
		// 		break;
		// 	case "precioAsc":
		// 		let contenedorProductoLista = orderByFunction("data-precio", "asc")
		// 		break;
		// 	case "precioDesc":
		// 		contenedorProductoLista = orderByFunction("data-precio", "desc")
		// 		break;
		// }

		let contenedorProductoListaOrdenada = orderByFunction()

		// productsContainer.innerHTML = ""

		// Uso la función orderByFunction ya que tambien trabaja solo con los elementos filtrados .filtroVisible, los ordena y a eso despues lo actualizo en la paginación
		// let contenedorProductoLista = orderByFunction()

		contenedorProductoListaOrdenada.forEach(function(producto){
			productsContainer.appendChild(producto)
		})

		// Order filtered elements (in pages)
		contenedorProductoListaOrdenada.forEach(function(producto, index){
			// console.log(index)
			// console.log(producto.childNodes[1].childNodes[1].childNodes[1])
			if (index < currentLastItemSpaceAvailable - productsPerPage) {
				producto.style.display = "none"
			} else if (index < currentLastItemSpaceAvailable) {
				producto.style.display = "inline-flex"
			} else {
				producto.style.display = "none"
			}
		})

		// Create a copy of NodeList as array to apply filter
		// let originalListOfProductsArray = Array.prototype.slice.call(originalListOfProducts, 0) // Array
		contenedorProductoLista = originalListOfProductsArray.filter(item => item.classList.contains("filtroVisible"))

		// let totalPages = Math.ceil(document.querySelectorAll(".filtroVisible").length / productsPerPage)
		totalPages = Math.ceil(contenedorProductoLista.length / productsPerPage)
		console.log("Total pages: " + totalPages)
		
	}

	function checkButtonPrevNextStyles() {
		if (totalPages == 0) {
			console.log("Entro en total pages 0")
			// pagesListContainer.innerText = ""
			buttonPrev.classList.add("blockedButton")
			buttonNext.classList.add("blockedButton")
			// mostrar mensaje
			emptyMessage.style.display = "block"
			return
		} else if (currentPage == 1 && currentPage == totalPages) { /* First and last page */
			// ocultar mensaje
			emptyMessage.style.display = "none"

			console.log("Entro en pagina 1 y unica")
			buttonPrev.classList.add("blockedButton")
			buttonNext.classList.add("blockedButton")
		} else if (currentPage == 1) { /* First page */
			// ocultar mensaje
			emptyMessage.style.display = "none"

			console.log("Entro en pagina 1")
			buttonPrev.classList.add("blockedButton")
			buttonNext.classList.remove("blockedButton")
		} else if (currentPage == totalPages) { /* Last page */
			// ocultar mensaje
			emptyMessage.style.display = "none"

			console.log("Entro en pagina final")
			buttonPrev.classList.remove("blockedButton")
			buttonNext.classList.add("blockedButton")
		} else { /* Middle pages */
			// ocultar mensaje
			emptyMessage.style.display = "none"

			console.log("entro en pagina intermedia")

			buttonPrev.classList.remove("blockedButton")
			buttonNext.classList.remove("blockedButton")
		}

				/* Check if it's first page -> AFTER UPDATE */
		// 		if (currentLastItemSpaceAvailable == productsPerPage) {
		// 			buttonPrev.classList.add("blockedButton")
		// 			// buttonNext.classList.remove("blockedButton")
		// 		} else {
		// 			buttonPrev.classList.remove("blockedButton")
		// 		}
		// 
		// 		/* Check if it's last page -> AFTER UPDATE */
		// 		if (contenedorProductoLista.length <= currentLastItemSpaceAvailable && contenedorProductoLista.length > currentLastItemSpaceAvailable - productsPerPage) {
		// 			buttonNext.classList.add("blockedButton")
		// 		} else {
		// 			buttonNext.classList.remove("blockedButton")
		// 		}
	}

	function updateActivePage() {
		let pagesList = document.querySelectorAll("#pagesListContainer p")

		pagesList.forEach(function(page){
			if (page.innerText == currentPage) {
				page.classList.add("activePage")
			} else {
				page.classList.remove("activePage")
			}
		})
	}

	buttonPrev.addEventListener("click", function(){
		/* Check if it's first page -> PREVENT CLICK EFFECTS */
		if (currentLastItemSpaceAvailable == productsPerPage) {
			return
		}

		currentPage -= 1
		currentLastItemSpaceAvailable -= productsPerPage
		console.log(currentLastItemSpaceAvailable)
		updatePagination()

		checkButtonPrevNextStyles()
		updateActivePage()
	})

	buttonNext.addEventListener("click", function(){
		// let contenedorProductoLista = document.querySelectorAll(".filtroVisible")

		// Create a copy of NodeList as array to apply filter
		// let originalListOfProductsArray = Array.prototype.slice.call(originalListOfProducts, 0) // Array
		contenedorProductoLista = originalListOfProductsArray.filter(item => item.classList.contains("filtroVisible"))

		/* Check if it's last page -> PREVENT CLICK EFFECTS */
		if (contenedorProductoLista.length <= currentLastItemSpaceAvailable && contenedorProductoLista.length > currentLastItemSpaceAvailable - productsPerPage) {
			return
		}

		currentPage += 1
		currentLastItemSpaceAvailable += productsPerPage
		console.log(currentLastItemSpaceAvailable)
		updatePagination()

		checkButtonPrevNextStyles()
		updateActivePage()
	})

	// Create a copy of NodeList as array to apply filter
	let originalListOfProductsArray = Array.prototype.slice.call(originalListOfProducts, 0) // Array
	let contenedorProductoLista = originalListOfProductsArray.filter(item => item.classList.contains("filtroVisible"))

	// let totalPages = Math.ceil(document.querySelectorAll(".filtroVisible").length / productsPerPage)
	let totalPages = Math.ceil(contenedorProductoLista.length / productsPerPage)


	let currentPage = 1
	let pagesListContainer = document.querySelector("#pagesListContainer")
	let emptyMessage = document.querySelector("#emptyMessage")

	function printPagesList() {
		console.log("totalpages: " + totalPages)
		pagesListContainer.innerHTML = ""

		for (let i = 1; i <= totalPages; i++) {
			let page = document.createElement("p")
			page.innerText = i
			page.addEventListener("click", function(){
				currentPage = i 
				currentLastItemSpaceAvailable = i * productsPerPage
				updatePagination()
				checkButtonPrevNextStyles()
				updateActivePage()
			})
			pagesListContainer.appendChild(page)
		}


	}

	/* Executed at beginning */
	updatePagination()
	printPagesList()
	updateActivePage()

/////////////////////// FORM VALIDATION / STYLING ///////////////////////
	let nameSurnameInput = document.querySelector("#nameSurnameInput")
	let nameSurnameLabel = document.querySelector("#nameSurnameLabel")

	nameSurnameInput.addEventListener("focusin", function(e){
		if (nameSurnameInput.value == "") {
			nameSurnameLabel.style.left = "-50px"

			nameSurnameInput.style.background = "var(--color5)"
			nameSurnameInput.style.boxShadow = "inset 2px 2px 6px #cbcbcb, inset -3px -3px 5px #ffffff, inset 2px 2px 6px #9d9d9dc9, inset -3px -3px 5px #ffffff"
		} 
		
	})

	nameSurnameInput.addEventListener("focusout", function(e){
		if (nameSurnameInput.value != "") {
			nameSurnameLabel.style.left = "-50px"

			nameSurnameInput.style.background = "var(--color5)"
			nameSurnameInput.style.boxShadow = "inset 2px 2px 6px #cbcbcb, inset -3px -3px 5px #ffffff, inset 2px 2px 6px #9d9d9dc9, inset -3px -3px 5px #ffffff"
		} else {
			nameSurnameLabel.style.left = "15px"

			nameSurnameInput.style.background = "linear-gradient(178deg, #ffffff, #d7d7d7)"
			nameSurnameInput.style.boxShadow = "2px 2px 6px #cbcbcb, -2px -2px 6px #ffffff, 2px 2px 6px #cbcbcb, -2px -2px 6px #ffffff, inset -2px -2px 6px #cbcbcb, inset 2px 2px 6px #ffffff"
		}
	})


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

/////////////////////// SEND VIA WHATSAPP ////////////////////
	let sendViaWhatsapp = document.querySelector("#sendViaWhatsapp")

	sendViaWhatsapp.addEventListener("click", function(){
		// https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale
		
		let texto = encodeURIComponent(contenedoritemspresupuesto.innerText)
		window.location.href = `https://wa.me/2995477807?text=${texto}`
	})

	// Añadir antes el total y el comentario (textarea)

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