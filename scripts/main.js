const myLibrary = ["El principito", "Mallku", "Raza de Bronce"];

function Book() {}

function addBookToLibrary() {}

function readMyLibrary() {
  for (const book in myLibrary) {
    console.log(`${parseInt(book) + 1}: ${myLibrary[book]}`);
  }
}

readMyLibrary();
