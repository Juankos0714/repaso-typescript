"use strict";
/**Ejemplo practico var, let y const */
function testScope() {
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
        console.log("Dentro del bloque:");
        console.log("x:", x);
        console.log("y:", y);
        console.log("z:", z);
    }
    console.log("\nFuera del bloque:");
    console.log("x:", x);
    // console.log("y:", y); 
    // console.log("z:", z); 
}
testScope();
/** variables logicas */
let estado = true;
let b = false;
/** variables numericas */
let identificacion = 123456789;
let nroCuenta = 9986544321;
/**variables any */
let a = 3;
let c = "S";
/**variables string */
let nombre = "sara";
let apellido = "perez";
/**Plantilla de registro */
let saludo = `Bienvenida ${nombre} ${apellido} a nuestro sitio web, gracias por registrarte`;
console.log(saludo);
/**array de numeros */
let arrayNumeros = [1, 2, 3, 4, 5];
arrayNumeros.forEach((element) => {
    console.log(element);
});
/**Array string */
let arrayString = ["carro", "moto", "barco", "yate", "avion"];
arrayString.forEach((objeto) => {
    console.log(objeto);
});
/** leer,agregar, eliminar y actualizar */
//leer
console.log(arrayNumeros[1]);
//eliminar
arrayNumeros.pop();
console.log(arrayNumeros);
//agregar
arrayNumeros.push(8);
console.log(arrayNumeros);
//actualizar
arrayNumeros[2] = 7;
//Objetos (llave-valor)
let diasSemana = { 1: "Lunes", 2: "Martes", 3: "Miercoles", 4: "Jueves", 5: "Viernes", 6: "sabado", 7: "Domingo" };
for (const i in diasSemana) {
    console.log(i);
    console.log(diasSemana[i]);
    console.log("---");
}
//Objetos (llave-valor)
let numeros = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
for (const key in numeros) {
    console.log(numeros[key]);
}
//lectura
console.log(diasSemana[0]);
console.log(diasSemana[2]);
//escritura
diasSemana[3] = "LUNES";
//eliminacion
delete diasSemana[5];
console.log(diasSemana);
//asignacion
diasSemana[1] = "Sabado";
//recorrido
console.log("----------+++++++");
for (const llave in diasSemana) {
    console.log(llave);
    console.log(diasSemana[llave]);
    console.log("-----------------");
}
//ejemplos practicos de for y while
for (let i = 0; i < 6; i++) {
    console.log(`|${i}|`);
}
let i = 0;
while (i < 10) {
    console.log(`while:prueba de i ${i}`);
    i++;
}
