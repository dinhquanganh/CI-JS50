let $app = document.querySelector("#app");
let root = null;
let useHash = true;
let hash = "#";
let router = new Navigo(root, useHash, hash);

import { getCurrentUser } from "./until.js";

router
  .on("/sign-in", () => {
    $app.innerHTML = "<form-login></form-login>";
  })
  .resolve();

router
  .on("/sign-up", () => {
    $app.innerHTML = "<form-register></form-register>";
  })
  .resolve();

router
  .on("/todolist", async () => {
    let currentUser = getCurrentUser();
    let result = await db
      .collection("Tasklists")
      .where("owner", "==", currentUser.id)
      .get();
    // let taskList = result.docs[0];
    // $app.innerHTML = `<task-list id="${taskList.id}"></task-list>`;
    let taskListData = getDataFromDoc(result.docs[0]);
    let $taskList = document.createElement("task-list");
    $taskList.setAttribute("id", taskListData.id);
    $taskList.setTasks(taskListData.tasks);
    $app.appendChild($taskList);
  })
  .resolve();

window.router = router;
// router
//   .on("/", () => {
//     $app.innerHTML = `<a href="/#/about">About</a>
//                       <h2>TEST PAGE</h2>`;
//   })
//   .resolve();

// //vao duong linh about thi thuc hien function
// router
//   .on("/about", () => {
//     app.innerHTML = `<a href="/#">Home</a>
//                      <h2>OK, welcome</h2>`;
//   })
//   .resolve();

// // router
// //   .on("/code/:id/:name", (params) => {
// //     console.log(params);
// //   })
// //   .resolve();
