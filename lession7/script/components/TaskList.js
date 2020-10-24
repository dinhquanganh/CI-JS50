const $template = document.getElementById("task-list-template");

class TaskList extends HTMLElement {
  id = "";
  tasks = [];
  dateModified = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$formAddTask = this.shadowRoot.querySelector("form-add-task");
    this.$name = this.shadowRoot.getElementById("name");
    this.$tasks = this.shadowRoot.getElementById("tasks");
    this.$dateModified = this.shadowRoot.getElementById("date-modified");
    this.$taskList = this.shadowRoot.querySelector(".task-list");
    this.$taskList.addEventListener("add-task-event", (e) => {
      console.log(e);
    });
    this.$taskList.addEventListener("update-task-event", (e) => {
      console.log(e);
    });

  }

  static get observedAttributes() {
    return ["id", "date-modified"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "id") this.id = newValue;

    if (name == "date-modified") this.dateModified = newValue;

    this.render();
  }
  render() {
    this.$formAddTask.addtaskCallBack = this.addTask;

    this.$name.innerHTML = "LIST:  " + this.id;
    this.$dateModified.innerHTML = this.dateModified;
    this.$tasks.innerHTML = this.tasks
      .map((task) => {
        return `<task-container id="${task.id}" content="${task.content}" is-completed="${task.isCompleted}" date-modified="${task.dateModified}"></task-container>`;
      })
      .join("");
  }
  addTask() {
    console.log(this);
  }
  updateTask() {}
  deleteTask() {}

  setTasks(tasks) {
    this.tasks = tasks;
    this.render();
  }
  // set newTasks(tasks) {
  //   this.tasks = tasks;
  //   this.render();
  // }
}
window.customElements.define("task-list", TaskList);
