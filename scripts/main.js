const myLibrary = [
  {
    title: "1984",
    author: "George Orwell",
    read: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    read: true,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    read: false,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    read: false,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    read: true,
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    read: false,
  },
];

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
            <button type="button" class="read" id="readUpdate" data-index="${book}" onclick="readUpdate()"} style="background-color: ${myLibrary[book].read ? "#2e8b57" : "#131b23"};">
              ${
                myLibrary[book].read
                  ? `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-bold</title>
                <path 
                  d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" 
                  stroke="none"
                  fill="#e7dfc6"
                />
                </svg>
                `
                  : `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>close-thick</title>
                <path
                  d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                  stroke="none"
                  fill="#e7dfc6"
                /></svg>`
              }
              ${myLibrary[book].read ? "Readed" : "Not readed"}
            </button>
            <button type="button" class="delete" id="deleteButton" onclick="deleteBook()">
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

function deleteBook() {
  const deleteButtons = document.querySelectorAll("#deleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const bookIndex = event.target
        .closest("button")
        .getAttribute("data-index");
      myLibrary.splice(bookIndex, 1);
      readMyLibrary();
    });
  });
}

function readUpdate() {
  const updateButtons = document.querySelectorAll("#readUpdate");
  updateButtons.forEach((update) => {
    update.addEventListener("click", (event) => {
      const updateIndex = event.target
        .closest("button")
        .getAttribute("data-index");
      if (myLibrary[updateIndex].read) {
        myLibrary[updateIndex].read = false;
      } else {
        myLibrary[updateIndex].read = true;
      }
      readMyLibrary();
    });
  });
}

readMyLibrary();
