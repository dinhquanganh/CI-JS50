const $template = document.getElementById("form-add-task-template");

class FormAddTask extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$content = this.shadowRoot.getElementById("content");
    this.$formAddTask = this.shadowRoot.querySelector(".form-add-task");
    this.$formAddTask.onsubmit = (e) => {
      e.preventDefault();
      this.handle();
    };
  }
  handle() {
    //Lay du lieu
    let content = this.$formAddTask.content.value.trim();
    // Validate
    console.log(content);
    if (content == "") alert("Nhap lai di, may bi ngu ak???");
    else {}
    // Lam gi khi validate thanh cong
  }
}

window.customElements.define("form-add-task", FormAddTask);
