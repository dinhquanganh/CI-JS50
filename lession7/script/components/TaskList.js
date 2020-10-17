const $template = document.getElementById("task-list-template");

class TaskList extends HTMLElement {
  id = "";
  tasks = [];
  dateModified = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$name = this.shadowRoot.getElementById("name");
    this.$tasks = this.shadowRoot.getElementById("tasks");
    this.$dateModified = this.shadowRoot.getElementById("date-modified");
  }

  static get observedAttributes() {
    return ["id", "date-modified"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "id") {
      this.id = newValue;
    }
    if (name == "date-modified") {
      this.dateModified = newValue;
    }

    this.render();
  }
  render() {
    this.$name.innerHTML = "LIST:  " + this.id;
    this.$dateModified.innerHTML = this.dateModified;
    this.$tasks.innerHTML = this.tasks
      .map((task) => {
        return `<task-container id="${task.id}" content="${task.content}" is-completed="${task.isCompleted}" date-modified="${task.dateModified}"></task-container>`;
      })
      .join("");
  }
  addTask() {}
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
