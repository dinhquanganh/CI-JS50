let $template = document.getElementById("head-page");

class HeadPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$hello = this.shadowRoot.getElementById("hello");
    this.$imageHead = this.shadowRoot.getElementById("image-head");
  }
  static get observedAttributes() {
    return ["hello", "image-head"];
  }

  attributeChangedCallback(name, old, newVal) {
    if (name == "hello") {
      this.$hello.innerHTML = newVal;
    } else if (name == "image-head") {
      this.$imageHead.src = newVal;
    }
  }
}
window.customElements.define("head-page", HeadPage);
