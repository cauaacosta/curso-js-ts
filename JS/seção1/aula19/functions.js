// Aula sobre funções
//                parametro
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
    return 123456
}

saudacao('Cauã'); // Parametro recebe esse valor e adiciona a função
saudacao('Maria'); // Parametro recebe esse valor e adiciona a função

const variavel = saudacao('Luiz');
console.log(variavel); // Mostra o que está no Return da função, não o valor do parametro




function soma(x, y) {
    const result = x + y;
    return result;
    console.log('olá mundo') // Nada que está após o Return aparece
}

console.log(soma(2, 4));
// console.log(result); // Não acessa a variavel dentro da função, está protegida lá dentro




// Função dentro de variavel
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));



// Arrow Function
const raizarrow = (num) => num ** 0.5;
console.log(raizarrow(16))