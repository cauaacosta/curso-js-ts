//Exercicios sobre Let e Const

/*
Luiz tem 30 anos, pesa 84kg
tem 1.80 de altura e seu IMC é 25.925925925925924
*/

const nome = 'Luiz';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNasc;

imc = peso / (altura * altura);
console.log(`O imc de ${nome} é de ${imc}`);

anoNasc = (2025 - idade);
console.log("o ano de nascimento de", nome, "é", anoNasc);