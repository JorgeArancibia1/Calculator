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
var btnMas = document.getElementById('inMas');
var btnMenos = document.getElementById('inMenos');
var btnPor = document.getElementById('inPor');
var btnDiv = document.getElementById('inDiv');
var btnPorcent = document.getElementById('inPorcent');
var btnPot = document.getElementById('XX');
var btnResult = document.getElementById('inResult');
var btnCE = document.getElementById('CE');
var borrarTodo = document.getElementById('C');
const BTNPUNTO = document.getElementById('inPunto');
var lb = document.getElementById('pantalla');

// btnPor.addEventListener('click', function(e){
// 	var resultado =  * ;
// 	lb.innerHTML = resultado;
// });

BTN1.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 1;
});
BTN2.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 2;
});
BTN3.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 3;
});
BTN4.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 4;
});
BTN5.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 5;
});
BTN6.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 6;
});
BTN7.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 7;
});
BTN8.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 8;
});
BTN9.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 9;
});
BTNPUNTO.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + '.';
});
BTN0.addEventListener('click', function(e){
	lb.innerHTML = lb.innerHTML + 0;
});

// function limpiar(){
// 	lb.innerHTML = "";
// }

