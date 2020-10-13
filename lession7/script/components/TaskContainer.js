const $template = document.getElementById("task-container-template");

class TaskContainer extends HTMLElement {
  id = "";
  content = "";
  dateModified = "";
  isCompleted = "";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$content = this.shadowRoot.getElementById("content");
    this.$dateModified = this.shadowRoot.getElementById("date-modified");
    this.$isCompleted = this.shadowRoot.getElementById("is-completed");
  }

  static get observedAttributes() {
    return ["id", "content", "date-modified", "is-completed"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "content":
        this.content = newValue;
        break;
      case "date-modified":
        this.dateModified = newValue;
        break;
      case "is-completed":
        newValue = newValue.toLowerCase() == "true";
        // newValue=JSON.parse(newValue);
        this.isCompleted = newValue;
        break;
      case "id":
        this.id = newValue;
        break;
    }
    this.render();
  }

  // lam nv hien thi noi dung va bat su kien cho cac element nam ben trong
  render() {
    this.$content.innerHTML = this.content;
    this.$dateModified.innerHTML = this.dateModified;
    this.$isCompleted.checked = this.isCompleted;
  }
}
window.customElements.define("task-container", TaskContainer);
