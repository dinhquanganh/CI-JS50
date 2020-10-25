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
      console.log(result);

      if (result.empty) {
        db.collection("user").add({
          name: name,
          email: email,
          password: password,
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
