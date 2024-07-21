// for (const i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, 1000);
// }
// setTimeout(function () {
//     console.log("valor final de 'i' usando 'let': ", i);
// }, 6000)


// console.log(x);
// var x = 1;
// console.log(x);

// const x = 1;
// console.log(x);

// function antesDeEs6(nombre, identidadSecreta) {
//     console.log("Este es: " + nombre + "Mejor conocido como: " + identidadSecreta);
// }

// function templateString(nombre, identidadSecreta) {
//     console.log(`Este es: ${nombre} mejor conocido como: ${identidadSecreta}`);
// }

// antesDeEs6("John Doe", "El Grande");

// function crearSaludo() {
//     const saludo = "Hola";
//     const nombre = "Brandon";

//     console.log(`${saludo}, ${nombre}!`);
// }

// crearSaludo();

// function imprimirMensaje() {
//     console.log("Mensaje:\a aquí hubo un salto de linea.");
// }

// imprimirMensaje();

// const persona = {
//     nombre: "Brandon",
//     apellido: "Pinzón",
//     edad: 28,
//     ciudad: "Bogotá",
//     email: "bpinzon@mail.com"
// }

// function mostrarDatosUsuario(persona) {
//     const { nombre, apellido, edad } = persona;
//     console.log("El nombre y apellido del usuario son: ", nombre, apellido, "y su edad es:", edad);
// }

// mostrarDatosUsuario(persona);

let a = null;
let b = "Texto1";
let c = "Texto2";
let d = undefined;

let resultado = c ?? d;

console.log(resultado);