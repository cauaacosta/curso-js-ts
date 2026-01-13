// Aula sobre matemática no JS

let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda o valor para baixo
let num3 = Math.ceil(num1); // Arredonda o valor para cima
let num4 = Math.round(num1); // Arredonda para o valor mais próximo

console.log(Math.max(1,2,5,76,3,5,74,2,426,267)); // Mostra o maior valor
console.log(Math.min(1,2,5,76,3,5,74,2,426,267)); // Mostra o menor valor
console.log(Math.random()); // Gera um valor aleatório entre 0 e 1

const ale = (Math.random() * (10 - 5) + 5); // Mostra um valor aleatório entre os valores determinados
console.log(ale); // Mostrando o normal
console.log(Math.round(ale)); // Mostrando o valor arredondado

console.log(Math.PI); // Mostra o valor de PI
console.log(Math.pow(2, 10)); // Eleva o primeiro valor ao segundo
console.log(num1 ** 0.5); // Mostra a Raiz Quadrada do valor