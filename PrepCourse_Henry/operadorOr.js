function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
}

//operadorOr('Henrry');
//operadorOr('Henry');


function negacion(permiso) {
    if (permiso !== true) console.log('Tiene Permiso');
}

//negacion(false);


function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionCompleja(10);
condicionCompleja(7);
condicionCompleja(3);
condicionCompleja(8);