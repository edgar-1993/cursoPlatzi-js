//codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado() 
//console.log("el perimetro del cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado(lado){ 
    return lado * lado;
}
//console.log("el area del cuadrado es " + areaCuadrado + "cm2");
console.groupEnd();

//codigo del triangulo
 console.group("triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "los lados del triangulo miden: " 
// +ladoTriangulo1
// +"cm, " 
// +ladoTriangulo2 
// +"cm, " 
// +baseTriangulo 
// +"cm"
// );

// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es de : " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("el perimetro del triangulo es " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura ) / 2;
}
// console.log("el area del triangulo es " + areaTriangulo + "cm^2");

console.groupEnd();

//codigo del circulo
console.group("circulos");

// Radio
//const radioCirculo = 4
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo (radio){
    return radio * 2
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log(" PI es : " + PI);

// Circuferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;

}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo (radio) {
    return (radio * radio) * PI;
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

//aqui interactuamos con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert (area);

}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo")
    const value = input.value;

    const perimetro =  perimetroTriangulo (value);
    console.log (perimetro)
}
