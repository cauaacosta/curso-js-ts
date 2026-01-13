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