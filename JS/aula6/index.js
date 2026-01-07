//aula sobre variáres com "Let" 
//não é possível iniciar o nome de uma variável com número
//não pode conter espaços ou traços
//não pode ter variável com palavras reservadas, exemplo: 'let', pois ja é um comando do JS
//Case-sensitive: faz diferença entre letra maiscula e minuscula no nome
//não utilize VAR, utilize LET
//é possível modificar o valor

let nome = 'João'; //string

console.log(nome, "nasceu em 2007");
console.log("Em 2020", nome, "passou por uma pandemía");

//Podemos declarar a variável direto ou depois
/*
exemplo: let nome = 'João';
ou
let nome;
nome = 'João';
*/

let ano;
ano = '2020';

console.log("Em", ano, nome, "passou por uma pandemía");