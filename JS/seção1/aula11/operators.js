//Operadores aritméticos, atribuição e incrementos

/**
 * Aritméticos 
 * + Adição e Concatenação(unir)
 * - / * Padrão
 *  ** Potenciação
 * % Resto de divisão
 */

const num1 = 10;
const num2 = 5;
console.log(num1 % num2);

/**
 * Incrementação
 * ++ adiciona 1 ao valor da var
 * -- subtrai 1 do valor
 */

let contador = 1;
contador++; // 2
contador++; // 3
console.log(contador);

let contador1 = 1;
contador1--; // 2
contador1--; // 3
console.log(contador1);


let contaPasso = 0;
contaPasso += 2; //adiciona 2 ao valor da variável
console.log(contaPasso);


//NaN - Not a Number
const numbe1 = 10;
const numbe2 = Number('5'); // Converte a String em um Number
console.log(numbe1 + numbe2);

const number1 = 10;
const number2 = parseInt('5'); // Converte a String em um Number (Somente inteiros)
console.log(number1 + number2);

const numero1 = 10;
const numero2 = parseFloat('5.2'); // Converte a String em um Number (Decimais)
console.log(numero1 + numero2);