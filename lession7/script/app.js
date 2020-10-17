import "./components/TaskContainer.js";
import "./components/TaskList.js";
import "./components/FormAddTask.js";

const db = firebase.firestore();

(async (id) => {
  //Lay data
  let result = await db.collection("Tasklists").doc(id).get();
  let data = result.data();

  //Tao 1 tasklist voi data vua lay ve
  let $taskList = document.createElement("task-list");

  $taskList.setAttribute("id", id);
  $taskList.setAttribute("date-modified", data.dateModified);
  $taskList.setTasks(data.tasks);
  //Chen tasklist vua tao vao app
  document.getElementById("app").appendChild($taskList);
})("alkfhvdggnbPTTMtCocv");










// let rawTasks = [
//   {
//     id: 1,
//     content: "dichoiiiiiii",
//     isCompleted: true,
//     dateModified: "2020/10",
//   },
//   {
//     id: 2,
//     content: "upcod",
//     isCompleted: true,
//     dateModified: "2020/11",
//   },
//   {
//     id: 3,
//     content: "showme",
//     isCompleted: false,
//     dateModified: "2020/10",
//   },
//   {
//     id: 4,
//     content: "wtf",
//     isCompleted: true,
//     dateModified: "2020/12",
//   },
// ];
// let taskList = document.getElementById("task-list-01");
// taskList.setTasks(rawTasks);























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
