
function logoutUser() {
  window.location.href = "login.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
  let loggedInUserName = localStorage.getItem("loggedInUserName");
  if (loggedInUserName) {
    let h2Element = document.querySelector(".name-div h2");
    h2Element.textContent = `Welcome, ${loggedInUserName} ❤️!`;
  } 
});
