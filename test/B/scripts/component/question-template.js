const $template = document.getElementById("question-template");

class Question extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$nameQuestion = this.shadowRoot.getElementById("name-question");
    this.$aw1 = this.shadowRoot.getElementById("aw1");
    this.$aw2 = this.shadowRoot.getElementById("aw2");
    this.$aw3 = this.shadowRoot.getElementById("aw3");
    this.$aw4 = this.shadowRoot.getElementById("aw4");
  }

  static get observedAttributes() {
    return ["name-question", "aw1", "aw2", "aw3", "aw4"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "name-question") {
      this.$nameQuestion.innerHTML = newValue;
    } else if (name == "aw1") {
      this.$aw1.innerHTML = newValue;
    } else if (name == "aw2") {
      this.$aw2.innerHTML = newValue;
    } else if (name == "aw3") {
      this.$aw3.innerHTML = newValue;
    } else if (name == "aw4") {
      this.$aw4.innerHTML = newValue;
    }
  }
}

window.customElements.define("question-template", Question);
