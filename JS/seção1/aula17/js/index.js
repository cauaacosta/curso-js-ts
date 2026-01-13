const num = Number(prompt('Digite um valor: '));
const numTitulo = document.getElementById('num-titulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada:  ${num ** 0.5}.<p/>`;
texto.innerHTML += `<p>${num} é inteiro:  ${Number.isInteger(num)}.<p/>`;
texto.innerHTML += `<p>É NaN:  ${Number.isNaN(num)}.<p/>`;
texto.innerHTML += `<p>Arredondado para cima:  ${Math.floor(num)}.<p/>`;
texto.innerHTML += `<p>Arredondado para baixo:  ${Math.ceil(num)}.<p/>`;
texto.innerHTML += `<p>Com duas casas decimais:  ${num.toFixed(2)}.<p/>`;