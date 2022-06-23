// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let n = 10;
let fatorial = 1;

for (let i = 1; i <= n; i++) {
    fatorial = fatorial * i;
}

console.log(fatorial);
