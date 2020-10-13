export default class Task {
  id;
  content;
  date;
  isCompleted;
  constructor(content, isCompleted) {
    this.id = uuid.v4();
    this.content = content;
    this.isCompleted = isCompleted;
    this.date = new Date().toLocaleDateString();
  }
}
