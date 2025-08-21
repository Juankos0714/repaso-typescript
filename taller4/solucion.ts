/**
 * Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ?

*/

async function cuadradoPromesa(n:any) {
    return n*n;
}
console.log(cuadradoPromesa(2.9));

/**Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
obtiene? ¿una promesa?, ¿ un entero ?
 * 
*/

async function resultado(){
    return new Promise((resolve,reject)=>{
        function habilitado(){
            resolve(8)
        }setTimeout(habilitado,6000);

    }
    
);
}
console.log(resultado);

/**
 *  Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
“resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
promesa?, ¿ un entero ?
*/


let  cuadradoasincrono = async () => {
    let valorPromesa = await resultado()
    console.log(cuadradoPromesa(valorPromesa));
}

 cuadradoasincrono();

 /**
  * a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
dentro de la función ?
R/ el async 
b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?R/ el await 
c) ¿Cuál es la condición para poder usar la cláusula await ?
R/ que la funcion sea asincrona
________________________________________________________________________*/

/**POO
 * 
 *  Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
y una privada, ambas deben ser pasadas al constructor.
*/

class Coche{
    static arrancar(){
        console.log("el coche arranca");
        
    }
    frenar(){
        console.log("El coche frena");
        
    }
    public peso:number;
    private nombre:string;

    constructor(peso:number,nombre:string){
        this.peso=peso;
        this.nombre=nombre;

    }
}
let instanciaCoche= new Coche(235,"BMW");
/**
 * Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
dentro de la clase.
*/
class Robot{
    Prender(){
        console.log("Se prendió");
        
    }
    Apagar(){
        console.log("Se apagó");
        
    }
    static Disparar(){
        console.log("dispara");
        
    }
    static Proteger(){
        console.log("protege");
        
    }
    public peso:number=12;
    public altura:number;
    private nombre:string;
    private marca:string="Tesla";
    constructor(nombre:string,altura:number){
        this.nombre = nombre;
        this.altura = altura;
    }
    

}
let instanciaRobot = new Robot("Robertob",1.80);

/**
 * Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, todas deben ser pasadas al constructor.
*/
class PC{
    Prender(){
        console.log("se predndió");
        
    }
    Apagar(){
        console.log("Se apagó");
        
    }
    static Ejecutar(){
        console.log("ejecuta");
        
    }
    static Abrir(){
        console.log("abrió");
        
    }
    public nombre:string;
    public marca:string;
    private ram:number;
    private rom:number;
    constructor(nombre:string,marca:string,ram:number,rom:number){
        this.nombre=nombre;
        this.marca=marca;
        this.ram=ram;
        this.rom=rom;
    }
}