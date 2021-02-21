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
			producto.parentElement.parentElement.style.display = "none"
		} else {
			producto.parentElement.parentElement.style.display = "flex"
		}
	})
}

let botonesfiltro = document.querySelectorAll('.filtro')

botonesfiltro.forEach(function(boton){
	boton.addEventListener('click', function(){
		let filtro = boton.getAttribute("data-filtro").toLowerCase()
		filtrar(filtro)
	})
})

//////////////////////////// BOTONES FILTRO NAV //////////////////////////////////////

let busqueda = document.querySelector('#busqueda')
//let contenedorbotones = document.querySelector('#contenedorbotones')
let contenedordudas = document.querySelector('#contenedordudas')

busquedaactivado = false

busqueda.addEventListener('click', function(e){
	busquedaactivado = !busquedaactivado
	dudasactivado = false
	if (busquedaactivado) {
		contenedorbotones.style.display = "flex"
	} else {
		contenedorbotones.style.display = "none"
		contenedordudas.style.display = "none"
	}
})

let dudas = document.querySelector('#dudas')

dudasactivado = false

dudas.addEventListener('click', function(e){
	e.stopPropagation() // para que no se clickee el padre tambien
	dudasactivado = !dudasactivado
	if (dudasactivado) {
		contenedordudas.style.display = "flex"
	} else {
		contenedordudas.style.display = "none"
	}
})