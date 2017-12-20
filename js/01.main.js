window.onload = function () { // por que carajos tengo que meter todo esto acá adentro!?!?!
	var velocidad=100;

	var fondo = new Area("fondo", 500, 500, "green", 0, 0);
	fondo.agregar();

	var pelota = new Pelota("pelota", 25, 25, "red", 0, 0);
	pelota.agregar();
	pelota.moverRandom();

	var gusano = new Gusano("gusano", 25, 25, "grey", 225, 225);
	gusano.agregar();

	var intervalo;

	document.onkeydown = function (e) {
		clearInt();
		intervalo = setInterval(function(){
			mover(e.keyCode);
			controlMapa();
			controlPelota();
		},velocidad)
	};

	function clearInt(){
		if (intervalo) {
			clearInterval(intervalo)
		};
	};

	function mover(key){
		switch(key){
		case 38: gusano.moverArriba(); break; // Mover arriba
		case 40: gusano.moverAbajo(); break; // Mover abajo
		case 37: gusano.moverIzq(); break; // Mover izquierda
		case 39: gusano.moverDer(); break; // Mover derecha
		default: clearInt();
		};
	};
	
	function controlMapa() {
		if (parseInt(gusano.ejeX) < parseInt(fondo.ejeX) ||
			parseInt(gusano.ejeY) < parseInt(fondo.ejeY) ||
			parseInt(gusano.ejeX) + parseInt(gusano.alto) > parseInt(fondo.ejeX) + parseInt(fondo.alto) ||
			parseInt(gusano.ejeY) + parseInt(gusano.ancho) > parseInt(fondo.ejeY) + parseInt(fondo.ancho)) {
			clearInt();
			gusano.reiniciar(225, 225);
			alert("Perdiste capo, vofi...")		
		};
	};

	function controlPelota() {
		if (parseInt(gusano.ejeX) == parseInt(pelota.ejeX) && 
			parseInt(gusano.ejeY) == parseInt(pelota.ejeY)) {	
			pelota.moverRandom();
			gusano.agregarCola();
			velocidad--;
		 }
	};

};

/*
// var recuadro = document.querySelector("#recuadro");
// var pelota = document.querySelector("#pelota");

var oldRecuadroTop = 0;
var oldRecuadroTop = 0;
var recuadroTop = 233;
var recuadroLeft = 233;
var intervalo;
var obj = []
var i = 0;
var caca =100;

pelotaRandom()

document.onkeydown = function (e) {
	clearInt();
	intervalo = setInterval(function(){
		mover(e.keyCode);
		moverCola();
		controlarMapa();
		controlarPelota();
		// controlarCola();
	},caca)
};

function arriba(){
	recuadroTop = recuadroTop -25;
	recuadro.style.top = recuadroTop + "px";			
};

function abajo(){
	recuadroTop = recuadroTop +25;
	recuadro.style.top = recuadroTop + "px";			
};

function izquierda(){
	recuadroLeft = recuadroLeft -25;
	recuadro.style.left = recuadroLeft + "px";			
};

function derecha(){
	recuadroLeft = recuadroLeft +25;
	recuadro.style.left = recuadroLeft + "px";			
};

function moverCola() {
	switch(obj.length){
		case 0: 
		break;
		case 1:
			obj[0].style.top = oldRecuadroTop + "px";
			obj[0].style.left = oldRecuadroLeft  + "px";
		break;
		default: 			
			var j = obj.length -1;
			for(j; j >= 0; j--){
				if (j == 0) {
					obj[j].style.top = oldRecuadroTop + "px";
					obj[j].style.left = oldRecuadroLeft  + "px";
				} else {
					var k = j - 1;
					obj[j].style.top = obj[k].style.top;
					obj[j].style.left = obj[k].style.left;
				};

			};
	};	

};

function controlarMapa(){
	
	if (recuadroTop == 508 || recuadroTop == -17 ||
		recuadroLeft == 508 || recuadroLeft == -17) {
		clearInt();
	 	recuadroTop = 233;
		recuadroLeft = 233;
		recuadro.style.top = recuadroTop + "px";
		recuadro.style.left = recuadroLeft + "px";
		alert("Perdiste capo, vofi...")		
	}
};

function controlarCola(){
	
};

function controlarPelota(){

	var pelotaTop = parseInt(pelota.style.top)
	var pelotaLeft = parseInt(pelota.style.left) 
	
	if (recuadroLeft == pelotaLeft && recuadroTop == pelotaTop) {	
			pelotaRandom();
			agregarCola1();
			caca = caca - 5;
		 }
};

function pelotaRandom(){
	pelota.style.top = randomPx(18,1);
	pelota.style.left = randomPx(18,1);
};

function randomPx(min, max){

	numero = Math.round(Math.random() * (max - min) + min);
	numero = numero * 25 + 8;
	var randomPx = numero + "px";
	return randomPx;
	
};

function agregarCola1(){
	
	var newDiv = document.createElement("div"); 

	newDiv.id = "div" + i	
	newDiv.style.width = "25px"
	newDiv.style.height = "25px"
	newDiv.style.background = "green"
	newDiv.style.position = "fixed"
	document.body.appendChild(newDiv); 

	obj.push (document.getElementById("div" + i));
	// obj.push 
	console.log("obj", obj);

	obj[i].style.top = oldRecuadroTop + "px"
	obj[i].style.left = oldRecuadroLeft  + "px"

	i++;

};

function clearInt(){
	if (intervalo) {
	clearInterval(intervalo)
};};
*/