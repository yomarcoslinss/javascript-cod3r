let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor (não aponta para nenhum local de memoria)
console.log(valor);
// console.log(valor.toString()); // ERRO !!!!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);
produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco  // Para retirar um atributo de um objeto
console.log(produto);

produto.preco = null; // Este produto está sem preço (recomendado)
console.log(!!produto.preco);
console.log(produto);