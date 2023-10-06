function Book(title, author, pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [
    new Book("Heroes","Joe Abercrombie", 475, true), 
    new Book("Metamorphosis", "Franz Kafka", 189, true),
    new Book("Hobbit", "J.R.R. Tolkien", 259, true)];

function listBook(book) {
    let card = document.createElement("div");
    card.classList.add("card");
    for (let index = 0; index < Object.values(book).length; index++) {
        const entry = document.createElement("div");
        entry.textContent = Object.values(book)[index];
        card.appendChild(entry);
    }
    const library = document.querySelector(".library");
    library.appendChild(card);
}

function listLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        listBook(library[i]);
    }
}

listLibrary(myLibrary);

const addButton = document.getElementById("addBook");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("addBookDialog");
const confirmButton = document.getElementById("confirmButton");

addButton.addEventListener("click", () => dialog.showModal());
cancelButton.addEventListener("click", () => dialog.close());
confirmButton.addEventListener("click", () => {
    event.preventDefault();
    let newBook = new Book(title.value, author.value, pages.value, read.checked);
    document.querySelector("form").reset();
    dialog.close();
    listBook(newBook);
})

