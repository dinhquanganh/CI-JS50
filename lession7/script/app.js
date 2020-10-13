import "./components/TaskContainer.js";
import "./components/TaskList.js";
let rawTasks = [
  {
    id: 1,
    content: "dichoiiiiiii",
    isCompleted: true,
    dateModified: "2020/10",
  },
  {
    id: 2,
    content: "upcod",
    isCompleted: true,
    dateModified: "2020/11",
  },
  {
    id: 3,
    content: "showme",
    isCompleted: false,
    dateModified: "2020/10",
  },
  {
    id: 4,
    content: "wtf",
    isCompleted: true,
    dateModified: "2020/12",
  },
];

let taskList = document.getElementById("task-list-01");
taskList.setTasks(rawTasks);

// let data = [
//   {
//     id: "103472849124",
//     content: "123aaaaa",
//     date: "12/10",
//     isCompleted: "v",
//   },
//   {
//     id: "e32rqefs3rqefa",
//     content: "123rr3rr3r",
//     date: "12/10",
//     isCompleted: "x",
//   },
//   {
//     id: "345678876543",
//     content: "fet4twr3",
//     date: "12/10",
//     isCompleted: "v",
//   },
// ];
// const db = firebase.firestore();
// // let x = new Date().toLocaleTimeString();
// // let y = new Date().toLocaleDateString();
// // console.log(x+"\n"+y);
// // db.collection("todolist").doc(x).set(data[1]);
// (async () => {
//   let getRe = await db.collection("todolist2").doc("hP94T2BiUIygcFd0i8mp").get();
// console.log(getRe.collection)
// })();

// const listDay = document.getElementById("list-day");
// (async () => {
//   let result = await db
//     .collection("todolist2")
//     .doc("hP94T2BiUIygcFd0i8mp")
//     .collection("day1")
//     .get();
//   let obN = result.docs.map((doc) => doc.data());
//   console.log(obN);
// })();

// // db.collection("todolist2")
// //   .doc("hP94T2BiUIygcFd0i8mp")
// //   .collection("day1")
// //   .add(data[0]);
