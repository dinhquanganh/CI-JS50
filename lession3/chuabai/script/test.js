import Question from "./question";

export default class Test {
  id;
  name;
  duration;
  questions;
  dateModified;

  constructor(name, duration) {
    this.id = uuid.v4();
    this.name = name;
    this.duration = duration;
    this.questions = [];
    this.dateModified = new Date().toISOString();
  }
  addQuestion(question) {
    if (question instanceof Question) {
      this.questions.push(question);
    }
  }

  deleteQuestion(questionId) {
    this.questions = this.questions.filter(function (question) {
      return question.id != questionId;
    });
  }

  update(name, duration) {
    this.name = name;
    this.duration = duration;
    this.dateModified = new Date().toISOString();
  }
}
