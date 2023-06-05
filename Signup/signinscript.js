
function validateForm(event) {
  event.preventDefault(); // Prevent form submission to allow validation

  // Reset error messages
  document.getElementById("fnameerror").textContent = "";
  document.getElementById("lnameerror").textContent = "";
  document.getElementById("emailerror").textContent = "";
  document.getElementById("doberror").textContent = "";
  document.getElementById("gendererror").textContent = "";
  document.getElementById("languageerror").textContent = "";

  // Perform validation
  var firstname = document.getElementById("firstname").value.trim();
  var lastname = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var dob = document.getElementById("dob").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var language = document.getElementById("language").value;
  var box1 = document.getElementById("box1").checked;
  var box2 = document.getElementById("box2").checked;
  var box3 = document.getElementById("box3").checked;

  document.querySelector("#fnameerror").style.color = "red";
  document.querySelector("#lnameerror").style.color = "red";
  document.querySelector("#emailerror").style.color = "red";
  document.querySelector("#gendererror").style.color = "red";
  document.querySelector("#languageerror").style.color = "red";
  document.querySelector("#doberror").style.color = "red";

  var valid = true; // sab validation check garna lai

  if (firstname === "") {
    document.getElementById("fnameerror").textContent =
      "Please enter your first name.";
    valid = false;
  }

  if (lastname === "") {
    document.getElementById("lnameerror").textContent =
      "Please enter your last name.";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailerror").textContent =
      "Please enter your email address.";
    valid = false;
  }

  if (dob === "") {
    document.getElementById("doberror").textContent =
      "Please select your date of birth.";
    valid = false;
  }

  if (!gender) {
    document.getElementById("gendererror").textContent =
      "Please select your gender.";
    valid = false;
  }

  if (language === "") {
    document.getElementById("languageerror").textContent =
      "Please select your language.";
    valid = false;
  }

  if (!box1 && !box2 && !box3) {
    document.getElementById("box1").parentNode.nextElementSibling.textContent =
      "Please select at least one interest.";
    valid = false;
  }

  if (valid) {
  
    document.getElementById("form").submit();
  }
}
