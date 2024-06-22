// var deportes = {
//     conBalon: ["Futbol", "Basquetbol", "Rugby"],
//     sinBalon: ["Boxeo", "Surf", "Trekking"],
// };

// var persona = { nombre: "Brandon", edad: "28", estudios: { esProgramador: true } };

// // console.log(persona.edad);
// persona.nombre = "Smith";
// // console.log(persona.nombre);
// persona.edad = 60;
// // console.log(persona.edad);

// var autos = {};
// autos.marcas = ["Ford", "Toyota", "Mazda", "Chevrolet"]
// delete autos.marcas;
// // console.log(autos);

// var misFunciones = {
//     saludar: function () {
//         console.log("Hola");
//     },
// };

// misFunciones.saludar();

// var atuendos = {
//     manos: ['Guantes', 'Anillos'],
//     pies: ['Zapatos', 'Medias']
// }
// // console.log(atuendos.manos);

// atuendos["piernas"] = ["Bermudas", "Pantalones"];
// // console.log(atuendos);

// var comidas = {};
// var diferenciaDeNotaciones = function (propUno, propDos) {
//     comidas[propUno] = ['Frutas', 'Verduras'];
//     comidas[propDos] = ['Pizza', 'Hamburguesas'];
// };
// diferenciaDeNotaciones('saludable', 'noSaludable');
// console.log(comidas);

// var libro = { autor: 'Borges', genero: 'Policial', año: '1990' }
// var tienePropiedad = libro.hasOwnProperty('autor');
// // console.log(tienePropiedad);

// var todasLasPropiedades = Object.values(libro);
// console.log(todasLasPropiedades);

// var mundo = { continentes: 7, paises: 195, oceanos: 5 };
// for (var prop in mundo) {
//     console.log("Esta es la propiedad: " + prop);
//     console.log("Este es el valor: " + mundo[prop]);
// };

var mascota = {
    animal: "Perro",
    raza: "Criollo",
    amistoso: true,
    dueño: "Suegro",
    info: function () {
        console.log('El perro de la casa es un ' + this.raza);
    },
};
mascota.info();