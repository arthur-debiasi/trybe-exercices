const books = require('./book');

function smallerName() {
    let nameBook;
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    })
    return nameBook;
  }

console.log(smallerName());