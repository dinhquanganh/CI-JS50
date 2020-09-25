import Test from "./test.js";

class Action_test {
  data = [];
  constructor(data) {
    this.data = data;
  }
  show() {
    let arrData = this.data;
    console.clear();
    for (let i = 0; i < arrData.length; i++) {
      console.log(
        `Id: ${arrData[i].id} \nName: ${arrData[i].name} \nTime: ${arrData[i].time} \nQuestions: ${arrData[i].questions} \nDate:${arrData[i].date}`
      );
    }
  }
  add() {
    let idTest = prompt("Enter id: ");
    let nameTest = prompt("Enter name test: ");
    alert("Enter time test!");
    let timeTest =
      prompt("About hour?") +
      "h," +
      prompt("About minutes?") +
      "p," +
      prompt("About sec?") +
      "s";
    let aboutQ = Number(prompt("How many questions do you want to add?"));
    let questionTest = [];
    for (let i = 0; i < aboutQ; i++) {
      questionTest[i] = prompt(`Question ${i + 1}: `);
    }
    let dateTest = new Date();
    dateTest = `${dateTest.getDate()}/${dateTest.getMonth()}/${dateTest.getFullYear()}`;
    let newTest = new Test(idTest, nameTest, timeTest, questionTest, dateTest);
    this.data.push(newTest);
    alert("Success !");
  }

  addQT3() {
    let arrData = this.data;
    let idCheck = prompt(
      "Enter the test id you want to add question !"
    );
    for (let i = 0; i < arrData.length; i++) {
      if (idCheck == arrData[i].id) {
        let count = Number(prompt("How many questions do you want to add?"));
        let addQ;
        for (let j = 0; j < count; j++) {
          addQ = prompt(`Add times ${j + 1}`);
          arrData[i].questions.push(addQ);
        }
      }
    }
    alert("Success !");
  }
}
export default Action_test;
