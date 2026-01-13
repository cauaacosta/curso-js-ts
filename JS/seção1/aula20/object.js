// Aula sobre objetos

// Criando um objeto
const pessoa = {
    idade: 22,
    nome: 'Cauã',
    sobrenome: 'Alves'
};


// Função com objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa('Maria', 'Eduarda', 19);
const pessoa2 = criaPessoa('João', 'Pedro', 24);
const pessoa3 = criaPessoa('Andrez', 'Barbosa', 36);
console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);

//Função dentro de objeto
const pessoa4 = {
    nome: 'Cauã',
    sobrenome: 'Alves',
    idade: 19,

    //função
    fala() {
        console.log(`${pessoa4.nome} ${pessoa4.sobrenome} está falando Oi.`);
    }
};

pessoa4.fala();