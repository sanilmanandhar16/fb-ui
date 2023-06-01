
const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const dob = document.querySelector("dob");
const male = document.getElementById("gender");
const female = document.getElementById("lastname");
const other = document.getElementById("other");
// const errorMessage = document.getElementById("errorMessage");

const fnameerror = document.getElementById("fnameerror");
const lnameerror = document.getElementById("lnameerror");

form.addEventListener("submit", (e)=>{
    const fnameerrors =[];
    const lnameerrors =[];

    console.log("firstname", firstname.value.length);
    console.log("lastname", lastname.value.length);

    if (fnameerrors.length > 0) {
        console.log("fnameerror", fnameerrors);
        e.preventDefault();
    
        //mathi ko usererrors push gareko lai chai eta textcontent ma modify garne//
        fnameerror.textContent = fnameerrors.join(", ");
      } else {
        fnameerror.textContent = "";
      }
      if (lnameerrors.length > 0) {
        console.log("lnameerror", lnameerrors);
        e.preventDefault();
    
        lnameerror.textContent = lnameerrors.join(", ");
      } else {
        lnameerror.textContent = "";
      }


})