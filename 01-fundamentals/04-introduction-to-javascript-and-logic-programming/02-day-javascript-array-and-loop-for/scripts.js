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

// let sum = 0;
// let index = 0;
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
// }
// let average = sum / numbers.length;
// console.log("A média aritmética dos valores contidos em numbers é", average, ".");

// if (average > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

// 5. 🚀 Utilizando for, descubra qual o maior valor contido 
// no array e imprima-o;

// let greaterNumber = numbers[0]
// for (let index = 1; index < numbers.length; index++) {
//     if (numbers[index] > greaterNumber) {
//         greaterNumber = numbers[index];
//     }
// }
// console.log(greaterNumber);

// 6. Descubra quantos valores ímpares existem no array 
// e imprima o resultado. Caso não exista nenhum, imprima 
// a mensagem: "nenhum valor ímpar encontrado";

// let count = 0;
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index]%2 != 0) {
//         count += 1;
//     }    
// }

// if (count !== 0) {
//     console.log(count);
// } else {
//     console.log("nenhum valor ímpar encontrado");
// }

// 7. Utilizando for, descubra qual o menor valor contido 
// no array e imprima-o;

// let minor = numbers[0];

// for (let index = 1; index < numbers.length; index++) {
//     if (numbers[index] < minor) {
//         minor = numbers[index]
//     }   
// }
// console.log(minor);

// 8. Utilizando for, crie um array que vá de 1 até 25 e 
// imprima o resultado;

// let array = [];
// let last = 25;

// for (let index = 1; index <= last; index++) {
//     array.push(index);   
// }

// console.log(array);

// 9. Utilizando o array criado no exercício anterior imprima 
// o resultado da divisão de cada um dos elementos por 2.

// let array = [];
// let last = 25;

// for (let index = 1; index <= last; index++) {
//     array.push(index);   
// }

// console.log(array);

// for (let count = 0; count < array.length; count++) {
//     console.log (array[count]/2)
    
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Bônus 1. Ordene o array numbers em ordem crescente e imprima seus valores;

// for (let i = 1; i < numbers.length; i++) {
    
//     for (let j = 0; j < i ; j++) {
       
//         if (numbers[i] < numbers[j]) {
//            let lower = numbers[i];
//            numbers[i] = numbers[j];
//            numbers[j] = lower;
       
//         }
        
//     }
    
// }
// console.log(numbers);

// Bônus 2.  Ordene o array numbers em ordem decrescente e imprima seus valores;

// for (let i = 1; i < numbers.length; i++) {
    
//     for (let j = 0; j < i ; j++) {
       
//         if (numbers[i] > numbers[j]) {
//            let higher = numbers[i];
//            numbers[i] = numbers[j];
//            numbers[j] = higher;
       
//         }
        
//     }
    
// }
// console.log(numbers);

// Bônus 3. Agora crie um novo array a partir do array numbers, sem perdê-lo.
// Cada valor do novo array deverá ser igual ao valor correspondente no array 
// numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo 
// array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 
// (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a
// multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante.
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça 
// isso utilizando o for e o método push.

let numbers2 = [];

for (let i = 1; i <= numbers.length ; i += 1) {   
   if (i != numbers.length) {
    numbers2.push(numbers[i] * numbers[i - 1]);
   } else {
       numbers2.push(numbers[i - 1] * 2);
   }
}
console.log(numbers2);

// Qual o motivo de alguém querer fazer desse jeito? kkkkk
