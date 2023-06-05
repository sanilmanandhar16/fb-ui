function goToSignin() {
  window.location.href = "../Signup/index.html";
}

function goBackLogin() {
  window.location.href = "../index.html";
}

const form = document.querySelector("form");
var username = document.getElementById("username");
const password = document.getElementById("password");
// const errorMessage = document.getElementById("errorMessage");
const usererror = document.getElementById("usererror");
const passworderror = document.getElementById("passworderror");

form.addEventListener("submit", (e) => {
  const usererrors = [];
  const passworderrors = [];
  // const emptypasserr = [];
  // if(username.value ==='' || username.value ==null){
  //     messages.push('Name is Required')
  // }
  // if(messages.length > 0){
  //     e.preventDefault();
  //     errorElement.innerHTML = messages.join(',')
  // }
  

  //if the username is empty or have white spaces
  //tyo value lai chai user usererrors array ma push garne

  if (username.value.trim() === "") {
    // console.log(username);
    usererrors.push("Username is required");
  }
  if (password.value.trim() === "") {
    // console.log(username);
    passworderrors.push("Password is required");
  }
  //esma ni same
  if (password.value.length < 4 && password.value.trim() !== "") {
    passworderrors.push("Password must be minimum 4-10 characters");
  } //same
  if (password.value.length > 10 && password.value.trim() !== "") {
    passworderrors.push("Password must be maximum of only 10 characters");
  }

  //usererrors ra passworderrors ma kei errors cha ki check garne:

  //user errors ra password errors ma kei error cha bhaye aba teslai
  //textcontent use garera dekhaune nabhaye textcontent khali chodne

  if (usererrors.length > 0) {
    console.log("usererror", usererrors);
    e.preventDefault();

    //mathi ko usererrors push gareko lai chai eta textcontent ma modify garne//
    usererror.textContent = usererrors.join(", ");
  } else {
    usererror.textContent = "";
  }
  if (passworderrors.length > 0) {
    console.log("passworderror", passworderrors);
    e.preventDefault();

    passworderror.textContent = passworderrors.join(", ");
  } else {
    passworderror.textContent = "";
  }
});
