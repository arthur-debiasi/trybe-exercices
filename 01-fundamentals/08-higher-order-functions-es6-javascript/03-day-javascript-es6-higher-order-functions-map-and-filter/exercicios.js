const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
console.log('-=-=-=-=exercício 1 =-=-=-=-');

//   1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
//   Dica: Use a função map

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = (books) =>
  books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames(books));

console.log('-=-=-=-=exercício 2 =-=-=-=-');

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

const expectedResult2 = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
const nameAndAge = (books) => {
    const mappedBooks = books.map((book) => ({
        age: book.releaseYear - book.author.birthYear,
        author: book.author.name
    }))
    return mappedBooks.sort((bookA, bookB) => bookA.age - bookB.age);
}

console.log(nameAndAge(books));

console.log('-=-=-=-=exercício 3 =-=-=-=-');

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

const expectedResult3 = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  
const fantasyOrScienceFiction = (books) => books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

console.log(fantasyOrScienceFiction(books));

console.log('-=-=-=-=exercício 4 =-=-=-=-');

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const expectedResult4 = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
const oldBooksOrdered = (books) => {
    const olderBooks = books.filter((book) => (2022 - book.releaseYear) > 60);
    return olderBooks.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

console.log(oldBooksOrdered(books));

console.log('-=-=-=-=exercício 5=-=-=-=-');

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = (books) => {
  const ftsyOrSciFi = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  const orderedFtsyOrSciFi = ftsyOrSciFi.map((book) => `${book.author.name}`)
  return orderedFtsyOrSciFi.sort();
} 

console.log(fantasyOrScienceFictionAuthors(books));

console.log('-=-=-=-=exercício 6=-=-=-=-');

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const oldBooks = (books) => books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);

console.log(oldBooks(books));

console.log('-=-=-=-=exercício 7=-=-=-=-');

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const authorWith3DotsOnName = (books) => books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;

console.log(authorWith3DotsOnName(books));

// Essa eu até entendo olhando o gabarito mas não consegui pensar em um jeito de construir isso linha por linha