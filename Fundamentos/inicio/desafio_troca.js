let a = 7;
let b = 94;
//depois da troca... a = 94 e b = 7
let A = a;
console.log(`A variável "a" possuí o valor ${a}`);
console.log(`A variável "b" possuí o valor ${b}`);
console.log("Valores invertidos!!!");
a = b;
b = A;
console.log(`A variável "a" possuí o valor ${a}`);
console.log(`A variável "b" possuí o valor ${b}`);

// Método aprendido durante a aula 30

console.log("Outra maneira de execução");
a = 7;
b = 94;
console.log(`A variável "a" possuí o valor ${a}`);
console.log(`A variável "b" possuí o valor ${b}`);
console.log("Valores invertidos!!!");
[a, b] = [b, a];
console.log(`A variável "a" possuí o valor ${a}`);
console.log(`A variável "b" possuí o valor ${b}`);