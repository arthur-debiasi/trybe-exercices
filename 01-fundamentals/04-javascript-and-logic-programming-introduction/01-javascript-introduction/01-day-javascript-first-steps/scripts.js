// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes,
// a e b, definidas no começo com os valores que serão operados. Faça programas para:
// > Adição (a + b)
// > Subtração (a - b)
// > Multiplicação (a * b)
// > Divisão (a / b)
// > Módulo (a % b)

// const a = 10;
// const b = 5;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// 2. Faça um programa que retorne o maior de dois números.
// Defina no começo do programa duas constantes com os valores que serão comparados.

// const c = 3;
// const d = 5;

// if (c > d) {
//   console.log(c + " is greater then " + d);
// } else {
//   console.log(d + " is greater then " + c);
// }

// 3. Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes com os valores que serão comparados.

// const e = 1;
// const f = 12;
// const g = 11;

// if (e > f && e > g) {
//   console.log("'e' é o maior dos números");
// } else if (f > e && f > g) {
//   console.log("'f' é o maior dos números");
// } else if (g > e && g > f) {
//   console.log("'g' é o maior dos números");
// } else {
//   console.log("o maior número está repetido aí... :D");
// }

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive"
// se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const h = 0.1

// if (h > 0) {
//   console.log("positive");
// } else if (h === 0) {
//   console.log ("zero");
// } else {
//   console.log("negative");
// }

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for 
// inválido o programa deve retornar uma mensagem de erro.

// const angleA = 72;
// const angleB = 18;
// const angleC = 90;

// if (angleA + angleB + angleC === 180 && angleA > 0 && angleB > 0 && angleC > 0 ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const piece = "Bispo"
// const lowerPiece = piece.toLowerCase()

// switch (lowerPiece) {
//   case "peão":
//     console.log("peão");
//     break;

//   case "bispo":
//     console.log("bispo");
//     break;

//   case "cavalo":
//     console.log("cavalo");
//     break;

//   case "rainha":
//     console.log("rainha");
//     break;

//   case "rei":
//     console.log("rei");
//     break;
    
//   case "torre":
//     console.log("torre");
//     break;
    
//   default:
//     console.log("Esta não é uma peça de xadrez...");
//     break;
// }
  
// 8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// const i = 1;
// const j = 5;
// const k = 3;

// const iMod = i % 2;
// const jMod = j % 2;
// const kMod = k % 2;

// if (iMod === 0 || jMod === 0 || kMod === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// const grade = 59;

// if (grade < 0 || grade > 100) {
//   console.log("Erro: a nota é maior que 100 ou menor que 0.");
// } else if (grade >= 90) {
//   console.log("Conceito A.");
// } else if (grade >= 80) {
//   console.log("Conceito B.");
// } else if (grade >= 70) {
//   console.log("Conceito C.");
// } else if (grade >=60) {
//   console.log("Conceito D.");
// } else if (grade >= 50) {
//   console.log("Conceito E.");
// } else {
//   console.log("Conceito F.");
// }

// 9. Escreva um programa que defina três números em constantes 
// e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// const a = 2;
// const b = 6;
// const c = 32;

// const aMod = a % 2;
// const bMod = b % 2;
// const cMod = c % 2;

// if (aMod != 0 || bMod != 0 || cMod != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 10.Escreva um programa que se inicie com dois valores em duas constantes 
// diferentes: o custo de um produto e seu valor de venda. A partir dos valores, 
// calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa 
// terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.

// const cost = 13;
// const price = 25;


// if (cost < 0 || price < 0) {
//   console.log("Erro: o custo ou o preço são negativos.");
// } else {
//   let soldUnits = 1000;
//   let profit = (price - (cost *1.2)) * soldUnits;
//   console.log("O lucro da venda dos produtos foi de: " + profit + ".");
// }

// 11.Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
// use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const grossWage = 3000;
let inssWage;
if (grossWage < 1212) {
  console.log("Erro: Menor que o salário mínimo atual")
} else if ( grossWage > 5189.82) {
  inssWage = grossWage - 570.88;
} else if (grossWage >= 2594.93) {
  inssWage = (1 - 0.11) * grossWage;
} else if (grossWage >= 1556.95) {
  inssWage = (1 - 0.09) * grossWage;
} else {
  inssWage = (1 - 0.08) * grossWage;
}

console.log("O salário-base (com dedução do INSS) é de: R$" + inssWage);

let liquidWage;

if (inssWage > 4664.68) {
  liquidWage = inssWage - ((inssWage* 0.275)-869.36)
} else if (inssWage >= 3751.06) {
  liquidWage = inssWage - ((inssWage* 0.225)-636.13)
} else if (inssWage >= 2826.66) {
  liquidWage = inssWage - ((inssWage* 0.15)-354.80)
} else if (inssWage >= 1903.99) {
  liquidWage = inssWage - ((inssWage* 0.075)-142.80)
} else {
  liquidWage = inssWage - ((inssWage* 0.275)-869.36)
} 

console.log("O salário a ser recebido é de: R$" + liquidWage);