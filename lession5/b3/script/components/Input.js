const $template = document.getElementById("template-input");

class InputSign extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$label = this.shadowRoot.getElementById("label-input");
    this.$input = this.shadowRoot.getElementById("main-input");
    this.$error = this.shadowRoot.getElementById("error-input");
  }

  static get observedAttributes() {
    return ["label", "type", "error", "value"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "label") {
      this.$label.innerHTML = newValue;
    } else if (name == "type") {
      this.$input.type = newValue;
    } else if (name == "error") {
      this.$error.innerHTML = newValue;
    } else if (name == "value") {
      this.$input.value = newValue;
    }
  }

  get value() {
    return this.$input.value;
  }

  set error(message) {
    this.setAttribute("error", message);
  }
}

window.customElements.define("input-box", InputSign);
