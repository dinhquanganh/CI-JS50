import Action from "./action_ask.js";
import Action_test from "./action_test.js";

let dataMain = [
  {
    id: "1",
    content: "Ten admin la gi?",
    answer: { answerAll: ["none"], true: ["quang anh"] },
  },
  {
    id: "2",
    content: "1+1=?",
    answer: { answerAll: [1, 2, 3, 4], true: [1] }, // true:  cai nay la vi tri dap an dung a nhe :))
  },
];
let actionMain = new Action(dataMain);

let dataTest = [
  {
    id: "1",
    name: "khao sat",
    time: "0h,20p,0s",
    questions: [
      "Ten ban la gi?",
      "Tuoi cua ban?",
      "Tinh trang hon nhan",
      "Que quan",
    ],
    date: "25/9/2020",
  },
  {
    id: "2",
    name: "test nhan pham",
    time: "0h,1p,30s",
    questions: [
      "lonely?",
      "have money?",
      "height>1m60?",
      "happy?",
      "are you ok?",
    ],
    date: "21/9/2020",
  },
];
let actionTest = new Action_test(dataTest);

let keyStart;
let keyCtrl;
while (true) {
  keyStart = Number(
    prompt(
      `Welcome, What do you want to do? \n(NOTE: OPEN CONSOLE BEFORE PRESS)

    Press 1: Act on the question.
    Press 2: Act on the test.
    Press 3: Quit`
    )
  );
  if (keyStart == 1) {
    while (true) {
      keyCtrl = Number(
        prompt(
          `Press 1: Show question list.\nPress 2: Add question.\nPress 3: Remover question.\nPress 4: Edit question.\nPress 5: Quit`
        )
      );
      if (keyCtrl == 1) {
        actionMain.show();
        alert("Quit and check list in console.");
      } else if (keyCtrl == 2) {
        actionMain.add();
        alert("Completed!");
      } else if (keyCtrl == 3) {
        alert("Check list in console.");
        actionMain.show();
        actionMain.remover();
      } else if (keyCtrl == 4) {
        alert("Check list in console.");
        actionMain.show();
        actionMain.edit();
      } else if (keyCtrl == 5) {
        break;
      } else {
        console.log("Invalid");
      }
    }
  } else if (keyStart == 2) {
    while (true) {
      keyCtrl = Number(
        prompt(
          `Press 1: Show list test.\nPress 2: Add test.\nPress 3: Add question to the test.\nPress 4: Quit.`
        )
      );
      if (keyCtrl == 1) {
        alert("Quit and check list in console");
        actionTest.show();
      } else if (keyCtrl == 2) {
        actionTest.add();
        actionTest.show();
      } else if (keyCtrl == 3) {
        alert("Check list in console");
        actionTest.show();
        actionTest.addQT3();
        actionTest.show();
      } else if (keyCtrl == 4) {
        break;
      }
    }
  } else break;
}
