// Aula de introdução a Arrays
// Serve para fazer uma lista com vários elementos dentro

// Cada elemento é um indice
//                0       1        2
const alunos = ['Cauã', 'João', 'Maria'];
console.log(alunos[2]);

alunos[0] = 'Eduardo'; // Edita um elemento
alunos[3] = 'Luiza'; // Adiciona um novo elemento após o ultimo elemento do array

alunos.push('Otavio'); // Adiciona um novo elemento após o ultimo elemento do array
alunos.unshift('Manu'); // Adiciona um novo elemento no inicio do array

alunos.pop(); // Deleta o ultimo elemento
alunos.shift(); // Deleta o primeiro elemento
const remove = alunos.pop(); // Mostrar o elemento removido
console.log(remove)

delete alunos[1]; // Deleta o elemento daquele indice sem eliminar o indice

console.log(alunos.slice(0, 3)); // Mostra os elementos dentro deste intervalo de indices (fatia)

console.log(alunos);




/**
 Const com valores mutáveis
const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.

 */