class Test {
  id;
  name;
  time;
  questions=[];
  date;
  constructor(id, name, time, questions, date) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.questions = questions;
    this.date = date;
  }
}
export default Test;
