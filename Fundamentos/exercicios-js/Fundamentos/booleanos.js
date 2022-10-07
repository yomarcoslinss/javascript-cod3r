let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("Os verdadeiros...")
console.log(!!3);
console.log(!!-1);
console.log(!!" "); //com espaço
console.log(!!"TEXTO");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=true));
console.log(!!(isAtivo=30));

console.log("Os falsos...");
console.log(!!0);
console.log(!!NaN);
console.log(!!""); //vazia
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

let nome = "Marcos"
console.log(nome || "Desconhecido") //Irá exibir o nome, de contrário (Caso não seja informado) irá exibir Desconhecido