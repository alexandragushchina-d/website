// Variable to count number of attempts
var attempt = 5;

function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "admin" && password == "admin") {
    alert ("Login successfully");
    window.location = "profile.html";

    return false;

  } else {
    attempt --;

    alert("You have left "+attempt+" attempt for your Login.");

    // Disabling fields after 5 attempts.
    if(attempt == 0) {
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;

      return false;

      }
    }
}
