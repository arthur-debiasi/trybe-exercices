const books = require('./book');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.releaseYear > 1901 && book.releaseYear < 2000)
};

console.log(everyoneWasBornOnSecXX());