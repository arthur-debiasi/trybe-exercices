console.log(
  `As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.
  `
);

const array = [
  'bash',
  'git',
  'HTML',
  'CSS',
  'DOM',
  'Javascript',
  'JEST',
  'HOF',
];

const funcao = (parametro) => {
  for (const item of parametro) {
    console.log(`Eu adorei aprender ${item} com o Giao!`);
  }
};
funcao(array);

const funcaoCallBack = (xablau) => {
  return `Eu adorei aprender ${xablau} com o Mano Gian!`;
};

console.log(`=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=`);

const funcaoHOF = (parametro, funcaoCallBack) => {
  for (const conteudos of parametro) {
    const message = funcaoCallBack(conteudos);
    console.log(message);
  }
};

funcaoHOF(array, funcaoCallBack);
