import Question from "./question.js";

export default class ChoiceQuestion extends Question {
  constructor(id, content, correct) {
    super(id, content, correct);
  }
}
