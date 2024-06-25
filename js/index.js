let userNameInput = document.getElementById("signupName");
let userEmail = document.getElementById("signupEmail");
let userPassword = document.getElementById("signupPassword");

function addUser() {
  let userNameError = signValdition(userNameInput);
  let emailError = signValdition(userEmail);
  let passwordError = signValdition(userPassword);

  if (!userNameError && !emailError && !passwordError) {
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
    let errorMessage = userNameError || emailError || passwordError;
    Swal.fire({
      title: "Validation Error",
      text: errorMessage,
      icon: "warning",
      showCancelButton: false,
    });
  }
}

function signValdition(input) {
  var regix = {
    signupName: {
      pattern: /^[a-zA-Z0-9._]{4,10}$/,
      message:
        "Username must be 4-10 characters long and can only contain letters, numbers, dots, and underscores.",
    },
    signupEmail: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/,
      message: "Email must be valid and end with .com or .net.",
    },
    signupPassword: {
      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
      message:
        "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.",
    },
  };

  if (regix[input.id].pattern.test(input.value)) {
    return null; 
  } else {
    return regix[input.id].message; 
  }
}
