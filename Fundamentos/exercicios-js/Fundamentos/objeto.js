// Par de chaves {} representa um objeto, da mesma forma que o par de colchetes [] representa uma array.
// Um objeto nada mais é do que uma coleção de chaves e valores
const prod1 = {};
prod1.nome = "Celular Ultra Mega";
/* Nesse caso o meu objeto é prod1 e dentro dele eu tenho a chave/identificador "nome"
com o valor "Celular Ultra Mega". o restante das anotações está no canal Objetos no meu Discord :) */
prod1.preco = 4998.90;
prod1.marca = "Xiaomi";
prod1["Desconto Legal"] = 0.40; // não recomendado atributos com espaços
console.log(prod1);

const prod2 = {
    nome: "Camisa polo",
    preco: 79.90,
    tamanho: "G"
};

console.log(prod2);