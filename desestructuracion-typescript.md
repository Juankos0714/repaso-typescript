# Desestructuración de Objetos y Arreglos en TypeScript

La **desestructuración** en TypeScript permite extraer valores de
objetos o arreglos y asignarlos a variables de manera más sencilla y
legible.

------------------------------------------------------------------------

## 1. Desestructuración de Objetos con Renombrado de Variables

``` typescript
interface Usuario {
    nombre: string;
    edad: number;
    ciudad: string;
}

const usuario: Usuario = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Bogotá"
};

// Desestructuración con cambio de nombre
const { nombre: nombreUsuario, edad: edadUsuario } = usuario;

console.log(`Nombre: ${nombreUsuario}, Edad: ${edadUsuario}`);
```

------------------------------------------------------------------------

## 2. Desestructuración de Arreglos con Elementos Saltados

``` typescript
const numeros: number[] = [10, 20, 30, 40, 50];

// Saltar el segundo y tercer elemento
const [primero, , , cuarto] = numeros;

console.log(`Primero: ${primero}, Cuarto: ${cuarto}`);
```

------------------------------------------------------------------------

## 3. Desestructuración Anidada (Objetos dentro de Objetos)

``` typescript
interface Producto {
    nombre: string;
    precio: number;
    proveedor: {
        nombre: string;
        pais: string;
    };
}

const producto: Producto = {
    nombre: "Laptop",
    precio: 3500,
    proveedor: {
        nombre: "TechCorp",
        pais: "Colombia"
    }
};

// Desestructuración anidada
const { proveedor: { nombre: nombreProveedor, pais } } = producto;

console.log(`Proveedor: ${nombreProveedor}, País: ${pais}`);
```

------------------------------------------------------------------------

### Beneficios de la Desestructuración

-   Código más limpio y legible.
-   Evita múltiples accesos a propiedades.
-   Permite extraer solo lo necesario.
