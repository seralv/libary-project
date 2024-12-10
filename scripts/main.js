const myLibrary = [];
const myNewLibrary = [];
const favDialog = document.getElementById("favDialog");
const cancelButton = document.getElementById("cancel");
const modalButton = document.getElementById("updateDetails");
const saveBook = document.getElementById("saveButton");
// const deleteButton = document.getElementById("deleteButton");

modalButton.addEventListener("click", function () {
  favDialog.showModal();
});
cancelButton.addEventListener("click", function () {
  favDialog.close();
});
saveBook.addEventListener("click", function () {
  const titleInput = favDialog.querySelector('input[name="title"]');
  const authorInput = favDialog.querySelector('input[name="author"]');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
    console.log("Book added:", newBook);
    console.log("My library:", myLibrary);

    // Clean inputs and close modal
    titleInput.value = "";
    authorInput.value = "";
    favDialog.close();
    readMyLibrary();
  } else {
    alert("Please fill the inputs");
  }
});

// deleteButton.addEventListener("click", function () {
//   console.log(`${myLibrary}: myLibrary`);
// });

class Book {
  constructor(title, author, read = false) {
    this.title = title;
    this.author = author;
    this.read = read;
  }

  addBookToLibrary() {
    myLibrary.push(this.name);
  }
}

function readMyLibrary() {
  const books = document.getElementById("books");
  books.innerHTML = "";
  for (const book in myLibrary) {
    books.innerHTML += `
        <div class="book">
          <div class="cover">
            <span id="bookName">${myLibrary[book].title}</span>
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
              Not readed
            </button>
            <button type="button" class="delete" id="deleteButton" data-index="${myLibrary[book]}">
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
  console.log("myLibrary:", myLibrary);
}
