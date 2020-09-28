export default class Bookcase {
  id;
  max;
  dataBook = [];
  dateOfCreation;

  constructor(max, dataBook) {
    this.id = uuid.v4();
    this.max = max;
    this.dataBook = dataBook;
    this.dateOfCreation = new Date().toISOString();
  }
}
