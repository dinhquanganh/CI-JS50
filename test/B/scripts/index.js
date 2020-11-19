import "./component/question-template.js";
const showData = document.querySelector(".show-data");
const next = document.querySelector(".next");
const returnQuestion = document.querySelector(".return");

fetch(
  "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
)
  .then((response) => {
    return response.json();
  })
  .then(async (json) => {
    let trueData = [];
    let data = json.results;
    let fData = await applyData(data);
    data.forEach((e) => {
      trueData.push(e.correct_answer);
    });
    checkTrue();
    clickNext(fData);
  });
var applyData = (data) => {
  let num = 1;
  let fData = [];
  let trueData = [];
  data.forEach((e) => {
    fData.push(`<question-template 
    name-question="${num}. ${e.question}" 
    aw1="${e.incorrect_answers[0]}" 
    aw2="${e.incorrect_answers[1]}" 
    aw3="${e.incorrect_answers[2]}" 
    aw4="${e.correct_answer}">
    </question-template>`);
    trueData.push(e.correct_answer);
    num++;
  });
  return fData;
};
var clickNext = (fData) => {
  let num = 0;
  showData.innerHTML = fData[0];
  next.addEventListener("click", () => {
    if (num !== fData.length) {
      num++;
      showData.innerHTML = fData[num];
      returnQuestion.style.display = "block";
    } else showData.innerHTML = "Diem cua ban la: ";
  });
};

var checkTrue = () => {
  let modeAnswer = document.getElementsByClassName("modeAnswer");
  console.log(modeAnswer);
};
