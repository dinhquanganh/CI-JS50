let $template = document.getElementById("main-news");
class MainNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$link = this.shadowRoot.getElementById("link");
    this.$image = this.shadowRoot.getElementById("image");
    this.$title = this.shadowRoot.getElementById("title");
  }
  static get observedAttributes() {
    return ["link", "image", "title"];
  }

  attributeChangedCallback(name, old, newVal) {
    if (name == "link") {
      this.$link.href = newVal;
    } else if (name == "image") {
      this.$image.src = newVal;
    } else if (name == "title") {
      this.$title.innerHTML = newVal;
    }
  }
}
window.customElements.define("main-news", MainNews);
