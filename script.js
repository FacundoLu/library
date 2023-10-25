const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    const libraryBox = document.querySelector('.library-box')
    libraryBox.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'book-card')
        bookDiv.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}<h3>
                <h3 class="author">${book.author}<h3>
            </div>
            <div class="card-body">
                <p class="pages">${book.pages} pages<p>
                <p class="read">${book.read? 'Read' : 'Not Read Yet'}<p>
                <button class='remove-btn' onclick='removeBook(${i})'>Remove</button>
                <button class='toggle-read-btn' onclick='toggleRead(${i})'>Toggle Read</button>
            </div>
        `;
        libraryBox.appendChild(bookDiv);
    }

}

function removeBook(index) {
    myLibrary.splice(index, 1)
    render()
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', () => {
    const newBookForm = document.querySelector('#new-book-form');
    newBookForm.setAttribute('style', 'display: block;');
})

const form = document.querySelector('#new-book-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    const newBookForm = document.querySelector('#new-book-form');
    newBookForm.setAttribute('style', 'display: none;');
})
