type Book = { title: string; author: string };

export class Library {
  #books: Book[] = [];

  // Add a book to the library
  addBook(book: Book) {
    this.#books.push(book);
  }

  getAllBooks() {
    return this.#books;
  }

   // Get a book by name
   getBookByTitle(title: string) {
    if (this.#books.length === 0) {
      throw new Error("The library is empty");
    }

    const foundBook = this.#books.find(
      (book) => book.title === title
    );

    if (foundBook === null) {
      throw new Error("Error finding book");
    }

    if (foundBook === undefined) {
      throw new Error("Book not found");
    }

    return foundBook;
  }
}
