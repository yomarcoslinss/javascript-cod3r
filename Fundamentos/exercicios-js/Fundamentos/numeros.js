const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //Exibe se o valor da variável é um número do tipo inteiro (true/false)
console.log(Number.isInteger(peso2)); //Exibe se o valor da variável é um número do tipo inteiro (true/false)

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2)); //Altera a posição do ponto flutuante para adicionar/remover casas decimais
console.log(media.toString()); //Exibe a média no formato de String
console.log(media.toString(2)); //Exibe a média no formato de String (no valor binário)
console.log(typeof media); // Exibe o tipo da variável media
