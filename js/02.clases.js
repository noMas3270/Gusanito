class Area {
	constructor(nombre, alto, ancho, fondo, ejeX, ejeY) {
		this.nombre = nombre;
		this.ancho = ancho;
		this.alto = alto;
		this.fondo = fondo;
		this.ejeX = ejeX;
		this.ejeY = ejeY;
	};
	agregar() {
		let div = document.createElement(this.nombre); 
		div.id = this.nombre	
		div.style.width = this.alto + "px"
		div.style.height = this.ancho + "px"
		div.style.background = this.fondo
		div.style.position = "fixed"
		div.style.top = this.ejeX + "px"
		div.style.left = this.ejeY + "px"
		document.body.appendChild(div);
	};
	obtenerEjeX() {
		let div = document.getElementById(this.nombre);
		return div.style.top;
	};
	obtenerEjeY() {
		let div = document.getElementById(this.nombre);
		return div.style.left;
	};
	cambiarPos(ejeX, ejeY) {
		let Div = document.getElementById(this.nombre);
		div.style.top = ejeX + "px";
		div.style.left = ejeY + "px";
	};
};

class Pelota extends Area {
	agregar() {
		super.agregar();
	};
	moverRandom() {
		let ejeX = Math.round(Math.random() * (19 - 1) + 1) *25;
		let ejeY = Math.round(Math.random() * (19 - 1) + 1) *25;
		super.cambiarPos(ejeX, ejeY);
	};
};

class Gusano extends Area {
	agregar() {
		super.agregar();
	};
	moverArriba() {
		let ejeX = parseInt(super.obtenerEjeX()) - 25;
		let ejeY = parseInt(super.obtenerEjeY());
		super.cambiarPos(ejeX, ejeY);
	};
	moverAbajo() {
		let ejeX = parseInt(super.obtenerEjeX()) + 25;
		let ejeY = parseInt(super.obtenerEjeY());
		super.cambiarPos(ejeX, ejeY);
	};
	moverIzq() {
		let ejeX = parseInt(super.obtenerEjeX());
		let ejeY = parseInt(super.obtenerEjeY()) - 25;
		super.cambiarPos(ejeX, ejeY);
	};
	moverDer() {
		let ejeX = parseInt(super.obtenerEjeX());
		let ejeY = parseInt(super.obtenerEjeY()) + 25;
		super.cambiarPos(ejeX, ejeY);
	};
};

/* Creando la clase de esta manera defino un formato de objeto
function Area(nombre, alto, ancho, fondo, ejeX, ejeY) {
	this.nombre = nombre;
	this.ancho = ancho;
	this.alto = alto;
	this.fondo = fondo;
	this.ejeX = ejeX;
	this.ejeY = ejeY;	
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
*/