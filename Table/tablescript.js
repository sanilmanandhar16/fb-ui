// Users data
var users = [
  {
    name: "Ram",
    address: "Kathmandu",
    dob: "2000-1-2",
    email: "ram@gmail.com",
    language: "English",
    gender: "Male",
  },
  {
    name: "Sanil ",
    address: "Lalitpur",
    dob: "2004-10-2",
    email: "sanil@gmail.com",
    language: "Nepali",
    gender: "Male",
  },
  {
    name: "Hari",
    address: "Bhaktapur",
    dob: "2022-10-2",
    email: "Hari123@gmail.com",
    language: "Hindi",
    gender: "Male",
  },
  {
    name: "Sita",
    address: "Kuleshwor",
    dob: "2012-1-2",
    email: "Sita888@gmail.com",
    language: "Nepali",
    gender: "Female",
  },
];

// first euta table banauna function banaune

// append child le  add garne kaam garcha

function userTable() {
  var tbody = document.querySelector("#users tbody");

  users.forEach(function (user) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    var addressCell = document.createElement("td");
    addressCell.textContent = user.address;
    row.appendChild(addressCell);

    var dobCell = document.createElement("td");
    dobCell.textContent = user.dob;
    row.appendChild(dobCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);
    tbody.appendChild(row);

    var languageCell = document.createElement("td");
    languageCell.textContent = user.language;
    row.appendChild(languageCell);

    var genderCell = document.createElement("td");
    genderCell.textContent = user.gender;
    row.appendChild(genderCell);
  });
}

function addUser(event) {
  event.preventDefault(); // Prevent form submission

  // paila suru form bata values lyaune
  var name = document.querySelector("#name").value;
  var address = document.querySelector("#address").value;
  var dob = document.querySelector("#dob").value;
  var email = document.querySelector("#email").value;
  var language = document.querySelector('input[name="language"]:checked').value;
  var gender = document.querySelector("#gender").value;
  // newUSer object create
  var newUser = {
    name: name,
    address: address,
    dob: dob,
    email: email,

    language: language,
    gender: gender,
  };

  // Add the new user to the array
  users.push(newUser);

  // Clear the form inputs
  document.querySelector("#name").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#dob").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#gender").value = "";

  // Clear the table body and re-render the table
  var tbody = document.querySelector("#users tbody");
  tbody.innerHTML = "";
  userTable();
}

function searchUsers() {
  // first of all the input value is converted into the lowercase
  var searchInput = document.querySelector("#searchInput").value.toLowerCase();


  console.log("Search Input:", searchInput); //  searchInput le naya filtered array banayera dincha


  //filtered users is declared. Here users is an array to be filtered

  var filteredUsers = users.filter(function (user) {
    return (
      user.name.toLowerCase().includes(searchInput) ||
      user.address.toLowerCase().includes(searchInput)||
      user.dob.toLowerCase().includes(searchInput)||
      user.email.toLowerCase().includes(searchInput)||
      user.language.toLowerCase().includes(searchInput)||
      user.gender.toLowerCase().includes(searchInput)
    );
  });

// if substrings match bhako cha bhaye chai filtered users ma value aune bhayo
  console.log("Filtered Users:", filteredUsers);


  var tbody = document.querySelector("#users tbody");
  tbody.innerHTML = ""; //to clear

  //to play on row and datas
  filteredUsers.forEach(function (user) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    var addressCell = document.createElement("td");
    addressCell.textContent = user.address;
    row.appendChild(addressCell);

    var dobCell = document.createElement("td");
    dobCell.textContent = user.dob;
    row.appendChild(dobCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);
    
    var languageCell = document.createElement("td");
    languageCell.textContent = user.language;
    row.appendChild(languageCell);

     
    var genderCell = document.createElement("td");
    genderCell.textContent = user.gender;
    row.appendChild(genderCell);

    tbody.appendChild(row);
  });
}

// form ko submit event ma add user lai bind garne
var userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", addUser);

var searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", searchUsers);
userTable();
