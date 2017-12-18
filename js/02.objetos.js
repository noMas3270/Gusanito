

class Area {
	constructor(nombre, alto, ancho, fondo, ejeX, ejeY) {
		this.nombre = nombre;
		this.ancho = ancho;
		this.alto = alto;
		this.fondo = fondo;
		this.ejeX = ejeX;
		this.ejeY = ejeY;
	}

	agregar() {
		var newDiv = document.createElement(this.nombre); 
		newDiv.id = this.nombre	
		newDiv.style.width = this.alto + "px"
		newDiv.style.height = this.ancho + "px"
		newDiv.style.background = this.fondo
		newDiv.style.position = "fixed"
		newDiv.style.top = this.ejeX + "px"
		newDiv.style.left = this.ejeY + "px"
		document.body.appendChild(newDiv);
	}

	moverXY(ejeX, ejeY) {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.top = ejeX + "px";
		moverDiv.style.left = ejeX + "px";
	}

	pos(ejeX) {
		var pos = document.getElementById(this.nombre);
		return pos.style.top = ejeX;
	}

	pos(ejeY) {
		var pos = document.getElementById(this.nombre);
		return pos.style.top = ejeY;
	}

	moverX(ejeX) {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.top = ejeX + "px";
	}

	moverY(ejeY) {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.left = ejeY + "px";
	}

}

class Pelota {
	constructor(nombre, color) {
		this.nombre = nombre;
		this.ancho;
		this.alto;
		this.color = color;
		this.ejeX;
		this.ejeY;
	}

	agregar() {

		var areaPelota = new Area(this.nombre, 25, 25, this.color, 0, 0);
		areaPelota.agregar();

		var numero;

		numero = Math.round(Math.random() * (19 - 1) + 1);
		numero *= 25;

		areaPelota.moverX(numero);	

		numero = Math.round(Math.random() * (19 - 1) + 1);
		numero *= 25;

		areaPelota.moverY(numero);	

	}

	mover() {

		var areaPelota = document.getElementById(this.nombre);
		console.log("areaPelota", areaPelota);
		var numero;

		numero = Math.round(Math.random() * (19 - 1) + 1);
		numero *= 25;

		areaPelota.moverX(numero);	

		numero = Math.round(Math.random() * (19 - 1) + 1);
		numero *= 25;

		areaPelota.moverY(numero);	

	}

}

class Gusano {
	constructor(ejeX, ejeY) {
		this.ejeX = ejeX;
		this.ejeY = ejeY;
	}

	moverArriba() {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.top = ejeX + "px";
		moverDiv.style.left = ejeX + "px";
	}

	moverAbajo() {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.top = ejeX + "px";
		moverDiv.style.left = ejeX + "px";
	}

	moverIzq() {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.top = ejeX + "px";
		moverDiv.style.left = ejeX + "px";
	}

	moverDer() {
		var moverDiv = document.getElementById(this.nombre);
		moverDiv.style.top = ejeX + "px";
		moverDiv.style.left = ejeX + "px";
	}

}

/* Creando la clase de esta manera defino un formato de objeto
function Area(nombre, alto, ancho, fondo, ejeX, ejeY) {
	this.nombre = nombre;
	this.ancho = ancho;
	this.alto = alto;
	this.fondo = fondo;
	this.ejeX = ejeX;
	this.ejeY = ejeY;	
	}
*/
