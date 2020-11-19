//test case
let testCase = [
  { name: "Arsenal", points: 99, GD: 45 },
  { name: "Chelsea", points: 75, GD: 39 },
  { name: "MU", points: 60, GD: 29 },
  { name: "Liverpool", points: 88, GD: 39 },
];

let sortRank = (testCase) => {
  for (let i = 0; i < testCase.length; i++) {
    testCase[i]["position"] = 1;
    for (let j = 0; j < testCase.length; j++) {
      if (i == j) continue;
      else {
        if (testCase[i].points < testCase[j].points) {
          testCase[i]["position"] += 1;
        } else if (testCase[i].points === testCase[j].points) {
          if (testCase[i].GD > testCase[j].GD) {
            testCase[i]["position"] += 1;
          }
        }
      }
    }
  }
  return testCase;
};

console.log(sortRank(testCase));
