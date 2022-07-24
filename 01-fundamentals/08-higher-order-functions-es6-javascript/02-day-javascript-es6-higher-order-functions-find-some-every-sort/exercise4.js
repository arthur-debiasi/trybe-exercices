const books = require('./book');

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
  return books;
}
console.log(booksOrderedByReleaseYearDesc());