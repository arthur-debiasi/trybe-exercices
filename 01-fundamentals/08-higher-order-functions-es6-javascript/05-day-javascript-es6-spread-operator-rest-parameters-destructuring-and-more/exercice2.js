// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

// escreva sum abaixo

const sum = (...numeros) => numeros.reduce((acum, current) => acum + current, 0);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(...array));