let arr1 = prompt("Enter array 1 = ");
let arr2 = prompt("Enter array 2 = ");

arr1 = arr1.split(",");
arr2 = arr2.split(",");

let removeDuplicate = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) newArr.push(arr[i]);
  }
  return newArr;
};

let newArr1 = removeDuplicate(arr1);
let newArr2 = removeDuplicate(arr2);

let finishArr = (newArr1, newArr2) => {
  let newArr = [];
  newArr1.forEach((e) => {
    if (newArr2.indexOf(e) == -1) {
      newArr.push(e);
    }
  });
  newArr2.forEach((e) => {
    if (newArr1.indexOf(e) == -1) {
      newArr.push(e);
    }
  });
  return newArr;
};

console.log(finishArr(newArr1, newArr2));
