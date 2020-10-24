import "./TaskContainer.js";
import "./TaskList.js";
import "./FormAddTask.js";

// let rawTasks = [
//     {id: 1, content: 'Đi chơi', isCompleted: true, dateModified: '2020/10/13'},
//     {id: 2, content: 'Đi ăn', isCompleted: false, dateModified: '2020/10/13'},
//     {id: 3, content: 'Đi xem phim', isCompleted: false, dateModified: '2020/10/13'},
//     {id: 4, content: 'Đi quẩy', isCompleted: false, dateModified: '2020/10/13'},
//     {id: 5, content: 'Đi lên hồ tây', isCompleted: false, dateModified: '2020/10/13'},
//     {id: 6, content: 'Đi shopping', isCompleted: false, dateModified: '2020/10/13'},
//     {id: 7, content: 'Đi WC', isCompleted: false, dateModified: '2020/10/13'},
//     {id: 8, content: 'Đi ngủ', isCompleted: false, dateModified: '2020/10/13'}
// ];

// let taskList = document.getElementById('task-list-01');
// console.log(taskList);
// taskList.setTasks(rawTasks);
// taskList.tasks = rawTasks;

(async (id) => {
    // lấy dữ liệu
    let result = await firebase
                        .firestore()
                        .collection("taskLists")
                        .doc(id).get();

    let data = result.data();
    
    // tạo 1 task list với dữ liệu vừa lấy về
    let $taskList = document.createElement('task-list');
    $taskList.setAttribute('id', id);
    $taskList.setAttribute('date-modified', data.dateModified);
    $taskList.setTasks(data.tasks);

    // chèn task list vừa tạo vào app
    document.getElementById("app").appendChild($taskList);

})("4ahM4KOfgxLBfKx9d9OM");