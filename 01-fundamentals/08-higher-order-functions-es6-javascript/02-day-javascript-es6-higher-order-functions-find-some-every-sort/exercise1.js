const books = require('./book');

function author1947() {
  const foundObj = books.find((book) => book.author.birthYear === 1947);
  return foundObj.author.name;
}
console.log(author1947());
author1947();
