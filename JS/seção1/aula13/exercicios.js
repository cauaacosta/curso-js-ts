let varA = 'A'; // Apontar para B
let varB = 'B'; // Apontar para C
let varC = 'C'; // Apontar para A

//Modo 1
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

//Modo 2
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

