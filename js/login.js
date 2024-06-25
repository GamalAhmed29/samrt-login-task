let loginEmail = document.getElementById("signupEmail");
let loginPassword = document.getElementById("signupPassword");

function login() {
  let userInfo = localStorage.getItem("info");
  if (userInfo) {
    userInfo = JSON.parse(userInfo);

    if (Array.isArray(userInfo)) {
      let user = userInfo.find(
        (user) =>
          user.email === loginEmail.value &&
          user.password === loginPassword.value
      );


      if (user) {
        console.log("Login successful");
        localStorage.setItem("loggedInUserName", user.userName);
        window.location.href = "home.html";
      } else {

        Swal.fire({
          title: "Login Failed",
          text: "Incorrect email or password. Please try again.",
          icon: "error",
          showCancelButton: false,
        });
      }
    } else {
      Swal.fire({
        title: "Login Failed",
        text: "User information is not properly stored. Please contact support.",
        icon: "error",
        showCancelButton: false,
      });
    }
  } else {
    Swal.fire({
      title: "Login Failed",
      text: "No user information found. Please sign up first.",
      icon: "error",
      showCancelButton: false,
    });
  }
}
