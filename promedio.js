/*const lista1 = [
    100,
    200,
    300,
    500
];*/

function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }*/

    // Este método va a permitir ir sumando cada uno de los elementos de nuestra lista
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { // función anónima 
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}