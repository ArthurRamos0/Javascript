// REDUCE : Metodo que executa(para cada elemento do array) a funçao que foi
//          passada como paramentro, resultando em um elemento unico.

//Exemplo 1:
//1. Se eu quisesse calcular a soma dos elementos de um array?

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento) => {
  return elemento + acumulador;
}, 0);

console.log(soma);

//2. Se fosse a media?
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(media);

//3. Se eu quisesse somar apenas os pares?
const somaDosPares = numeros.reduce((acumulador, elemento) => {
  // Se o numero for par
  if (elemento % 2 === 0) {
    return elemento + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaDosPares);
console.clear()
//4. Calcular o total a pagar com  base no carrinho abaixo.

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalAPagar = carrinho.reduce((acumulador, item)=> {
  return item.preco * item.quantidade + acumulador

},0)

console.log(totalAPagar)