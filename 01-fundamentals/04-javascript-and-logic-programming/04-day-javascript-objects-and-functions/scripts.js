let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, 
// incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

// function mensagem(nome) {
//   return console.log("Bem vinda, " + nome + ".");
// }

// mensagem(info.personagem)

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente'
//  e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

//  {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// }

info.recorrente ='Sim';
console.log(info);