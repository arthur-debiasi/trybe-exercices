// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// 1. Altere as variáveis para respeitarem o escopo em que foram declaradas.

// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   Modifique a estrutura da função para que ela seja uma arrow function;

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   Modifique as concatenações para template literals.

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


// 2. Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

function bubbleSort(array) {
    for (let i = 1; i < array.length; i += 1) {
        // aqui testo se cada array[i] é maior que os próximos array[j]
      for (let j = 0; j < i; j += 1) {
        if (array[i] > array[j]) {
          let lower = array[i];
          array[i] = array[j];
          array[j] = lower;
        }
      }
    }
    return array;
}
bubbleSort(oddsAndEvens);

console.log(oddsAndEvens); // será necessário alterar essa linha 😉


