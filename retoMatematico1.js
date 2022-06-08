
function alturaTriangulo(ladoA, ladoB, ladoBase) {

    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        // Triángulo isósceles
        const altura = Math.sqrt((ladoA * ladoA) - ((base * base) / 4));
        return altura;
    }

    
}

function calcularAlturaTrianguloIsosceles() {
    const InputLado1 = document.getElementById('InputLado1');
    const InputLado2 = document.getElementById('InputLado2');
    const InputLado3 = document.getElementById('InputLado3');

    const lado1 = InputLado1.value;
    const lado2 = InputLado2.value;
    const base = InputLado3.value;

    const altura = alturaTriangulo(lado1, lado2, base);
    alert(altura);
}

