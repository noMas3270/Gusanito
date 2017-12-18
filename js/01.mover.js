window.onload = function () {

	var fondo = new Area("fondo", 500, 500, "green", 0, 0);
	fondo.agregar();

	// var gusano = [new Gusano("cabeza", 22, 25, "red", 225, 225)];
	// gusano[0].agregar();

	var pelota = new Pelota("pelota", "red");
	pelota.agregar();
	pelota.mover();

};

document.onkeydown = function (e) {
	var intervalo = setInterval(function(){
		mover(e.keyCode);
	},100)
};

function mover(key){
	switch(key){
		case 38: gusano.moverX(-25); break; // Mover arriba
		case 40: gusano.moverX(+25); break; // Mover abajo
		case 37: gusano.moverY(-25); break; // Mover izquierda
		case 39: gusano.moverY(-25); break; // Mover derecha
		default: clearInt();
	};
};

function clearInt(){
	if (intervalo) {
	clearInterval(intervalo)
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