const $template = document.getElementById("task-list-template");
/* 
    tasks: [
        {id: 1, content: 'đi chơi', dateModified: '2020/10/13', isCompleted: true}
        {id: 2, content: 'đi chơi', dateModified: '2020/10/13', isCompleted: true}
        {id: 3, content: 'đi chơi', dateModified: '2020/10/13', isCompleted: true}
        {id: 4, content: 'đi chơi', dateModified: '2020/10/13', isCompleted: true}
        {id: 5, content: 'đi chơi', dateModified: '2020/10/13', isCompleted: true}
    ]
*/
class TaskList extends HTMLElement {
  id = "";
  tasks = [];
  dateModified = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append($template.content.cloneNode(true));
    // this.shadowRoot.innerHTML = $template.content;

    this.$name = this.shadowRoot.getElementById("name");
    this.$tasks = this.shadowRoot.getElementById("tasks");
    this.$dateModified = this.shadowRoot.getElementById("date-modified");
    this.$formAddTask = this.shadowRoot.querySelector("form-add-task");
    this.$taskList = this.shadowRoot.querySelector(".task-list");

    this.$taskList.addEventListener("add-task-event", (event) => {
      this.addTask(event.detail);
    });
    this.$taskList.addEventListener("update-task-event", (event) => {
      this.updateTask(event.detail);
    });
    this.$taskList.addEventListener("delete-task-event", (event) => {
      this.deleteTask(event.detail);
    });
  }

  static get observedAttributes() {
    return ["id", "date-modified"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "id") {
      this.id = newValue;
    } else if (name == "date-modified") {
      this.dateModified = newValue;
    }

    this.render();
  }

  setTasks(tasks) {
    this.tasks = tasks;
    // console.log(this.tasks);
    this.render();
  }

  addTask(task) {
    this.tasks.push(task);

    firebase
      .firestore()
      .collection("Tasklists")
      .doc(this.getAttribute("id"))
      .update({
        tasks: this.tasks,
      });

    this.render();
  }

  updateTask(task) {
    //tim task trong tasks co id tuong ung
    // let foundTask = null;
    // for (let item of this.tasks) {
    //   if ((item.id = task.id)) {
    //     foundTask = item;
    //     break;
    //   }
    // }

    let foundTask = this.tasks.find((item) => {
      return item.id === task.id;
    });
    //thay doi noi dung cho task vua tim dc
    console.log(foundTask);
    if (foundTask != null) {
      this.tasks.splice(i, 1);
    }
    //update vao database
    db.collection("Tasklists").doc(this.id).update({ tasks: this.tasks });
  }

  deleteTask(task) {
    // //c1: filter
    // this.tasks = this.tasks.filter((item) => {
    //   return item.id != task.id;
    // });
    // //update vao database
    //db.collection("Tasklists").doc(this.id).update({ tasks: this.tasks });
    //c2 : splice
    let foundTaskIndex = this.tasks.findIndex((item) => {
      return item.id === task.id;
    });

    if (foundTaskIndex >= 1) {
      this.tasks.splice(foundTaskIndex, 1);
      db.collection("Tasklists").doc(this.id).update({ tasks: this.tasks });
    }
  }

  render() {
    this.$name.innerHTML = "Task list: " + this.id;
    this.$dateModified.innerHTML = this.dateModified;
    this.$tasks.innerHTML = this.tasks
      .map(function (task) {
        return `
            <task-container 
                id="${task.id}" 
                content="${task.content}" 
                is-completed="${task.isCompleted}" 
                date-modified="${task.dateModified}">
            </task-container>`;
      })
      .join("");
  }
}

window.customElements.define("task-list", TaskList);
