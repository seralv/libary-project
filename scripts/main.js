const myLibrary = [
  "El principito",
  "Mallku",
  "Raza de Bronce",
  "El Zambo Salvito",
  "Tempestad en la cordillera",
  "Ojitos",
];
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
  // const bookName = document.getElementById("bookName");
  const books = document.getElementById("books");
  for (const book in myLibrary) {
    console.log(`${parseInt(book) + 1}: ${myLibrary[book]}`);
    books.innerHTML += `
        <div class="book">
          <div class="cover">
            <span id="bookName">${myLibrary[book]}</span>
          </div>
          <div class="buttons" id="buttons">
            <button type="button" class="read">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>close-thick</title>
                <path
                  d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                  stroke="none"
                  fill="#e7dfc6"
                />
              </svg>
              Not read
            </button>
            <button type="button" class="delete">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>delete</title>
                <path
                  d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                  stroke="none"
                  fill="#e7dfc6"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
`;
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
