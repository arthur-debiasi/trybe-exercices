// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let n = 10;
// let fatorial = 1;

// for (let i = 1; i <= n; i++) {
//     fatorial = fatorial * i;
// }

// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana"
//  seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para
//  verificar se seu algoritmo está funcionando corretamente.

// let word     = 'arthur debiasi';
// let reverseW = '';

// for (let i = word.length - 1; i >= 0 ; i -= 1) {
//     reverseW += word[i]
// }

// console.log(reverseW);

// 3. Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// Adaptanto a Bubble Sort para este caso:

// for (let i = 1; i < array.length; i += 1) {
//     for (let j = 0; j < i; j += 1) {
//       if (array[i].length < array[j].length) {
//         let position = array[i];
//         array[i] = array[j];
//         array[j] = position;
//       }
//     }
//   }
//   console.log("A menor palavra é", array[0] + ".");
//   console.log("A maior palavra é",array[array.length - 1] + ".");

// Fazendo um programa pra cada caso:

let bigger = array[0];
let smaller = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i].length > bigger.length) {
    bigger = array[i];
  }
}
console.log("A maior palavra é", bigger + ".");
console.log("");
for (let i = 1; i < array.length; i++) {
  if (array[i].length < smaller.length) {
    smaller = array[i];
  }
}
console.log("A menor palavra é", smaller + ".");
