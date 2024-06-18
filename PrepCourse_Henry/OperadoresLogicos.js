//Para todas las operaciones unidad con "&&" todas deben ser verdaderas para que sea true
function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false);
}

mayorYMenorYPar(7);
mayorYMenorYPar(6);