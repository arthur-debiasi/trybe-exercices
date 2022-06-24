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

let word     = 'arthur debiasi';
let reverseW = '';

for (let i = word.length - 1; i >= 0 ; i -= 1) {
    reverseW += word[i]    
}

console.log(reverseW);
