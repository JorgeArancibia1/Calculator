const BTN1 = document.getElementById('in1');
const BTN2 = document.getElementById('in2');
const BTN3 = document.getElementById('in3');
const BTN4 = document.getElementById('in4');
const BTN5 = document.getElementById('in5');
const BTN6 = document.getElementById('in6');
const BTN7 = document.getElementById('in7');
const BTN8 = document.getElementById('in8');
const BTN9 = document.getElementById('in9');
const BTN0 = document.getElementById('in0');
const BTNMAS = document.getElementById('inMas');
const BTNMENOS = document.getElementById('inMenos');
const BTNPOR = document.getElementById('inPor');
const BTNDIV = document.getElementById('inDiv');
const BTNPORCENT = document.getElementById('inPorcent');
const BTNPOT = document.getElementById('inN');
const BTNRESULT = document.getElementById('inResult');
const BTNCE = document.getElementById('inCE');
const BTNC = document.getElementById('inC');
const BTNPUNTO = document.getElementById('inPunto');
var lb = document.getElementById('pantalla');
var add1, add2, operacion, porcentaje;

// NÚMEROS

BTN1.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 1;
});
BTN2.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 2;
});
BTN3.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 3;
});
BTN4.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 4;
});
BTN5.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 5;
});
BTN6.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 6;
});
BTN7.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 7;
});
BTN8.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 8;
});
BTN9.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 9;
});
BTNPUNTO.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + '.';
});
BTN0.addEventListener('click', function(e){
	lb.innerHTML = "";
	lb.innerHTML = lb.innerHTML + 0;
});

// ACCIONES

BTNC.addEventListener('click', function(e){
	reset();
});
BTNCE.addEventListener('click', function(e){
	limpiar();
});

BTNMAS.addEventListener('click', function(e){
	add1 = lb.innerHTML;
	operacion = '+';
	lb.innerHTML = "";
});
BTNMENOS.addEventListener('click', function(e){
	add1 = lb.innerHTML;
	operacion = '-';
	lb.innerHTML = "";
});
BTNPOR.addEventListener('click', function(e){
	add1 = lb.innerHTML;
	operacion = 'x';
	lb.innerHTML = "";
});
BTNDIV.addEventListener('click', function(e){
	add1 = lb.innerHTML;
	operacion = '÷';
	lb.innerHTML = "";
});
BTNPORCENT.addEventListener('click', function(e){
	add1 = lb.innerHTML;
	operacion = '%';
	lb.innerHTML = "";
});
BTNPOT.addEventListener('click', function(e){
	add1 = lb.innerHTML;
	operacion = 'n';
	lb.innerHTML = "";
});
BTNRESULT.addEventListener('click', function(e){
	add2 = lb.innerHTML;
	resultado();
});

// Botón para restar el IVA de un número.
// BTNPORCENT.addEventListener('click', function(e){
// 	const IVA = 0.19;
// 	resultado = lb.innerHTML * IVA;
// 	var nIVA = lb.innerHTML - resultado;
// 	lb.innerHTML = nIVA;
// });
// Botón para restar el IVA de un número.
// BTNPORCENT.addEventListener('click', function(e){
// 	const IVA = 0.19;
// 	resultado = lb.innerHTML * IVA;
// 	var nIVA = lb.innerHTML + resultado;
// 	lb.innerHTML = nIVA;
// });


function limpiar(){
	lb.innerHTML = "";
}
function reset(){
	lb.innerHTML = "0";
	add1 = 0;
	add2 = 0;
	operacion = "";
}
function resultado() {
	var res = 0;
	switch(operacion){
		case '+':
			res = parseFloat(add1) + parseFloat(add2);
			break;
		case '-':
			res = parseFloat(add1) - parseFloat(add2);
			break;
		case 'x':
			res = parseFloat(add1) * parseFloat(add2);
			break;
		case '÷':
			res = parseFloat(add1) / parseFloat(add2);
			break;
		case '%':
			res = (parseFloat(add1) / 100) * parseFloat(add2);
			break;
		case 'n':
			res = parseFloat(add1) ** parseFloat(add2);
			break;
	}
	reset();
	lb.innerHTML = res;
}