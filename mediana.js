
function calcularMediaAritmetica(lista) {
    // Este método va a permitir ir sumando cada uno de los elementos de nuestra lista
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { // función anónima 
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2); // para quedarnos el valor entero, porque no podemos coger la posición de un array con 2.5

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}