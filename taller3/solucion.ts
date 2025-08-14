/**Cree y ejecute una promesa que siempre se resuelva, y que lo haga con un string “Somos
programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante
console.log
 */
let promise1 = new Promise((resolve,reject)=>{
    resolve("“Somos programadores, hacemos mover el mundo”")
}).then((res)=>{console.log(res)})

/**Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string “Ha ocurrido un error
desconocido.”, de tal manera que en su .catch, se imprima tal string mediante console.log
 */
let promise2 = new Promise((resolve,reject)=>{
    reject(new Error("“Ha ocurrido un error desconocido.”"))
}).catch((err)=>{console.log(err.message)})

/**La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual
a 2. Cree un programa que implemente una variable que guarde el estrato del usuario, y mediante la
evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas, de tal
manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string
que indique si el usuario tiene o no derecho al subsidio, tal string deberá ser imprimido en el .then de la
promesa con console.log. En caso de que la variable contenga un valor nó válido la promesa se debe
rechazar lanzando el siguiente error: new Error("Estrato no válido"), tal error debe ser mostrado en
el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message),
tenga en cuenta que err, es la información del error(motivo de rechazo) que se pasa desde el
reject al catch como parámetro de nombre err.
 */
let estrato = 2;

let promesa3 = new Promise((resolve, reject) => {
    if (estrato >= 1 && estrato <= 2){
        resolve("puede acceder al subsidio")

    }if(estrato >= 1 && estrato <= 6){
            resolve("El estrato es valido")
        };reject(new Error("Estrato no válido"));
    
})
promesa3.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
})
/**
 * Cree una promesa que implemente 4 métodos .then en cadena de tal manera que la promesa se
resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven al
cuadrado el valor pasado, imprimiendo al final el mensaje “el valor final es: X” donde x es el
resultado final del encadenamiento
 */

let promesa12 = new Promise((resolve, reject) => {
    resolve(2);
})

promesa12.then((res: any) => {
    console.log(res);
    return res * res;
}).then((res) => {
    console.log(res);
    return res * res;
}).then((res) => {
    console.log(res);
    return res * res;
}).then((res) => {
    console.log(res);
    return console.log(`“el valor final es: `,res*res);
    
    
}).catch((err) => {
    console.log(err.message);
})

/**
 *  Cree tres promesas promesa1, promesa2 y promesa3, de tal manera que la promesa1 siempre
se resuelva con la cadena “Somos ADSI”, que la promesa2 tenga dos opciones, resolverse o
rechazarse; de tal forma que si se resuelva lo haga con la cadena “ Somos programadores” ,
pero si se rechaza lo haga lanzando un error “Promesa 2 no cumplida” (use una variable y un
condicional doble para controlar la resolución o rechazo de la promesa, p.e. una variable estado,
velocidad, edad etc). Por último, la promesa3 siempre se debe resolver con la cadena “,
Hacemos mover el mundo”. Encadene las promesas de tal manera que cuando la promesa1 se
cumpla, imprima desde su .then el mensaje con el que se resolvió y retorne la promesa2 y
cuando ésta última se cumpla, imprima desde su .then el mensaje con el que se resolvió y
retorne la promesa3, y cuando la promesa 3 se cumpla imprima desde su .then el mensaje con
el que se resolvió. Implemente .catch para manejar el error que puede ocurrir en la promesa2, en
caso de que ocurra el rechazo, imprima el mensaje del error mediante err.message.
 */
let laPromesa1 = new Promise((resolve, reject) => {
    resolve("Soy la promesa 20");
})

let laPromesa2 = new Promise((resolve, reject) => {
    resolve("Soy la promesa 21")
})

let laPromesa3 = new Promise((resolve, reject) => {
    resolve("Soy la promesa 22")
})

laPromesa1.then((res) => {
    console.log(res);
    return laPromesa2;
}).then((res) => {
    console.log(res);
    return laPromesa3;
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})