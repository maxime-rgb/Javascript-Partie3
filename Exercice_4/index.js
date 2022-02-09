let button = document.querySelector("button");

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");



button.onclick = function() {
   
    if (password.value == confirmPassword.value) {
      password.style.border='3px solid green';
      confirmPassword.style.border='3px solid green';
      
    } else {
      password.style.border='3px solid red';
      confirmPassword.style.border='3px solid red';
    }

  };