// este es el código del cuadrado
 console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// const perimetroCuadrado = ladoCuadrado * 4;

// console.log("El perimetro es : " + perimetroCuadrado + " cm");
function areaCuadrado(lado){
    return  lado * lado;   
}
// const AreaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log("El área  es : " + AreaCuadrado + " cm^2");
console.groupEnd();
// este es el código del triangulo
console.group("Triangulo");
//const ladoTringulo1 = 6, ladoTringulo2 = 6, Basetrinangulo = 4, alturaTringualo = 5.5;
//console.log(
//    "Los lados del triangulo miden: "
//    + ladoTringulo1 + " cm, "
//    + ladoTringulo2 + " cm, "
//    + Basetrinangulo + " cm "
//);
//console.log(
//    "La altura triangulo miden: "
//    + alturaTringualo + " cm "
//);
function perimetroTriangulo(lado1, lado2, base ){
    return lado1 + lado2 + base;
}
//const perimetroTriangulo = ladoTringulo1 + ladoTringulo2 + Basetrinangulo;
//console.log("El perimetro es : " + perimetroTriangulo + " cm");
function areaTriangulo(base, altura){
  return (base * altura)/2;
}
//const AreaTriangulo = (Basetrinangulo * alturaTringualo) / 2;
//console.log("El área  es : " + AreaTriangulo + " cm^2");
console.groupEnd();

// este es el código del Circulo
console.group("Circulo");
/*const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const PerimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(
    "El radio del circulo es : "
    + radioCirculo + " cm, ");
console.log(
    "El diametro del circulo es : "
    + diametroCirculo + " cm, ");
console.log(
    "El valor de PI  es : "
    + PI + " cm, "); */
 function diametroCirculo(radio){
    return radio * 2;
 }   

 function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro * Math.PI;
 }   

 function areaCirculo(radio){
    return (radio * radio) *Math.PI;

 }

//console.log("El perimetro es : " + PerimetroCirculo + " cm");
//console.log("El área  es : " + areaCirculo + " cm^2");
console.groupEnd();
