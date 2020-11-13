document
    .getElementById("writeclick")
    .addEventListener("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      e.target.innerHTML = "Clicked here.";
    })

// -------------------------------
var cuandolosgatosnoestanlosratonesfiestahacen = true;
// JAVASCRIPT NO ES TIPEADO
cuandolosgatosnoestanlosratonesfiestahacen = "Asi es";

//1 tipo de datos --> Function
// numericos, booleanos, texto, JSON (diccionario), listas, funciones

//4 nomenclaturas para lenguages no tipeados

//camelCase -- cuandoLosGatosNoEstanLosRatonesFiestaHacen
//pascalCase -- CuandoLosGatosNoEstanLosRatonesFiestaHacen
//snakeCase -- cuando_los_gatos_no_estan_los_ratones_fiesta_hacen
//kebab -- cuando-los-gatos-no-estan-los-ratones-fiesta-hacen (URL)
//Hungarian -- intedad   boledad

// El ing. recomienda esto
//CamelCase with Hungarian -- intEdad bolEdad lstEdades dicPersona
// -----------------

var esVerdadero = false;
if (esVerdadero){
  //Expresiones
} else {
  //Expresiones
}

if (esVerdadero){
  //Expresiones
} else if( esVerdadero ) {
  //Expresiones
} else {
  //Expresiones
}
//----------------
var txtValores = "A";
switch (txtValores){
  case "A":
    break;
  case "B":
    break;
  case "C":
    break;
}

var txtTypeVillager = "KING";//NORMAL | SMITH | KNIGHT | KING
var weapons = [];
switch (txtTypeVillager) {
  case "KING":
    weapons.push("POWER STAB");
    break;
  case "KNIGHT":
    weapons.push("IRON AXE");
    break;
  case "SMITH":
    weapons.push("Heavy Hammer");
    break;
  case "NORMAL":
    weapons.push("Kitchen knife");
    break;
  default:
    weapons.push("Hand fist");
}
console.log(weapons.join(", "));


var intEdad = 80;

var esViejito = (intEdad>65)?"Si":"No";

if (intEdad > 65){
  esViejito = "Si";
} else {
  esViejito = "No";
}

/*
if (x){
  if (y){
    if(z){
      if(a){
        if(b){

        }
      }
    }
  }
}
*/

//Ciclos

for (var i = 0; i <100; i++){
  //Expresiones
}

var bolSigue = 100;
while (bolSigue){
  bolSigue = bolSigue-- < 0;
}

var controll = 0;
do {
  //Expesiones
}while(controll == false);

// == busca compara valores 
// === primero compara tipo de datos y luego valores 

function nombreFunction(){
  ///
  return
}
