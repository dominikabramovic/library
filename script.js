function Book(title, author, pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [
    new Book("Heroes","Joe Abercrombie", 475, false), 
    new Book("Metamorphosis", "Franz Kafka", 189, true),
    new Book("Hobbit", "J.R.R. Tolkien", 259, true)];

function listBook(book) {
    let card = document.createElement("div");
    card.setAttribute("data-index", `${myLibrary.indexOf(book)}`)
    card.classList.add("card");
    
    card.innerHTML = `
    <span class="material-symbols-outlined remove-book data-index=${myLibrary.indexOf(book)}" >
                close
        </span> 
    <div class="description">     
        <h3 class="title">${book.title}</h3>
        <p class="author">by ${book.author}</p>
        <p>No. of pages: ${book.pages}</p>
    </div>
    <div class="action-buttons">     
        <button class="read-status">${isRead(book)}</Button>
    </div>`;

    let button = card.lastChild.lastElementChild;
    if (book.read) button.classList.add("read");
    const displayedLibrary = document.querySelector(".library");
    displayedLibrary.appendChild(card);
    toggleRead(button);
    removeBook(card);
}

function isRead(book) {
    return book.read ? "Read" : "Not read";
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
    myLibrary.push(newBook);
    listBook(newBook);
})

function toggleRead (button) {
        button.addEventListener("click", () => {
            button.classList.toggle("read");
            button.textContent == "Read" ? button.textContent ="Not Read" : button.textContent = "Read";
        });
    };

function removeBook(book) {
    console.log(book.dataset.index);
    console.log(book.firstElementChild);
    let bookNumber = book.dataset.index;
    book.firstElementChild.addEventListener("click", () => {
        book.remove();
    });
}