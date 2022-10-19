// Armazenando uma funcao em uma variável
// Função anonima
const imprimirSoma = function (a, b) {
    console.log (a + b)
};

imprimirSoma(9, 19)

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
};

console.log (soma(10, 9));

// retorno implícito
const subtracao = (a, b) => a-b
console.log (subtracao(2, 3));

const imprimir2 = a=> console.log(a)
imprimir2("Legal!!!")