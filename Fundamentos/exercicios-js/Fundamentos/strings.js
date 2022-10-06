const escola = "Cod3R"

console.log(escola.charAt(4)); //Exibe o caractere de uma string que eu selecionar 
console.log(escola.charAt(0));
console.log(escola.charCodeAt(3)); //Exibe o caractere de uma string que eu selecionar (Formato unicode);
console.log(escola.indexOf("R")); //Exibe em qual índice o caractere está
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log ("Escola ".concat(escola).concat("!"))
let teste = "Teste teste"
console.log(teste.replace("teste", "finalizado!"));

console.log("Ana, Maria, Pedro.".split(",")); // quebra a string e cria uma array