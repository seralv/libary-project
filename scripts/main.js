const myLibrary = ["El principito", "Mallku", "Raza de Bronce"];
const modalButton = document.getElementById("updateDetails");
modalButton.addEventListener("click", function () {
  modalAddBook();
});

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function addBookToLibrary() {}

function readMyLibrary() {
  for (const book in myLibrary) {
    console.log(`${parseInt(book) + 1}: ${myLibrary[book]}`);
  }
}

function modalAddBook() {
  var updateButton = document.getElementById("updateDetails");
  var cancelButton = document.getElementById("cancel");
  var favDialog = document.getElementById("favDialog");

  // Update button opens a modal dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });
}

readMyLibrary();
