import Ask from "./ask.js";

class Action {
  data = [];
  constructor(data) {
    this.data = data;
  }

  show() {
    console.clear();
    let arrData = this.data;
    for (let i = 0; i < arrData.length; i++) {
      if (arrData[i].answer.answerAll != "none") {
        console.log(
          `Id: ${arrData[i].id}, Content: ${arrData[i].content}, Answers: ${arrData[i].answer.answerAll}, Correct answer position: ${arrData[i].answer.true}`
        );
      } else {
        console.log(
          `Id: ${arrData[i].id}, Content: ${arrData[i].content}, Correct answer : ${arrData[i].answer.true}`
        );
      }
    }
  }

  add() {
    let addId = prompt("Enter ID Ask!");
    let addContent = prompt("Enter Content!");
    let objAnswer = { answerAll: [], true: [] };
    let arrAnswer;
    let ansTrue;
    while (true) {
      let checkKey = prompt(
        "Do you want add multiple-choice(Press: 1) or essay(Press: 2)?"
      );
      if (checkKey == "1") {
        arrAnswer = prompt("Enter answer separated by commas (,): ");
        arrAnswer = arrAnswer.split(",");
        objAnswer.answerAll = arrAnswer;
        ansTrue = Number(
          prompt("Enter the correct answer location! (Starting from 1)") - 1
        );
        objAnswer.true = ansTrue;
        break;
      } else if (checkKey == "2") {
        ansTrue = prompt("Enter right answer: ");
        objAnswer.true = ansTrue;
        break;
      } else {
        alert("Invalid, try now !");
      }
    }

    let addAsk = new Ask(addId, addContent, objAnswer);
    this.data.push(addAsk);
  }

  remover() {
    let arrData = this.data;
    while (true) {
      let keyDelete = prompt(
        "Enter the question id you want to delete (enter 'exit' if you want quit) !"
      );
      if (keyDelete == "exit") {
        break;
      } else {
        let i = 0;
        let checkout = true;
        while (i < arrData.length) {
          if (keyDelete == arrData[i].id) {
            arrData.splice(i, 1);
            checkout = false;
            alert("Success !");
            break;
          } else i++;
        }
        if (checkout == true) {
          alert("Invalid id @@");
        } else {
          break;
        }
      }
    }
  }

  edit() {
    let arrData = this.data;
    while (true) {
      let keyEdit = prompt(
        "Enter the question ID you want to edit (enter 'exit' if you want quit) !"
      );
      if (keyEdit == "exit") break;
      else {
        for (let i = 0; i < arrData.length; i++) {
          if (keyEdit == arrData[i].id) {
            let key;
            let dataInp;
            if (arrData[i].answer.answerAll != "none") {
              key = Number(
                prompt(
                  `Press 1: Edit id\nPress 2: Edit content\n Press 3: Edit list answers\nPress 4: Edit correct answer position\nPress 5: Quit`
                )
              );
              if (key == 1) {
                dataInp = prompt("Enter");
                arrData[i].id = dataInp;
                alert("Completed");
              } else if (key == 2) {
                dataInp = prompt("Enter");
                arrData[i].content = dataInp;
                alert("Completed");
              } else if (key == 3) {
                dataInp = prompt("Enter");
                arrData[i].answer.answerAll = dataInp;
                alert("Completed");
              } else if (key == 4) {
                dataInp = prompt("Enter");
                arrData[i].answer.true = dataInp;
                alert("Completed");
              } else if (key == 5) {
                break;
              } else {
                alert("Invalid");
              }
            } else {
              key = prompt(
                `Press 1: Edit id\nPress 2: Edit content\nPress 3: Edit correct answer\nPress 4: Quit`
              );
              if (key == 1) {
                dataInp = prompt("Enter");
                arrData[i].id = dataInp;
                alert("Completed");
              } else if (key == 2) {
                dataInp = prompt("Enter");
                arrData[i].content = dataInp;
                alert("Completed");
              } else if (key == 3) {
                dataInp = prompt("Enter");
                arrData[i].answer.true = dataInp;
                alert("Completed");
              } else if (key == 4) {
                break;
              } else {
                alert("Invalid");
              }
            }
            console.clear();
            for (let i = 0; i < arrData.length; i++) {
              if (arrData[i].answer.answerAll != "none") {
                console.log(
                  `Id: ${arrData[i].id}, Content: ${arrData[i].content}, Answers: ${arrData[i].answer.answerAll}, Correct answer position: ${arrData[i].answer.true}`
                );
              } else {
                console.log(
                  `Id: ${arrData[i].id}, Content: ${arrData[i].content}, Correct answer : ${arrData[i].answer.true}`
                );
              }
            }
          }
        }
      }
    }
  }
}

export default Action;
