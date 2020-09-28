export default class Book {
  id;
  bookTitle;
  author;
  genre;
  dateOfCreation;

  constructor(bookTitle, author, genre) {
    this.id = uuid.v4();
    this.bookTitle = bookTitle;
    this.author = author;
    this.genre = genre;
    this.dateOfCreation = new Date().toISOString();
  }
}
