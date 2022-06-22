let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os 
// valores nele contidos com a função console.log();

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);    
// }

// 2. Para o segundo exercício, some todos os valores contidos no array
// //  e imprima o resultado;

// let sum = 0
// for (let index = 0; index < numbers.length; index++) {
//     sum = sum + numbers[index];  
// }
// console.log(sum);

// 3. Para o terceiro exercício, calcule e imprima a média 
// aritmética dos valores contidos no array;

// let sum = 0;
// let index = 0;
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
// }
// let average = sum / numbers.length;
// console.log("A média aritmética dos valores contidos em numbers é", average, ".");

// 4. Com o mesmo código do exercício anterior, caso o valor final 
// seja maior que 20, imprima a mensagem: "valor maior que 20". 
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let sum = 0;
let index = 0;
for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
}
let average = sum / numbers.length;
console.log("A média aritmética dos valores contidos em numbers é", average, ".");

if (average > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
