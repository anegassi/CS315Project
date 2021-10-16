window.onload = function () {
<<<<<<< HEAD
  // alert(onlaod);
=======
  //alert("onload");
>>>>>>> d7e73381b242b1fb90b0ab4dc06df50440d95213
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  form.addEventListener("submit", (e) => {
    alert("submit");
    if (!isValid()) e.preventDefault();
  });

  function isValid() {
    // trim to remove the whitespaces

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let valid = true;
    if (usernameValue === "") {
      valid = false;
      setErrorFor(username, "Username cannot be blank");
    } else {
      setSuccessFor(username);
    }

    if (emailValue === "") {
      valid = false;
      setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      valid = false;
      setErrorFor(email, "Not a valid email");
    } else {
      setSuccessFor(email);
    }

    if (passwordValue === "") {
      valid = false;
      setErrorFor(password, "Password cannot be blank");
    } else if (!isPassword(passwordValue)) {
      valid = false;
      setErrorFor(password, "Not a valid password");
    } else {
      setSuccessFor(password);
    }

    if (password2Value === "") {
      valid = false;
      setErrorFor(password2, "Password2 cannot be blank");
    } else if (passwordValue !== password2Value) {
      valid = false;
      setErrorFor(password2, "Passwords does not match");
    } else if (!isPassword(passwordValue)) {
      valid = false;
      setErrorFor(password2, "Not a valid password");
    } else {
      setSuccessFor(password2);
    }
    return valid;
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  function isPassword(password) {
    return /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      password
    );
  }
};
