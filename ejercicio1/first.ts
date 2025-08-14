function miFuncion(
  id: number, 
  activo: boolean = false,
  nombre: string = "Invitado"
): void {
  const estado = activo ? "activo" : "inactivo";
  console.log(`ID: ${id}, Nombre: ${nombre}, Estado: ${estado}`);
}

//llamadas
miFuncion(123, true, "Juan");

miFuncion(456, false);

miFuncion(789);