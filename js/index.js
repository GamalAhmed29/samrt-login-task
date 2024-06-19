let userNameInput = document.getElementById("signupName");
let userEmail = document.getElementById("signupEmail");
let userPassword = document.getElementById("signupPassword");

function addUser() {
  
  let isUserNameValid = signValdition(userNameInput);
  let isEmailValid = signValdition(userEmail);
  let isPasswordValid = signValdition(userPassword);

  if (isUserNameValid && isEmailValid && isPasswordValid) {
    let userInfo = JSON.parse(localStorage.getItem("info")) || [];

    let userExists = userInfo.some(
      (user) =>
        user.userName === userNameInput.value || user.email === userEmail.value
    );

    if (!userExists) {
      let info = {
        userName: userNameInput.value,
        email: userEmail.value,
        password: userPassword.value,
      };
      userInfo.push(info);
      localStorage.setItem("info", JSON.stringify(userInfo));
        console.log(userInfo);
        window.location.href = "login.html";

    } else {
      Swal.fire({
        title: "Error",
        text: "Username or Email already exists. Please choose a different one.",
        icon: "error",
        showCancelButton: false,
      });
    }
  } else {
    Swal.fire({
      title: "Validation Error",
      text: "Please ensure all fields are correctly filled.",
      icon: "warning",
      showCancelButton: false,
    });
  }
}

function signValdition(input) {
  var regix = {
    signupName: /^[a-zA-Z0-9._]{4,10}$/,
    signupEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/,
    signupPassword: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
  };
  if (regix[input.id].test(input.value)) {
    return true; // Validation passed
  } else {
    return false; // Validation failed
  }
}
