// // Crea una función que reciba dos números como argumentos y devuelva su suma.
// // Llama a esta función `sumar`.
// // Invoca la función con los números 5 y 7, y almacena el resultado en una variable llamada `resultado`.

// function sumar(a, b) {
//     // Implementa la función para que devuelva la suma de a y b.

//   }

//   const resultado = null; // Invoca la función aquí con los números 5 y 7.

// Crea una función llamada `esPar` que reciba un número como argumento y devuelva `true` si el número es par, y `false` en caso contrario.
// Invoca la función con el número 4 y almacena el resultado en una variable llamada `esCuatroPar`.

// function esPar(numero) {
//     // Implementa la función para que devuelva true si el número es par, y false si es impar.
//     if (numero % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const esCuatroPar = null; // Invoca la función aquí con el número 4.




// Crea una función llamada `saludar` que reciba un nombre como argumento y devuelva 
//un saludo en forma de string. Por ejemplo, si recibe "Ana", debe devolver "Hola, Ana!".
// Invoca la función con el nombre "Juan" y almacena el resultado en una variable 
//llamada `saludo`.

// function saludar(nombre) {
//     return "Hola, " + nombre + "!";
// }
// const saludo = saludar("Juan");

// console.log(saludo);





// Crea una función llamada `invertirPalabra` que reciba una cadena de texto como 
//argumento y devuelva la cadena invertida. Por ejemplo, si recibe "hola", debe 
//devolver "aloh".
// Invoca la función con la palabra "javascript" y almacena el resultado en una 
//variable llamada `palabraInvertida`.

// function invertirPalabra(palabra) {
//     return palabra.split("").reverse().join("");
// }

// const palabraInvertida = invertirPalabra("javascript");
// console.log(palabraInvertida);




// Crea una función llamada `contarVocales` que reciba una cadena de texto como 
//argumento y devuelva un objeto que contenga el número de ocurrencias de cada 
//vocal (a, e, i, o, u) en la cadena. Por ejemplo, si recibe "javascript", debe 
//devolver { a: 2, e: 0, i: 1, o: 0, u: 0 }.
// Invoca la función con la palabra "murcielago" y almacena el resultado en una 
//variable llamada `ocurrenciasVocales`.
// function contarVocales(texto) {
//     var vocales = {
//         a: 0,
//         e: 0,
//         i: 0,
//         o: 0,
//         u: 0
//     };
//     for (var i = 0; i < texto.length; i++) {
//         if (texto[i] === "a") {
//             vocales.a++;
//         } else if (texto[i] === "e") {
//             vocales.e++;
//         } else if (texto[i] === "i") {
//             vocales.i++;
//         } else if (texto[i] === "o") {
//             vocales.o++;
//         } else if (texto[i] === "u") {
//             vocales.u++;
//         }
//     }
//     return vocales;
// }

// const ocurrenciasVocales = contarVocales("murcielago");
// console.log(ocurrenciasVocales);


//--------------
// // Crea una función que tome dos parámetros, los sume y devuelva el resultado.
// function sumar(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new Error('Ambos parametros deben ser números');
//     }
//     return a + b;
// }
// const suma = sumar(3, 5);

// console.log(suma);

//------------------------------------------------------------
// Crea una función que tome un array de números como parámetro y devuelva la 
//suma de todos los elementos del array.

// var array = [1, 2, 3, 4]
// function sumarArray(array) {
//     let suma = 0;
//     for (let i = 0; i < array.length; i++) {
//         suma += array[i];
//     }
//     return suma;
// }

// const suma = sumarArray(array);
// console.log(suma)

function sumarArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('El parámetro debe ser un array');
    }

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

const noEsUnArray = 5; // No es un array

try {
    const suma = sumarArray(noEsUnArray);
    console.log(suma);
} catch (error) {
    console.error(error.message); // Debería imprimir "El parámetro debe ser un array"
}