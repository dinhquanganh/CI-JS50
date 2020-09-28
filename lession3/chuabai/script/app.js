import ChoiceQuestion from "./choiceQuestion.js";
import Test from "./test.js";
import TextQuestion from "./textQuestion.js";

export default class App {
  tests;
  question;
  constructor() {
    this.tests = [];
    this.question = [];
  }
  addTest() {
    let name = prompt("Enter Name");
    let duration = Number(prompt("Enter text duration"));
    let test = new Test(name, duration);
    this.tests.push(test);

    return test;
  }

  updateTest() {
    let id = prompt("Enter your test id to update");
    let newName = prompt("Enter new name");
    let newDuration = prompt("Enter new duration");

    let foundText = this.tests.find(function (test) {
      return test.id == id;
    });
    if (foundText!=null) {
        console.log(typeof foundText);
        foundText.update(newName, newDuration);
    }
  }

  addQuestion() {
      let type = prompt('Enter question type');
      let content = prompt('Enter question correct ');
      let correct = prompt('Enter question correct answer');

      if (type=='choice') {
          question = new ChoiceQuestion(content, correct);
      } else if (type =='text') {
          question = new TextQuestion(content,correct);
      }

      if  (question != null) {
          this.questions.push(this.question)
      }
  }


}
