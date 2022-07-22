/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

// O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.
console.log(`-=-=-=-=-= 1 =-=-=-=-=-
`);
const nameEmail = (fullName) => {
    const object = {};
    object.name = fullName;
    object.eMail = `${fullName.replace(/ /g, "_")}@trybe.com`;
    return object;
}

const newEmployees = (fn) => {
    const employees = {
      id1: fn('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: fn('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: fn('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(nameEmail));


//   2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
console.log(`-=-=-=-=-= 2 =-=-=-=-=-
`);

const criteria = (betNumber, prizeNumber) => betNumber === prizeNumber ? 'Parabéns, você ganhou!':'Tente Novamente';

const raffle = (betNumber, checlFn) => {
    const prizeNumber = Math.floor(Math.random() * 5) + 1;
    console.log(betNumber, prizeNumber );
    return checlFn(betNumber, prizeNumber);   
}

console.log(raffle(1, criteria));

/* 3 - Crie uma HOF que receberá três parâmetros:
O primeiro será um array de respostas corretas (Gabarito);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for "N.A");
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays: */ 
console.log(`-=-=-=-=-= 3 =-=-=-=-=-
`);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightAnswers, studentAnswers) => {
        if (studentAnswers === 'N.A') {
            return 0;
        }
        if (rightAnswers === studentAnswers) {
            return 1;
        }
            return -0.5;
};

const totalPoints = (rightAnswers, studentAnswers, compareFn) =>{ 
    let sum = 0;
    for(let i = 0; i < studentAnswers.length; i += 1) {
        sum += compareFn(rightAnswers[i], studentAnswers[i]);
    }
    return `Resultado final: ${sum}`;
}
console.log(totalPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));
