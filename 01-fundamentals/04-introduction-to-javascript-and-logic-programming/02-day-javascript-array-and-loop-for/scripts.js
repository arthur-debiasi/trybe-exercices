let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os 
// valores nele contidos com a função console.log();

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);    
// }

// 2. Para o segundo exercício, some todos os valores contidos no array
//  e imprima o resultado;
let sum = 0
for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];  
}
console.log(sum);