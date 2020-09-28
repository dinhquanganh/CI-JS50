export default class Question {
  id;
  content;
  correct;
  dateModified;
  constructor(content, correct) {
    this.id = uuid.v4();
    this.content = content;
    this.correct = correct;
    this.dateModified = new Date().toISOString();
  }

  update(content, correct) {
    this.content = content;
    this.correct = correct;
    this.dateModified = new Date().toISOString();
  }
}
