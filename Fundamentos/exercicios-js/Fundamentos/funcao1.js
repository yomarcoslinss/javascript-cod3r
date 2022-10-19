// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
};

imprimirSoma(2, 3);
imprimirSoma(2); // irá somar 2 + undefined, o resultado será NaN
imprimirSoma(2, 3, 4, 6, 5, 7, 8); //irá somar os 2 primeiros e ignorar o resto
imprimirSoma();

// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma (2, 3))
console.log(soma (2)) // O resultado zera 0 • a=2, b = 0(definido na própria função)
console.log(soma())