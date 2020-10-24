const $template = document.getElementById("task-container-template");

class TaskContainer extends HTMLElement {
  id = "";
  content = "";
  dateModified = "";
  isCompleted = "";
  isEditing = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$content = this.shadowRoot.getElementById("content");
    this.$dateModified = this.shadowRoot.getElementById("date-modified");
    this.$isCompleted = this.shadowRoot.getElementById("is-completed");
    this.$edit = this.shadowRoot.getElementById("btn-edit");

    this.$edit.onclick = () => {
      this.changeStatus();
    };
  }

  static get observedAttributes() {
    return ["id", "content", "date-modified", "is-completed"];
  }

  // gán giá trị cho thuộc tính
  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(this.id, this.content, this.isCompleted, this.dateModified);

    switch (name) {
      case "content":
        this.content = newValue;
        break;

      case "date-modified":
        this.dateModified = newValue;
        break;

      case "is-completed":
        this.isCompleted = newValue.toLowerCase() == "true";
        break;

      case "id":
        this.id = newValue;
        break;
    }

    this.render();
  }

  changeStatus() {
    this.isEditing = !this.isEditing;
    this.render();
  }

  updateTask() {
    this.content = this.$content.innerHTML;
    let updateTaskEvent = new CustomEvent("update-task-event", {
      bubbles: true,
      detail: {
        id: this.id,
        content: this.content,
      },
    });
    this.dispatchEvent(updateTaskEvent);
  }

  // làm nhiệm vụ hiển thị nội dung và bắt sự kiện cho các element nằm bên trong
  render() {
    this.$content.innerHTML = this.content;
    this.$dateModified.innerHTML = this.dateModified;

    if (this.isEditing) {
      this.renderEditable();
    } else {
      this.renderReadOnly();
    }
  }

  renderReadOnly() {
    this.$content.contentEditable = false;
    this.$isCompleted.checked = this.isCompleted;
    this.$isCompleted.style.display = "inline-block";
    this.$edit.innerHTML = "Edit";
    this.$edit.onclick = () => {
      this.changeStatus();
    };
  }

  renderEditable() {
    this.$content.contentEditable = true;
    this.$isCompleted.style.display = "none";
    this.$edit.innerHTML = "Save";

    this.$edit.addEventListener("click", () => {
      this.updateTask();
    });

    this.$edit.onclick = () => {
      this.updateTask(); // 1. thay đổi thuộc tính content, 2. render
      this.changeStatus(); // 1. thay đổi trạng thái, 2. render
    };
  }
}

window.customElements.define("task-container", TaskContainer);
