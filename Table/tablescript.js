


// Users data
var users = [
    {
      name: "Ram",
      address: "Kathmandu",
      dob: "2000-1-2",
      gender: "Male"
    },
    {
      name: "Sanil ",
      address: "Lalitpur",
      dob: "2004-10-2",
      gender: "Female"
    },
    {
      name: "Hari",
      address: "Bhaktapur",
      dob: "2022-10-2",
      gender: "Male"
    }
  ];
  

// first euta table banauna function banaune

//append child le  add garne kaam garcha
function userTable(){
    var tbody =document.querySelector("#users tbody");

    users.forEach(function(user){
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

       


        var addressCell = document.createElement("td");
        addressCell.textContent = user.address;
        row.appendChild(addressCell);


        var dobCell = document.createElement("td");
        dobCell.textContent = user.address;
        row.appendChild(dobCell);



        var genderCell = document.createElement("td");
        genderCell.textContent = user.gender;
        row.appendChild(genderCell);

        tbody.appendChild(row);
    })
}
userTable();














































// this is for the facebook
  // var firstname = localStorage.setItem("firstname");
// var lastname = localStorage.setItem("lastname");
// var email = localStorage.setItem("email");
// var dob = localStorage.setItem("dob");
// var gender = localStorage.setItem("gender");
// var language = localStorage.setItem("language");
// var box1 = localStorage.setItem("box1");
// var box2 = localStorage.setItem("box2");
// var box3 = localStorage.setItem("box3");

// // Insert data into table
// var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
// var newRow = table.insertRow();
// var firstnameCell = newRow.insertCell(0);
// var lastnameCell = newRow.insertCell(1);
// var emailCell = newRow.insertCell(2);
// var dobCell = newRow.insertCell(3);
// var genderCell = newRow.insertCell(4);
// var languageCell = newRow.insertCell(5);
// var box1Cell = newRow.insertCell(6);
// var box2Cell = newRow.insertCell(7);
// var box3Cell = newRow.insertCell(8);

// firstnameCell.innerHTML = firstname;
// lastnameCell.innerHTML = lastname;
// emailCell.innerHTML = email;
// dobCell.innerHTML = dob;
// genderCell.innerHTML = gender;
// languageCell.innerHTML = language;
// box1Cell.innerHTML = box1;
// box2Cell.innerHTML = box2;
// box3Cell.innerHTML = box3;

// // Clear local storage

// localStorage.removeItem("firstname");
// localStorage.removeItem("lastname");
// localStorage.removeItem("email");
// localStorage.removeItem("dob");
// localStorage.removeItem("gender");
// localStorage.removeItem("language");
// localStorage.removeItem("box1");
// localStorage.removeItem("box2");
// localStorage.removeItem("box3");