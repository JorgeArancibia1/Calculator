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
const BTNRIVA = document.getElementById('menosIVA');
const BTNRESULT = document.getElementById('inResult');
const BTNMIVA = document.getElementById('masIVA');
const BTNC = document.getElementById('inC');
const BTNPUNTO = document.getElementById('inPunto');
var lb = document.getElementById('pantalla');
var add1, add2, operacion;

// NÚMEROS
var contenedor = "";
lb.innerHTML = "0";

function imprimirNum(BTN) {
	contenedor = contenedor + BTN.value;
	lb.innerHTML = contenedor;
}

BTN1.addEventListener('click', function(){
	imprimirNum(BTN1);
});
BTN2.addEventListener('click', function(){
	imprimirNum(BTN2);
});
BTN3.addEventListener('click', function(){
	imprimirNum(BTN3);
});
BTN4.addEventListener('click', function(){
	imprimirNum(BTN4);
});
BTN5.addEventListener('click', function(){
	imprimirNum(BTN5);
});
BTN6.addEventListener('click', function(){
	imprimirNum(BTN6);
});
BTN7.addEventListener('click', function(){
	imprimirNum(BTN7);
});
BTN8.addEventListener('click', function(){
	imprimirNum(BTN8);
});
BTN9.addEventListener('click', function(){
	imprimirNum(BTN9);
});
BTNPUNTO.addEventListener('click', function(){
	imprimirNum(BTNPUNTO);
});
BTN0.addEventListener('click', function(){
	imprimirNum(BTN0);
});

// ACCIONES

BTNC.addEventListener('click', function(){
	reset();
});

BTNMAS.addEventListener('click', function(){
	add1 = lb.innerHTML;
	operacion = '+';
	contenedor = "";
});
BTNMENOS.addEventListener('click', function(){
	add1 = lb.innerHTML;
	operacion = '-';
	contenedor = "";

});
BTNPOR.addEventListener('click', function(){
	add1 = lb.innerHTML;
	operacion = 'x';
	contenedor = "";

});
BTNDIV.addEventListener('click', function(){
	add1 = lb.innerHTML;
	operacion = '÷';
	contenedor = "";

});
BTNPORCENT.addEventListener('click', function(){
	add1 = lb.innerHTML;
	operacion = '%';
	contenedor = "";

});

BTNRESULT.addEventListener('click', function(){
	add2 = lb.innerHTML;
	resultado();
});

// Botón para restar el IVA de un número.
//
BTNRIVA.addEventListener('click', function(){
	const IVA = 0.81;
	resultado = lb.innerHTML * IVA;
	lb.innerHTML = resultado;
});
// Botón para restar el IVA de un número.
//
BTNMIVA.addEventListener('click', function(){
	const IVA = 1.19;
	resultado = parseInt(lb.innerHTML * IVA);
	lb.innerHTML = resultado;
});


function limpiar(){
	lb.innerHTML = "";
	contenedor = "";
}
function reset(){
	lb.innerHTML = "0";
	add1 = 0;
	add2 = 0;
	operacion = "";
	contenedor = "";
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
	}
	reset();
	lb.innerHTML = res;
}
