import {
  validateInputWrapper,
  md5,
  getDataFromDoc,
  saveCurrentUser,
} from "./until.js";

const $template = document.querySelector("#form-login-template");
class FormLogin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$formLogin = this.shadowRoot.querySelector(".form-login");
    this.$email = this.shadowRoot.querySelector("#email");
    this.$password = this.shadowRoot.querySelector("#password");

    this.$formLogin.onsubmit = (e) => {
      e.preventDefault();
      this.handle();
    };
  }

  async handle() {
    //lay du lieu
    let email = this.$email.value;
    let password = this.$password.value;

    // check dữ liệu
    if (this.validate()) {
      let result = await db
        .collection("user")
        .where("email", "==", email)
        .where("password", "==", md5(password))
        .get();

      if (result.empty) alert("Invalid");
      else {
        saveCurrentUser(getDataFromDoc(result.docs[0], ["password"]));
        router.navigate("/todolist");
      }
    }
  }

  validate() {
    return (
      validateInputWrapper(
        this.$email,
        (value) => value != "",
        "Nhap vao email"
      ) &
      validateInputWrapper(
        this.$password,
        (value) => value != "",
        "Nhap vao password"
      )
    );
  }
}

window.customElements.define("form-login", FormLogin);
