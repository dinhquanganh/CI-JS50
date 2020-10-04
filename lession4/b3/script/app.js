class MyFormSign extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    let $template = document.getElementById("form-sign");
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$username = this.shadowRoot.getElementById("username");
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
    this.$re_pasword = this.shadowRoot.getElementById("re_pasword");
  }

  static get observedAttributes() {
    return ["username", "email", "password", "re_pasword"];
  }

  
}
window.customElements.define("form-sign", MyFormSign);
