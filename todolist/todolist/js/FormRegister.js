import { md5 } from "./until.js";
const $template = document.getElementById("template-form-register");

class FormRegister extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$name = this.shadowRoot.getElementById("name");
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
    this.$passwordConfirmation = this.shadowRoot.getElementById(
      "password-confirmation"
    );

    this.$formRegister = this.shadowRoot.querySelector(".form-register");
    this.$formRegister.onsubmit = (event) => {
      event.preventDefault();
      this.register();
    };

    // this.$loginLink = this.shadowRoot.querySelector("#login-link");
    // this.$loginLink.onclick = () => {
    //   router.navigate("./sign-in");
    // };

    // this.$registerLink = this.shadowRoot.querySelector("#register-link");
    // this.$registerLink.onclick = () => {
    //   router.navigate("./sign-up");
    // };
  }
  //   console.log(email, name, password, passwordConfirmation);
  // }.bind(this);

  async register() {
    //lay du lieu
    let email = this.$email.value;
    let name = this.$name.value;
    let password = this.$password.value;
    let passwordConfirmation = this.$passwordConfirmation.value;
    // check dữ liệu
    if (this.validate(name, email, password, passwordConfirmation)) {
      // kiem tra email trung
      let result = await db
        .collection("user")
        .where("email", "==", email)
        .get();
      if (result.empty) {
        let resultUsers = await db.collection("user").add({
          name: name,
          email: email,
          password: md5(password),
        });
        alert("Success!");
        db.collection("Tasklists").add({
          tasks: [],
          dateModified: new Date().toLocaleDateString(),
          owner: resultUsers.id,
        });
      } else {
        document.write("Email da ton tai!");
      }
    }
  }

  validate(name, email, password, passwordConfirmation) {
    let isPassed = true;
    if (name == "") {
      this.$name.error = "Nhap ten";
      isPassed = false;
    } else {
      this.$name.error = "";
    }
    if (email == "") {
      this.$email.error = "Nhap email";
      isPassed = false;
    } else {
      this.$email.error = "";
    }
    if (password == "") {
      this.$password.error = "Nhap password";
      isPassed = false;
    } else {
      this.$password.error = "";
    }
    if (passwordConfirmation == "" || passwordConfirmation != password) {
      this.$passwordConfirmation.error = "Xac thuc mat khau khong dung";
    } else {
      this.$passwordConfirmation.error = "";
    }
    return isPassed;
  }
}

window.customElements.define("form-register", FormRegister);
