const books = require('./book');

const expectedResult = false;

function authorUnique() {
    books.every((book) => books.find((yearBook) => (books.author.birthYear === yearBook.author.birthYear) && ))
}

console.log();