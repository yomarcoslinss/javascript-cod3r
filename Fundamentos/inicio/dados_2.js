let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto)
console.log(precoComDesconto);

let nome = "Caderno"; // String (Texto) -> Sequeência de símbolos.
let categoria = "Papelaria";
console.log("Produto: " + nome +
 ", Categoria: " + categoria
 + ", Preço R$" + preco
 + ", Desconto " + desconto + "%"
 + ", Valor Final: R$" + precoComDesconto);