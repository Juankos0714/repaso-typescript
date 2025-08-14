"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function miFuncion(id, activo = false, nombre = "Invitado") {
    const estado = activo ? "activo" : "inactivo";
    console.log(`ID: ${id}, Nombre: ${nombre}, Estado: ${estado}`);
}
//llamadas
miFuncion(123, true, "Juan");
miFuncion(456, false);
miFuncion(789);
//# sourceMappingURL=first.js.map